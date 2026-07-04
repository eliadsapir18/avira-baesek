import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FloatingWhatsApp from "../FloatingWhatsApp";
import MiniSamplePlayer from "../MiniSamplePlayer";
import SiteNav from "../SiteNav";
import { BUSINESS_ICONS, IconMoon, IconSun, IconSunrise, IconWhatsApp } from "../icons";
import { INDUSTRIES, getIndustry } from "../industries";
import { SAMPLES } from "../sampleCatalog";
import { waUrlFor } from "../whatsapp";

/**
 * עמוד SEO פר סוג עסק — /cafe, /restaurant וכו' ("מוזיקה לבית קפה"...).
 * כל התוכן מגיע מ-industries.ts; עמוד שאין לו רשומה שם מחזיר 404.
 */
type Props = { params: Promise<{ business: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ business: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { business } = await params;
  const ind = getIndustry(business);
  if (!ind) return {};
  return {
    title: ind.metaTitle,
    description: ind.metaDescription,
    alternates: { canonical: `/${ind.slug}` },
    openGraph: {
      title: `${ind.metaTitle} | אווירה בעסק`,
      description: ind.metaDescription,
      url: `/${ind.slug}`,
    },
  };
}

const MOMENT_ICONS = [IconSunrise, IconSun, IconMoon];

const SITE_URL = "https://avira-baesek.vercel.app";

export default async function IndustryPage({ params }: Props) {
  const { business } = await params;
  const ind = getIndustry(business);
  if (!ind) notFound();

  const sample = SAMPLES.find((s) => s.slug === ind.slug) ?? null;
  const others = INDUSTRIES.filter((i) => i.slug !== ind.slug);
  const waUrl = waUrlFor(ind.waMessage);
  const Icon = BUSINESS_ICONS[ind.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${ind.h1} — אווירה בעסק`,
    description: ind.metaDescription,
    url: `${SITE_URL}/${ind.slug}`,
    inLanguage: "he",
    serviceType: "אוצרות מוזיקה מותאמת אישית לעסקים",
    areaServed: { "@type": "Country", name: "ישראל" },
    provider: {
      "@type": "ProfessionalService",
      name: "אווירה בעסק",
      url: SITE_URL,
      telephone: "+972546503587",
    },
    offers: {
      "@type": "Offer",
      name: "חודש ניסיון חינם",
      price: "0",
      priceCurrency: "ILS",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ind.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const ctaButton = (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 text-xl md:text-2xl font-bold tracking-wide transition-all duration-300 cursor-pointer select-none bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,168,83,0.35)] hover:shadow-[0_0_60px_rgba(212,168,83,0.55)]"
    >
      <IconWhatsApp size={24} />
      אני רוצה חודש ניסיון חינם
    </a>
  );

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
      <SiteNav />
      <FloatingWhatsApp />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,168,83,0.10) 0%, transparent 70%), linear-gradient(180deg, #07091a 0%, #0b0f22 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-7">
          {Icon && (
            <span
              className="w-16 h-16 flex items-center justify-center rounded-full border border-[#d4a853]/25 text-[#d4a853]"
              style={{ background: "rgba(212,168,83,0.06)" }}
            >
              <Icon size={30} />
            </span>
          )}

          <div className="space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              {ind.tagline}
            </p>
            {/* כל ה-h1 בקטלוג מתחילים ב"מוזיקה " — שאר הכותרת מודגשת בזהב */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              מוזיקה{" "}
              <span className="text-[#d4a853]">
                {ind.h1.replace(/^מוזיקה /, "")}
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
            {ind.intro}
          </p>

          {ctaButton}

          <p className="text-xs text-slate-500">
            ללא כרטיס אשראי · ביטול בכל עת
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── דגימה חיה (אם קיימת) ───────────────────────────── */}
      {sample && (
        <>
          <section
            className="py-24 px-6"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,168,83,0.06) 0%, transparent 70%), #0b0f22",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 space-y-3">
                <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
                  תשמעו לבד
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  ככה נשמעת{" "}
                  <span className="text-[#d4a853]">האווירה הנכונה</span>
                </h2>
                <p className="text-slate-400 text-base max-w-lg mx-auto">
                  דגימה מקורית שיצרנו ל{ind.name} — בדיוק כמו שניצור עבורכם.
                </p>
              </div>

              <MiniSamplePlayer
                slug={sample.slug}
                label={sample.label}
                blurb={sample.blurb}
              />

              <p className="text-center text-xs text-slate-600 mt-6">
                הדגימה נוצרה ב-AI במיוחד להמחשה. בפרויקט אמיתי נכוונן לאופי
                המדויק של העסק שלכם.
              </p>
            </div>
          </section>

          <hr className="section-divider" />
        </>
      )}

      {/* ─── הבעיה ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0b0f22" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              נשמע מוכר?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              מה קורה כשהמוזיקה{" "}
              <span className="text-[#d4a853]">נשארת מקרית</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ind.pains.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 space-y-3 border border-white/5 hover:border-[#d4a853]/20 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── הסאונד הנכון ───────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(180deg, #0b0f22 0%, #111627 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              הפתרון
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {ind.soundTitle}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {ind.soundDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {ind.moments.map((m, i) => {
              const MIcon = MOMENT_ICONS[i] ?? IconSun;
              return (
                <div
                  key={m.label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <span
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-[#d4a853]/25 text-[#d4a853]"
                    style={{ background: "#0b0f22" }}
                  >
                    <MIcon size={26} />
                  </span>
                  <h3 className="text-white font-bold">{m.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[16rem]">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── איך זה עובד ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#111627" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
              איך זה עובד
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              שלושה צעדים — ויש לכם סאונד משלכם
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
                desc: "מקבלים לינק לנגן מיד — נפתח בכל מכשיר, בלי ציוד מיוחד. מעדכנים ומכווננים לאורך הדרך.",
              },
            ].map((s) => (
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

          <p className="text-center text-sm text-slate-400 mt-12">
            רוצים לראות את התמונה המלאה — מסלולים, השוואות ועוד דגימות?{" "}
            <a
              href="/"
              className="text-[#d4a853] hover:text-[#f0d080] font-semibold underline underline-offset-4 transition-colors"
            >
              לעמוד הראשי של אווירה בעסק
            </a>
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── FAQ ────────────────────────────────────────────── */}
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
              מוזיקה ל{ind.name} — מה חשוב לדעת
            </h2>
          </div>

          <div className="space-y-3">
            {ind.faqs.map((f) => (
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

      {/* ─── CTA סופי ───────────────────────────────────────── */}
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
              המקום שלכם ראוי
              <br />
              <span className="text-[#d4a853]">לסאונד משלו</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              שלחו לנו הודעה בוואטסאפ ותקבלו חודש ניסיון חינם —<br />
              ללא התחייבות, ללא כרטיס אשראי.
            </p>
          </div>

          {ctaButton}

          <p className="text-xs text-slate-500">
            מענה בדרך כלל תוך שעות ספורות
          </p>
        </div>
      </section>

      {/* ─── עסקים נוספים + פוטר ────────────────────────────── */}
      <footer
        className="py-12 px-6 border-t border-white/5"
        style={{ background: "#07091a" }}
      >
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h3 className="text-slate-300 text-sm font-semibold">
              מוזיקה מותאמת לעסקים נוספים
            </h3>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="text-slate-500 hover:text-[#d4a853] text-sm transition-colors"
                >
                  {o.h1}
                </a>
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:text-slate-400 transition-colors">
              אווירה בעסק
            </a>{" "}
            · כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </main>
  );
}
