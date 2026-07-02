import AudioDemo from "./AudioDemo";
import BusinessChips from "./BusinessChips";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { WA_URL } from "./whatsapp";

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

// נתונים ממחקרים פומביים על מוזיקת רקע בעסקים — social proof אמיתי,
// בלי להמציא המלצות. המקורות מופיעים בכיתוב מתחת לסקשן.
const stats = [
  {
    value: "+9%",
    label: "עלייה במכירות כשהמוזיקה מותאמת לאופי המותג, לעומת מוזיקה פופולרית אקראית",
    source: "HUI Research, 2017",
  },
  {
    value: "40%",
    label: "מהלקוחות נשארים זמן רב יותר בעסק שמשמיע מוזיקה שהם אוהבים",
    source: "MRC Data (Nielsen Music), 2021",
  },
  {
    value: "62%",
    label: "מהמבקרים בבתי קפה מעריכים מקום שמשמיע מוזיקה שמתאימה להם",
    source: "MRC Data (Nielsen Music), 2021",
  },
  {
    value: "92%",
    label: "מהמותגים מדווחים: מוזיקה נכונה מובילה לשהייה ארוכה יותר ולהוצאה גבוהה יותר",
    source: "TrendCandy, 2024",
  },
];

const dayparts = [
  {
    emoji: "🌅",
    time: "בוקר",
    title: "פתיחה רכה",
    desc: "אקוסטי עדין שמלווה את הקפה הראשון של היום",
  },
  {
    emoji: "☀️",
    time: "צהריים",
    title: "שעת העומס",
    desc: "קצב שמחזיק אנרגיה ומזיז את התור קדימה",
  },
  {
    emoji: "🌇",
    time: "אחר הצהריים",
    title: "זרימה נינוחה",
    desc: "גרוב רגוע שמזמין את הלקוחות להישאר עוד קצת",
  },
  {
    emoji: "🌙",
    time: "ערב",
    title: "סוגרים יפה",
    desc: "חמימות מעודנת שמסיימת את היום בטעם של עוד",
  },
];

type CompareMark = "yes" | "no" | "partial";

const compareColumns = ["רדיו", "סטרימינג אישי*", "אווירה בעסק"] as const;

const compareRows: { feature: string; marks: [CompareMark, CompareMark, CompareMark] }[] = [
  { feature: "מוזיקה שנבנתה לאופי העסק שלכם", marks: ["no", "no", "yes"] },
  { feature: "בלי פרסומות ובלי קריינות", marks: ["no", "partial", "yes"] },
  { feature: "מותאם לשעות ולקצב של היום", marks: ["no", "no", "yes"] },
  { feature: "מוזיקה מקורית שנוצרה עבורכם", marks: ["no", "no", "yes"] },
  { feature: "ליווי אישי וסבב תיקונים", marks: ["no", "no", "yes"] },
];

const SITE_URL = "https://avira-baesek.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "אווירה בעסק",
  description:
    "אוצרות מוזיקה מותאמת אישית לעסקים — פלייליסטים מקוריים לבית קפה, מסעדה, ספא, בוטיק וקליניקה, מותאמים לאופי המקום, לקהל ולשעות הפעילות.",
  url: SITE_URL,
  telephone: "+972546503587",
  inLanguage: "he",
  serviceType: "אוצרות מוזיקה מותאמת אישית לעסקים",
  areaServed: { "@type": "Country", name: "ישראל" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+972546503587",
    availableLanguage: ["he"],
  },
  makesOffer: {
    "@type": "Offer",
    name: "חודש ניסיון חינם",
    description:
      "חודש ניסיון חינם לבעלי עסקים ראשונים — פלייליסט מותאם, סבב תיקונים ואונבורדינג.",
    price: "0",
    priceCurrency: "ILS",
  },
};

const faqs = [
  {
    q: 'מה זה "אווירה בעסק"?',
    a: "שירות אוצרות מוזיקה: פלייליסט מקורי שנבנה במיוחד לעסק שלך — מותאם לאופי המקום, לקהל ולשעות הפעילות — במקום רדיו או סטרימינג גנרי.",
  },
  {
    q: "איך משמיעים את המוזיקה בעסק?",
    a: "מקבלים לינק השמעה פשוט שמתנגן ברצף. לא צריך ציוד מיוחד או התקנה — פותחים את הלינק והמוזיקה מתנגנת.",
  },
  {
    q: "מה כלול בחודש הניסיון החינם?",
    a: "פלייליסט מותאם לאופי העסק, התאמה לקהל ולשעות, סבב תיקונים ואונבורדינג. ללא כרטיס אשראי, וניתן לבטל בכל עת.",
  },
  {
    q: "כמה זה עולה אחרי חודש הניסיון?",
    a: "לקראת סוף חודש הניסיון נתאים יחד מסלול חודשי לפי היקף המוזיקה והצרכים של העסק — בשקיפות מלאה ולפני כל חיוב. אין התחייבות: אם זה לא מתאים לכם, פשוט מפסיקים.",
  },
  {
    q: "לאיזה עסקים זה מתאים?",
    a: "בית קפה, מסעדה, ספא, יוגה, בוטיק, קליניקה, מלון ומאפייה — כל מקום שבו האווירה משפיעה על החוויה של הלקוחות.",
  },
  {
    q: "מה לגבי זכויות יוצרים ורישוי השמעה?",
    a: "המוזיקה נוצרת במיוחד עבורך ואינה מבוססת על פלייליסטים מסחריים מוכרים. עם זאת, מומלץ לכל עסק לבדוק באופן עצמאי את חובות הרישוי החלות עליו.",
  },
  {
    q: "איך מתחילים?",
    a: "לוחצים על כפתור הוואטסאפ, מספרים בקצרה על העסק והאווירה הרצויה, ומתחילים את חודש הניסיון החינם.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FloatingWhatsApp />

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

      {/* ─── 3.5 AUDIO DEMO ──────────────────────────────────── */}
      <AudioDemo />

      <hr className="section-divider" />

      {/* ─── 3.7 STATS — נתונים ממחקרים ─────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(180deg, #0b0f22 0%, #111627 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              למה זה משתלם
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              זה לא רק תחושה. <span className="text-[#d4a853]">זה מדיד.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              מחקרים על מוזיקת רקע בעסקים מראים שוב ושוב: המוזיקה הנכונה
              משפיעה ישירות על כמה זמן נשארים — וכמה מוציאים.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 border border-white/5 hover:border-[#d4a853]/20 transition-colors duration-300 space-y-2"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <p
                  dir="ltr"
                  className="text-5xl font-extrabold text-[#d4a853] tabular-nums text-right"
                >
                  {s.value}
                </p>
                <p className="text-slate-200 text-base leading-relaxed">
                  {s.label}
                </p>
                <p className="text-slate-500 text-xs">{s.source}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-600 mt-8 max-w-2xl mx-auto">
            הנתונים מתוך מחקרים וסקרים פומביים על מוזיקת רקע בעסקים: HUI
            Research (2017) · MRC Data, לשעבר Nielsen Music (2021) · סקר
            TrendCandy בקרב 150 מנהלי מותגים בארה״ב (2024).
          </p>
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

      {/* ─── 4.5 DAYPARTS — היום שלכם בסאונד ────────────────── */}
      <section className="py-24 px-6" style={{ background: "#111627" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              מותאם לשעות הפעילות
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              המוזיקה משתנה <span className="text-[#d4a853]">עם היום שלכם</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              עסק לא נשמע אותו דבר בשמונה בבוקר ובשמונה בערב. הפלייליסט
              שלכם נבנה סביב הקצב האמיתי של המקום.
            </p>
          </div>

          <div className="relative">
            {/* קו הזמן — דסקטופ בלבד */}
            <div
              className="hidden md:block absolute top-7 right-[12%] left-[12%] h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.35), rgba(212,168,83,0.35), transparent)",
              }}
              aria-hidden
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dayparts.map((d) => (
                <div
                  key={d.time}
                  className="relative flex flex-col items-center text-center gap-2"
                >
                  <span
                    className="w-14 h-14 flex items-center justify-center rounded-full text-2xl border border-[#d4a853]/25"
                    style={{ background: "#0b0f22" }}
                  >
                    {d.emoji}
                  </span>
                  <p className="text-[#d4a853] text-xs font-semibold tracking-widest">
                    {d.time}
                  </p>
                  <h3 className="text-white font-bold">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
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

          <BusinessChips />
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 6.5 FAQ ─────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,168,83,0.05) 0%, transparent 70%), #0b0f22",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              שאלות נפוצות
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              כל מה שרציתם לדעת
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/5 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-slate-100 text-base font-medium [&::-webkit-details-marker]:hidden hover:text-white">
                  <span>{f.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="flex-shrink-0 text-[#d4a853] transition-transform duration-300 group-open:rotate-180"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 -mt-1 text-slate-400 text-sm leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── 7. COMPARISON — למה דווקא אנחנו ────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,168,83,0.05) 0%, transparent 70%), #07091a",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              למה דווקא אנחנו
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              רדיו וסטרימינג <span className="text-[#d4a853]">לא נבנו לעסק שלכם</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              ההבדל בין מוזיקה שסתם מתנגנת ברקע — למוזיקה שעובדת בשבילכם.
            </p>
          </div>

          <div
            className="rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {/* כותרת הטבלה */}
            <div className="grid grid-cols-[1fr_repeat(3,minmax(3.5rem,5.5rem))] items-center gap-2 px-4 md:px-6 py-4 border-b border-white/8">
              <span />
              {compareColumns.map((c, i) => (
                <span
                  key={c}
                  className={`text-center text-xs md:text-sm font-semibold leading-tight ${
                    i === 2 ? "text-[#d4a853]" : "text-slate-400"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>

            {compareRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_repeat(3,minmax(3.5rem,5.5rem))] items-center gap-2 px-4 md:px-6 py-4 border-b border-white/5 last:border-b-0"
              >
                <span className="text-slate-200 text-sm leading-snug">
                  {row.feature}
                </span>
                {row.marks.map((mark, i) => (
                  <span
                    key={i}
                    className={`text-center ${
                      i === 2 ? "bg-[#d4a853]/6 rounded-lg py-1.5 -my-1.5" : ""
                    }`}
                  >
                    {mark === "yes" ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="inline-block"
                        aria-label="כן"
                      >
                        <path
                          d="M4 12.5l5 5L20 6.5"
                          stroke="#d4a853"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : mark === "partial" ? (
                      <span
                        className="text-amber-200/60 text-sm font-bold"
                        aria-label="חלקי"
                      >
                        ~
                      </span>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="inline-block opacity-30"
                        aria-label="לא"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="#94a3b8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-xs leading-relaxed mt-4">
            * שירותי סטרימינג אישיים (כמו ספוטיפיי) מיועדים לפי תנאי השימוש
            שלהם לשימוש אישי ולא עסקי, ובחלק מהמסלולים כוללים פרסומות.
          </p>

          {/* הערה משפטית */}
          <div
            className="rounded-2xl p-6 border border-white/5 space-y-3 mt-8"
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
