"use client";

import { useRef, useState } from "react";
import { BUSINESS_ICONS } from "./icons";

const EQ_BARS = [6, 11, 8, 14, 9, 13, 7, 12, 10, 8, 13, 6];

function fmt(t: number) {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * נגן קומפקטי לדגימה אחת — לעמודי ה-SEO פר סוג עסק (/[business]).
 * גרסה מצומצמת של הנגן ב-AudioDemo: בלי בורר, דגימה אחת קבועה לפי slug.
 */
export default function MiniSamplePlayer({
  slug,
  label,
  blurb,
}: {
  slug: string;
  label: string;
  blurb: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [missing, setMissing] = useState(false);

  const Icon = BUSINESS_ICONS[slug];

  function togglePlay() {
    const el = audioRef.current;
    if (!el) return;
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
    <div
      className="rounded-2xl border border-white/8 p-6 md:p-8"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
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
            <p className="flex items-center gap-2 text-white font-semibold">
              {Icon && <Icon size={18} className="text-[#d4a853]" />}
              {label}
            </p>
            <p className="text-slate-400 text-sm truncate">{blurb}</p>
          </div>

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

      <audio
        ref={audioRef}
        src={`/samples/${slug}.mp3`}
        preload="metadata"
        onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onEnded={() => setPlaying(false)}
        onError={() => {
          setMissing(true);
          setPlaying(false);
        }}
      />

      <style>{`
        @keyframes eqpulse {
          from { transform: scaleY(0.35); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
