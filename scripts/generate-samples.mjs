#!/usr/bin/env node
/**
 * אווירה בעסק — מחולל דגימות אודיו (offline, חד-פעמי)
 *
 * מייצר שיר אינסטרומנטלי לכל סוג עסק דרך Suno (sunoapi.org),
 * מוריד אותו ל-public/samples/<slug>.mp3, כדי שנגן הדמו באתר
 * יגיש קבצים סטטיים — מהיר, חינמי למבקר, בלי חשיפת מפתח.
 *
 * שימוש:
 *   SUNO_API_KEY=xxxx node scripts/generate-samples.mjs
 *   npm run generate:samples            (קורא .env.local)
 *   npm run generate:samples -- --force (מייצר מחדש גם אם קיים)
 *
 * המפתח נקרא ממשתנה הסביבה SUNO_API_KEY בלבד — לעולם לא נכתב לקוד.
 */

import { writeFile, mkdir, access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "samples");

const API_BASE = process.env.SUNO_API_BASE || "https://api.sunoapi.org";
const MODEL = process.env.SUNO_MODEL || "V4_5";
const FORCE = process.argv.includes("--force");

/**
 * הקטלוג. ה-slug חייב להישאר זהה ל-slug ב-src/app/sampleCatalog.ts
 * (הקישור בין הסקריפט לנגן הוא /samples/<slug>.mp3).
 * style נכתב באנגלית — Suno מגיב הכי טוב לתיאורי ז'אנר/מצב-רוח באנגלית.
 */
const CATALOG = [
  {
    slug: "cafe",
    title: "Aroma Morning",
    style:
      "warm acoustic lo-fi, mellow jazzy chords, soft brushed drums, cozy coffeehouse ambience, relaxed, instrumental, ~80 bpm",
  },
  {
    slug: "restaurant",
    title: "Evening Service",
    style:
      "sophisticated dinner jazz, smooth bossa nova, upright bass, brushed drums, elegant evening restaurant ambience, instrumental",
  },
  {
    slug: "spa",
    title: "Still Water",
    style:
      "calm ambient spa music, soft warm pads, gentle water textures, healing, slow, meditative, instrumental, ~60 bpm",
  },
  {
    slug: "yoga",
    title: "Inner Breath",
    style:
      "meditative zen music, warm drones, soft flute, calming, mindful, slow, instrumental",
  },
  {
    slug: "boutique",
    title: "Runway",
    style:
      "modern chic deep house, smooth groove, stylish fashion boutique vibe, polished, instrumental, ~110 bpm",
  },
  {
    slug: "hotel",
    title: "Grand Lobby",
    style:
      "elegant lounge music, smooth downtempo, warm keys, refined hotel lobby ambience, instrumental",
  },
];

const SLEEP = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) =>
  access(p, constants.F_OK).then(
    () => true,
    () => false,
  );

/** טוען SUNO_API_KEY מ-env, ואם אין — מנסה .env.local */
async function loadKey() {
  if (process.env.SUNO_API_KEY) return process.env.SUNO_API_KEY.trim();
  try {
    const env = await readFile(join(ROOT, ".env.local"), "utf8");
    const m = env.match(/^\s*SUNO_API_KEY\s*=\s*(.+?)\s*$/m);
    if (m) return m[1].replace(/^["']|["']$/g, "").trim();
  } catch {
    /* אין .env.local — ניפול לשגיאה למטה */
  }
  return null;
}

async function startGeneration(key, item) {
  const res = await fetch(`${API_BASE}/api/v1/generate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customMode: true,
      instrumental: true,
      model: MODEL,
      style: item.style,
      title: item.title,
      // נדרש ע"י ה-API גם כשמבצעים polling. אנחנו לא מסתמכים על callback.
      callBackUrl: "https://example.com/no-callback",
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.code !== 200 || !json?.data?.taskId) {
    throw new Error(
      `יצירת המשימה נכשלה (${res.status}): ${json.msg || JSON.stringify(json)}`,
    );
  }
  return json.data.taskId;
}

const FAIL_STATES = new Set([
  "CREATE_TASK_FAILED",
  "GENERATE_AUDIO_FAILED",
  "CALLBACK_EXCEPTION",
  "SENSITIVE_WORD_ERROR",
]);

async function pollUntilReady(key, taskId, { timeoutMs = 360000, intervalMs = 8000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const res = await fetch(
      `${API_BASE}/api/v1/generate/record-info?taskId=${encodeURIComponent(taskId)}`,
      { headers: { Authorization: `Bearer ${key}` } },
    );
    const json = await res.json().catch(() => ({}));
    const status = json?.data?.status;
    const tracks = json?.data?.response?.sunoData || [];
    const ready = tracks.find((t) => t.audioUrl);

    if (FAIL_STATES.has(status)) {
      throw new Error(`Suno החזיר סטטוס כושל: ${status}`);
    }
    // FIRST_SUCCESS = הרצועה הראשונה מוכנה — מספיק לדגימה, חוסך זמן.
    if ((status === "SUCCESS" || status === "FIRST_SUCCESS") && ready) {
      return ready;
    }
    process.stdout.write(`   …${status || "PENDING"}\r`);
    await SLEEP(intervalMs);
  }
  throw new Error("timeout — חרגנו מזמן ההמתנה ליצירה");
}

async function downloadTo(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`הורדת האודיו נכשלה (${res.status})`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  const key = await loadKey();
  if (!key) {
    console.error(
      "\n✗ חסר SUNO_API_KEY.\n" +
        "  הרץ עם:  SUNO_API_KEY=xxxx npm run generate:samples\n" +
        "  או שים שורה  SUNO_API_KEY=xxxx  בקובץ .env.local (כבר ב-gitignore).\n",
    );
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });
  console.log(`\n🎵 אווירה בעסק — מחולל דגימות (model=${MODEL})\n`);

  const results = [];
  for (const item of CATALOG) {
    const dest = join(OUT_DIR, `${item.slug}.mp3`);
    if (!FORCE && (await exists(dest))) {
      console.log(`• ${item.slug}: כבר קיים — מדלג (──force כדי לכפות)`);
      results.push({ slug: item.slug, status: "skipped" });
      continue;
    }
    try {
      console.log(`• ${item.slug}: מתחיל יצירה — "${item.title}"`);
      const taskId = await startGeneration(key, item);
      console.log(`   taskId=${taskId} — ממתין (סטרים ~30-40ש', הורדה ~2-3 דק')`);
      const track = await pollUntilReady(key, taskId);
      const bytes = await downloadTo(track.audioUrl, dest);
      console.log(
        `   ✓ נשמר public/samples/${item.slug}.mp3 (${(bytes / 1024 / 1024).toFixed(1)}MB, ${Math.round(track.duration || 0)}ש')`,
      );
      results.push({ slug: item.slug, status: "ok" });
    } catch (err) {
      console.error(`   ✗ ${item.slug} נכשל: ${err.message}`);
      results.push({ slug: item.slug, status: "failed", error: err.message });
    }
  }

  const ok = results.filter((r) => r.status === "ok").length;
  const skip = results.filter((r) => r.status === "skipped").length;
  const fail = results.filter((r) => r.status === "failed").length;
  console.log(`\nסיכום: ${ok} נוצרו · ${skip} דולגו · ${fail} נכשלו\n`);
  process.exit(fail > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error("\n✗ שגיאה לא צפויה:", e);
  process.exit(1);
});
