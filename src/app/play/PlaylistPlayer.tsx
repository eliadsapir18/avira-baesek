"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconMoon,
  IconRepeat,
  IconSparkle,
  IconSun,
  IconSunrise,
  IconSunset,
  IconWave,
} from "../icons";
import type { ComponentType } from "react";
import type { PlayerClient } from "./clients";
import { playlistSrc } from "./clients";

const PLAYLIST_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  sunrise: IconSunrise,
  sun: IconSun,
  sunset: IconSunset,
  moon: IconMoon,
  sparkle: IconSparkle,
  wave: IconWave,
};

const EQ_BARS = [6, 11, 8, 14, 9, 13, 7, 12, 10, 8, 13, 6];

function fmt(t: number) {
  if (!Number.isFinite(t) || t < 0) return "0:00";
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = Math.floor(t % 60);
  const mm = h ? m.toString().padStart(2, "0") : m.toString();
  return `${h ? `${h}:` : ""}${mm}:${s.toString().padStart(2, "0")}`;
}

export default function PlaylistPlayer({ client }: { client: PlayerClient }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const skipAutoplay = useRef(true);
  const [activeSlug, setActiveSlug] = useState(client.playlists[0]?.slug);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [loop, setLoop] = useState(true);
  const [error, setError] = useState(false);

  const active =
    client.playlists.find((p) => p.slug === activeSlug) ?? client.playlists[0];

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !activeSlug) return;
    setError(false);
    setCur(0);
    setDur(0);
    el.load();
    if (skipAutoplay.current) {
      skipAutoplay.current = false;
      return;
    }
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
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
      {/* בחירת אווירה */}
      <div className="grid gap-3">
        {client.playlists.map((p) => {
          const on = p.slug === active?.slug;
          const Icon = PLAYLIST_ICONS[p.icon] ?? IconWave;
          return (
            <button
              key={p.slug}
              onClick={() => pick(p.slug)}
              className={`flex items-center gap-4 text-right rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
                on
                  ? "border-[#d4a853]/60 bg-[#d4a853]/8"
                  : "border-white/8 hover:border-[#d4a853]/30"
              }`}
              style={!on ? { background: "rgba(255,255,255,0.03)" } : undefined}
            >
              <span
                className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border ${
                  on
                    ? "border-[#d4a853]/60 text-[#f0d080]"
                    : "border-[#d4a853]/25 text-[#d4a853]"
                }`}
                style={{ background: "#0b0f22" }}
              >
                <Icon size={22} />
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className={`block font-bold ${on ? "text-[#f0d080]" : "text-white"}`}
                >
                  {p.title}
                </span>
                <span className="block text-slate-400 text-sm truncate">
                  {p.desc}
                </span>
              </span>
              {on && playing && (
                <span className="hidden sm:flex items-end gap-[3px] h-6" aria-hidden>
                  {EQ_BARS.slice(0, 8).map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full bg-[#d4a853] inline-block"
                      style={{
                        height: `${h * 1.5}px`,
                        animation: `eqpulse ${0.7 + (i % 5) * 0.13}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* נגן */}
      <div
        className="rounded-2xl border border-white/8 p-6 md:p-8"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              disabled={error}
              aria-label={playing ? "עצור" : "נגן"}
              className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(212,168,83,0.3)]"
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
                </svg>
              )}
            </button>

            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold">{active?.title}</p>
              <p className="text-slate-400 text-sm truncate">{active?.desc}</p>
            </div>

            <button
              onClick={() => setLoop((v) => !v)}
              aria-label={loop ? "כבה ניגון חוזר" : "הפעל ניגון חוזר"}
              title="ניגון חוזר"
              className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
                loop
                  ? "border-[#d4a853]/60 text-[#f0d080] bg-[#d4a853]/10"
                  : "border-white/10 text-slate-500 hover:text-slate-300"
              }`}
            >
              <IconRepeat size={16} />
            </button>
          </div>

          {error ? (
            <p className="text-amber-300/80 text-sm text-center bg-amber-500/5 border border-amber-500/15 rounded-xl py-3 px-4">
              הפלייליסט לא נטען כרגע. נסו לרענן את הדף — או דברו איתנו
              ונסדר את זה מיד.
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
          src={active ? playlistSrc(client, active) : undefined}
          preload="metadata"
          loop={loop}
          onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
          onEnded={() => setPlaying(false)}
          onError={() => {
            setError(true);
            setPlaying(false);
          }}
        />
      </div>

      <style>{`
        @keyframes eqpulse {
          from { transform: scaleY(0.35); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
