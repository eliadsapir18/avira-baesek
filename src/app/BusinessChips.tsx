"use client";

import { SAMPLES, SELECT_SAMPLE_EVENT } from "./sampleCatalog";

/**
 * צ'יפים של סוגי עסקים בסקשן "לאיזה עסקים זה מתאים".
 * צ'יפ שיש לו דגימה חיה בנגן (slug קיים ב-SAMPLES) הופך לכפתור:
 * לחיצה גוללת לנגן הדמו ובוחרת בו את הדגימה המתאימה.
 */
const businesses: { emoji: string; label: string; slug?: string }[] = [
  { emoji: "☕", label: "בתי קפה", slug: "cafe" },
  { emoji: "🍽️", label: "מסעדות", slug: "restaurant" },
  { emoji: "💆", label: "ספא ויופי", slug: "spa" },
  { emoji: "🧘", label: "יוגה ופילאטיס", slug: "yoga" },
  { emoji: "👗", label: "בוטיקים וחנויות", slug: "boutique" },
  { emoji: "🏥", label: "מרפאות וקליניקות" },
  { emoji: "🏨", label: "מלונות ולובי", slug: "hotel" },
  { emoji: "🥐", label: "מאפיות" },
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
        const live = !!b.slug && SAMPLES.some((s) => s.slug === b.slug);
        const base =
          "flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-colors";

        if (!live) {
          return (
            <div
              key={b.label}
              className={`${base} border-white/8 text-slate-300 hover:border-[#d4a853]/30 hover:text-white`}
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <span>{b.emoji}</span>
              <span>{b.label}</span>
            </div>
          );
        }

        return (
          <button
            key={b.label}
            onClick={() => listenTo(b.slug!)}
            className={`${base} cursor-pointer border-[#d4a853]/25 text-slate-200 hover:border-[#d4a853]/60 hover:text-white hover:bg-[#d4a853]/8`}
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span>{b.emoji}</span>
            <span>{b.label}</span>
            <span className="text-[#d4a853] text-xs font-semibold">
              🎧 לדגימה
            </span>
          </button>
        );
      })}
    </div>
  );
}
