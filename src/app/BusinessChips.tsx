"use client";

import { BUSINESS_ICONS, IconHeadphones } from "./icons";
import { SAMPLES, SELECT_SAMPLE_EVENT } from "./sampleCatalog";

/**
 * צ'יפים של סוגי עסקים בסקשן "לאיזה עסקים זה מתאים".
 * צ'יפ שיש לו דגימה חיה בנגן (slug קיים ב-SAMPLES) הופך לכפתור:
 * לחיצה גוללת לנגן הדמו ובוחרת בו את הדגימה המתאימה.
 * ה-slug הוא גם מפתח האייקון ב-BUSINESS_ICONS.
 */
const businesses: { slug: string; label: string }[] = [
  { slug: "cafe", label: "בתי קפה" },
  { slug: "restaurant", label: "מסעדות" },
  { slug: "spa", label: "ספא ויופי" },
  { slug: "yoga", label: "יוגה ופילאטיס" },
  { slug: "boutique", label: "בוטיקים וחנויות" },
  { slug: "clinic", label: "מרפאות וקליניקות" },
  { slug: "hotel", label: "מלונות ולובי" },
  { slug: "bakery", label: "מאפיות" },
];

export default function BusinessChips() {
  function listenTo(slug: string) {
    window.dispatchEvent(
      new CustomEvent(SELECT_SAMPLE_EVENT, { detail: slug })
    );
    document
      .getElementById("demo")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {businesses.map((b) => {
        const live = SAMPLES.some((s) => s.slug === b.slug);
        const Icon = BUSINESS_ICONS[b.slug];
        const base =
          "flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-colors";

        if (!live) {
          return (
            <div
              key={b.slug}
              className={`${base} border-white/8 text-slate-300 hover:border-[#d4a853]/30 hover:text-white`}
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {Icon && <Icon size={17} className="text-[#d4a853]/70" />}
              <span>{b.label}</span>
            </div>
          );
        }

        return (
          <button
            key={b.slug}
            onClick={() => listenTo(b.slug)}
            className={`${base} cursor-pointer border-[#d4a853]/25 text-slate-200 hover:border-[#d4a853]/60 hover:text-white hover:bg-[#d4a853]/8`}
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {Icon && <Icon size={17} className="text-[#d4a853]" />}
            <span>{b.label}</span>
            <span className="flex items-center gap-1 text-[#d4a853] text-xs font-semibold">
              <IconHeadphones size={13} />
              לדגימה
            </span>
          </button>
        );
      })}
    </div>
  );
}
