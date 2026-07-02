"use client";

import { useEffect, useState, type ReactNode } from "react";
import { IconLock } from "../icons";

/**
 * שער קוד גישה לעמוד הנגן. הקוד נמסר ללקוח יחד עם הלינק.
 * אחרי הזנה נכונה נשמר דגל ב-localStorage — לא צריך להזין שוב באותו מכשיר.
 * זו הגנה קלה (הקוד קיים בצד הלקוח) — מטרתה בלעדיות ומניעת שיתוף אגבי,
 * לא אבטחה קשיחה.
 */
export default function PinGate({
  slug,
  pin,
  children,
}: {
  slug: string;
  pin: string;
  children: ReactNode;
}) {
  const storageKey = `avira-unlock-${slug}`;
  const [state, setState] = useState<"checking" | "locked" | "open">(
    "checking",
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setState(localStorage.getItem(storageKey) === "1" ? "open" : "locked");
    } catch {
      setState("locked");
    }
  }, [storageKey]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim() === pin) {
      try {
        localStorage.setItem(storageKey, "1");
      } catch {}
      setState("open");
    } else {
      setError(true);
      setValue("");
    }
  }

  if (state === "open") return <>{children}</>;
  if (state === "checking") return <div className="min-h-[40vh]" aria-hidden />;

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-white/8 p-8 flex flex-col items-center gap-5 text-center"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <span
          className="w-14 h-14 flex items-center justify-center rounded-full border border-[#d4a853]/40 text-[#d4a853]"
          style={{ background: "#0b0f22" }}
        >
          <IconLock size={24} />
        </span>
        <div className="space-y-1">
          <h2 className="text-white font-bold text-xl">
            הנגן האישי שלכם מחכה
          </h2>
          <p className="text-slate-400 text-sm">
            הזינו את קוד הגישה שקיבלתם מאיתנו יחד עם הקישור.
          </p>
        </div>
        <input
          type="password"
          inputMode="numeric"
          autoComplete="one-time-code"
          dir="ltr"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="• • • •"
          aria-label="קוד גישה"
          className="w-40 text-center text-2xl tracking-[0.4em] rounded-xl border border-white/10 bg-black/20 text-white py-3 outline-none focus:border-[#d4a853]/60 transition-colors placeholder:text-slate-600"
        />
        {error && (
          <p className="text-amber-300/90 text-sm">
            הקוד לא נכון — נסו שוב, או דברו איתנו בוואטסאפ.
          </p>
        )}
        <button
          type="submit"
          disabled={!value.trim()}
          className="rounded-full px-8 py-3 font-bold bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          כניסה לנגן
        </button>
      </form>
    </div>
  );
}
