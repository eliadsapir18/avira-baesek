"use client";

import { useEffect, useRef, useState } from "react";
import { SAMPLES } from "./sampleCatalog";

const EQ_BARS = [6, 11, 8, 14, 9, 13, 7, 12, 10, 8, 13, 6];

function fmt(t: number) {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioDemo() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [missing, setMissing] = useState(false);

  const active = SAMPLES.find((s) => s.slug === activeSlug) || null;

  // טוען ומנגן כשבוחרים סוג עסק
  useEffect(() => {
    const el = audioRef.current;
    if (!el || !activeSlug) return;
    setMissing(false);
    setCur(0);
    setDur(0);
    el.load();
    el.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [activeSlug]);

  function pick(slug: string) {
    if (slug === activeSlug) {
      togglePlay();
      return;
    }
    setActiveSlug(slug);
  }

  function togglePlay() {
    const el = audioRef.current;
    if (!el || !activeSlug) return;
    if (el.paused) {
      el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const el = audioRef.current;
    if (!el || !dur) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // RTL: התקדמות נמדדת מימין לשמאל
    const ratio = (rect.right - e.clientX) / rect.width;
    el.currentTime = Math.min(Math.max(ratio, 0), 1) * dur;
  }

  const pct = dur ? (cur / dur) * 100 : 0;

  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,168,83,0.06) 0%, transparent 70%), #0b0f22",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-[#d4a853] text-sm font-semibold tracking-[0.2em] uppercase">
            תשמעו לבד
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            איך נשמעת <span className="text-[#d4a853]">האווירה הנכונה</span>?
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            בחרו סוג עסק והאזינו לדגימה מקורית — בדיוק כמו שניצור עבורכם.
          </p>
        </div>

        {/* בורר סוגי עסק */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SAMPLES.map((s) => {
            const on = s.slug === activeSlug;
            return (
              <button
                key={s.slug}
                onClick={() => pick(s.slug)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${
                  on
                    ? "border-[#d4a853]/60 text-white bg-[#d4a853]/12 scale-105"
                    : "border-white/8 text-slate-300 hover:border-[#d4a853]/30 hover:text-white"
                }`}
                style={!on ? { background: "rgba(255,255,255,0.03)" } : undefined}
              >
                <span>{s.emoji}</span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* נגן */}
        <div
          className="rounded-2xl border border-white/8 p-6 md:p-8"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {!active ? (
            <p className="text-center text-slate-500 text-sm py-8">
              ↑ בחרו סוג עסק כדי לשמוע דגימה
            </p>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                {/* כפתור נגן/עצור */}
                <button
                  onClick={togglePlay}
                  disabled={missing}
                  aria-label={playing ? "עצור" : "נגן"}
                  className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(212,168,83,0.3)]"
                >
                  {playing ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
                    </svg>
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold">
                    {active.emoji} {active.label}
                  </p>
                  <p className="text-slate-400 text-sm truncate">{active.blurb}</p>
                </div>

                {/* אקולייזר מונפש */}
                <div className="hidden sm:flex items-end gap-[3px] h-8" aria-hidden>
                  {EQ_BARS.map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full bg-[#d4a853] inline-block"
                      style={{
                        height: `${h * 2}px`,
                        opacity: playing ? 1 : 0.25,
                        animation: `eqpulse ${0.7 + (i % 5) * 0.13}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.05}s`,
                        animationPlayState: playing ? "running" : "paused",
                      }}
                    />
                  ))}
                </div>
              </div>

              {missing ? (
                <p className="text-amber-300/80 text-sm text-center bg-amber-500/5 border border-amber-500/15 rounded-xl py-3 px-4">
                  הדגימה לא נטענה כרגע. נסו שוב בעוד רגע — או דברו איתנו, ונכין
                  דגימה שמתאימה בדיוק לאופי העסק שלכם.
                </p>
              ) : (
                <>
                  {/* פס התקדמות */}
                  <div
                    onClick={seek}
                    className="group relative h-2 rounded-full bg-white/8 cursor-pointer"
                  >
                    <div
                      className="absolute top-0 right-0 h-full rounded-full bg-[#d4a853] transition-[width] duration-150"
                      style={{ width: `${pct}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f0d080] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ right: `calc(${pct}% - 6px)` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 tabular-nums">
                    <span>{fmt(cur)}</span>
                    <span>{fmt(dur)}</span>
                  </div>
                </>
              )}
            </div>
          )}

          <audio
            ref={audioRef}
            src={active ? `/samples/${active.slug}.mp3` : undefined}
            preload="none"
            onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
            onEnded={() => setPlaying(false)}
            onError={() => {
              if (active) {
                setMissing(true);
                setPlaying(false);
              }
            }}
          />
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          הדגימות נוצרו ב-AI במיוחד להמחשה. בפרויקט אמיתי נכוונן לאופי המדויק של
          העסק שלכם.
        </p>
      </div>

      <style>{`
        @keyframes eqpulse {
          from { transform: scaleY(0.35); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
