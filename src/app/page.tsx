const WA_PHONE = "972500000000";
const WA_MESSAGE = encodeURIComponent(
  'היי, ראיתי את השירות "אווירה בעסק" ואני רוצה לקבל חודש ניסיון חינם.\n\nסוג העסק שלי:\nשם העסק:\nעיר:\nהאווירה שאני רוצה במקום:'
);
const WA_URL = `https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`;

function WhatsAppButton({ size = "default" }: { size?: "default" | "large" }) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full font-bold tracking-wide transition-all duration-300 cursor-pointer select-none";
  const sizes =
    size === "large"
      ? "px-10 py-5 text-xl md:text-2xl"
      : "px-8 py-4 text-lg md:text-xl";

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,168,83,0.35)] hover:shadow-[0_0_60px_rgba(212,168,83,0.55)]`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      אני רוצה חודש ניסיון חינם
    </a>
  );
}

function SoundWave() {
  const bars = [3, 7, 5, 9, 6, 11, 8, 13, 10, 8, 12, 7, 5, 9, 4];
  return (
    <div className="flex items-end gap-[3px] h-12 opacity-60" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[#d4a853] inline-block"
          style={{
            height: `${h * 3}px`,
            animation: `pulse ${0.8 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          from { transform: scaleY(0.4); opacity: 0.5; }
          to   { transform: scaleY(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const problems = [
  {
    icon: "📻",
    title: "מוזיקה גנרית שלא מייצגת אתכם",
    desc: "רדיו ברקע, פלייליסטים אקראיים, מוזיקה שלא קשורה לסגנון המקום שלכם — הלקוחות מרגישים את זה.",
  },
  {
    icon: "😶",
    title: "אווירה שלא מניעה לפעולה",
    desc: "המוזיקה הנכונה מאיטה, ממהרת, מרגיעה או מעוררת — בדיוק כפי שתרצו. המוזיקה הלא נכונה לא עושה כלום.",
  },
  {
    icon: "⚖️",
    title: "חשיפה לסיכוני רישוי",
    desc: "השמעת מוזיקה מסחרית בעסק דורשת לעיתים רישיונות והתעסקות מול כמה גופים. הרבה בעלי עסקים מחפשים פתרון פשוט וברור יותר.",
  },
];

const steps = [
  {
    num: "01",
    title: "מספרים לנו על העסק",
    desc: "סגנון המקום, קהל היעד, שעות הפעילות והאווירה שאתם רוצים ליצור.",
  },
  {
    num: "02",
    title: "אנחנו בונים את הסאונד שלכם",
    desc: "פלייליסטים מקוריים, מותאמים אישית לעסק — לא לקוחים מ-Spotify או מהרדיו.",
  },
  {
    num: "03",
    title: "מנגנים ומרגישים את ההבדל",
    desc: "מקבלים לינק לנגן מיד. ניתן לעדכן ולכוונן לאורך הדרך.",
  },
];

const trialPerks = [
  "פלייליסט מקורי של עד 60 דקות",
  "התאמה לפי סוג העסק, הקהל והאווירה",
  "קישור השמעה פשוט לשימוש בעסק",
  "תיקון אחד לפי בקשתכם במהלך הניסיון",
  "חודש ניסיון ללא התחייבות",
  "ליווי אישי בהתחלה",
];

const forWhom = [
  { emoji: "☕", label: "בתי קפה" },
  { emoji: "🍽️", label: "מסעדות" },
  { emoji: "💆", label: "ספא ויופי" },
  { emoji: "🏋️", label: "יוגה ופילאטיס" },
  { emoji: "👗", label: "בוטיקים וחנויות" },
  { emoji: "🏥", label: "מרפאות וקליניקות" },
  { emoji: "🏨", label: "מלונות ולובי" },
  { emoji: "🐾", label: "מאפיות" },
];

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">

      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,168,83,0.10) 0%, transparent 70%), linear-gradient(180deg, #07091a 0%, #0b0f22 100%)",
        }}
      >
        {/* Glow blob */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(212,168,83,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          <SoundWave />

          <div className="space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              מוזיקה חכמה לעסקים
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              אווירה בעסק
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-xl">
            מוזיקה חכמה שיוצרת את הוייב הנכון במקום שלכם
          </p>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg">
            פלייליסטים מקוריים לעסקים, מותאמים לאופי המקום, לקהל ולשעות
            הפעילות.
            <br />
            <span className="text-[#d4a853] font-semibold">
              חודש ניסיון חינם לבעלי עסקים ראשונים.
            </span>
          </p>

          <WhatsAppButton size="large" />

          <p className="text-xs text-slate-500">
            ללא כרטיס אשראי · ביטול בכל עת
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-slate-400">גלול למטה</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="animate-bounce"
            aria-hidden
          >
            <path
              d="M8 3v10M3 8l5 5 5-5"
              stroke="#d4a853"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 2. PROBLEM ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0b0f22" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              מה קורה בעסקים רבים
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              המוזיקה בעסק שלכם עובדת{" "}
              <span className="text-[#d4a853]">נגדכם</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              רוב בעלי העסקים לא שמים לב, אבל הלקוחות שלהם כן.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 space-y-3 border border-white/5 hover:border-[#d4a853]/20 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 3. SOLUTION ─────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background:
            "linear-gradient(180deg, #0b0f22 0%, #111627 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
            הפתרון
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            מוזיקה שנוצרה{" "}
            <span className="text-[#d4a853]">בשבילכם</span>,<br />
            לא בשביל כולם
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            אנחנו לא מחפשים עוד פלייליסט גנרי. אנחנו יוצרים לעסק שלכם
            מוזיקה מקורית לפי האווירה, הקצב והחוויה שאתם רוצים שהלקוחות
            ירגישו.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["התאמה אישית", "קישור השמעה פשוט", "חודש ניסיון חינם"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#d4a853]/30 text-[#d4a853] bg-[#d4a853]/8"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 4. HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0b0f22" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              איך זה עובד
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              שלושה צעדים פשוטים
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative flex flex-col gap-4">
                <span
                  className="text-6xl font-extrabold leading-none"
                  style={{ color: "rgba(212,168,83,0.15)" }}
                >
                  {s.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 5. WHAT YOU GET ─────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,168,83,0.06) 0%, transparent 70%), #111627",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              מה מקבלים
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              כל מה שכלול בחודש הניסיון
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {trialPerks.map((perk) => (
              <div
                key={perk}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-[#d4a853]/20 transition-colors"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span
                  className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(212,168,83,0.15)" }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1.5 5l2.5 2.5 4.5-4"
                      stroke="#d4a853"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-slate-200 text-sm leading-snug">
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 6. WHO IT'S FOR ─────────────────────────────────── */}
      <section className="py-24 px-6 text-center" style={{ background: "#0b0f22" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              מתאים ל
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              לאיזה עסקים זה מתאים?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              לכל עסק שיש בו אנשים — ושבו האווירה משפיעה על החוויה.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {forWhom.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/8 text-slate-300 text-sm font-medium hover:border-[#d4a853]/30 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span>{b.emoji}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 7. LEGAL NOTE ───────────────────────────────────── */}
      <section
        className="py-16 px-6"
        style={{ background: "#07091a" }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-6 border border-white/5 space-y-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#d4a853"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 8v4M12 16h.01"
                  stroke="#d4a853"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="text-[#d4a853] font-semibold text-sm">
                הערה משפטית חשובה
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              המוזיקה נוצרת במיוחד עבור העסק ואינה מבוססת על פלייליסטים
              מסחריים מוכרים. השירות נועד לספק אלטרנטיבה מקורית למוזיקת רקע
              בעסקים. מומלץ לכל עסק לבדוק באופן עצמאי את חובות הרישוי החלות
              עליו.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 8. FINAL CTA ────────────────────────────────────── */}
      <section
        className="py-28 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(212,168,83,0.10) 0%, transparent 70%), linear-gradient(180deg, #07091a 0%, #0b0f22 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              מוכנים לשנות את האווירה
              <br />
              <span className="text-[#d4a853]">במקום שלכם?</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              שלחו לנו הודעה בוואטסאפ ותקבלו חודש ניסיון חינם —<br />
              ללא התחייבות, ללא כרטיס אשראי.
            </p>
          </div>

          <WhatsAppButton size="large" />

          <p className="text-xs text-slate-500">
            מענה בדרך כלל תוך שעות ספורות
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center border-t border-white/5"
        style={{ background: "#07091a" }}
      >
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} אווירה בעסק · כל הזכויות שמורות
        </p>
      </footer>
    </main>
  );
}
