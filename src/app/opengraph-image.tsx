import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "אווירה בעסק — מוזיקה חכמה לעסקים";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// satori (next/og) לא מיישם BiDi — הוא מרנדר עברית בסדר הפוך.
// היפוך התווים מראש מבטל את ההיפוך שלו → תצוגה תקינה.
// תקף למחרוזות עברית טהורות בלבד (בלי ספרות/לטינית מעורבות).
const rtl = (s: string) => [...s].reverse().join("");

export default async function Image() {
  const [bold, semi] = await Promise.all([
    readFile(join(process.cwd(), "assets/Assistant-800.ttf")),
    readFile(join(process.cwd(), "assets/Assistant-600.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
          fontFamily: "Assistant",
          background:
            "radial-gradient(ellipse 75% 65% at 50% 28%, #161d40 0%, #07091a 68%)",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#d4a853",
            fontSize: 30,
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          {rtl("מוזיקה חכמה לעסקים")}
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 116,
            fontWeight: 800,
          }}
        >
          {rtl("אווירה בעסק")}
        </div>
        <div
          style={{
            display: "flex",
            color: "#cbd5e1",
            fontSize: 38,
            fontWeight: 600,
            marginTop: 22,
            maxWidth: 880,
            textAlign: "center",
          }}
        >
          {rtl("פלייליסטים מקוריים מותאמים לאופי המקום, לקהל ולשעות")}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 46,
            background: "#d4a853",
            color: "#07091a",
            fontSize: 30,
            fontWeight: 800,
            padding: "14px 38px",
            borderRadius: 999,
          }}
        >
          {rtl("חודש ניסיון חינם")}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Assistant", data: bold, style: "normal", weight: 800 },
        { name: "Assistant", data: semi, style: "normal", weight: 600 },
      ],
    },
  );
}
