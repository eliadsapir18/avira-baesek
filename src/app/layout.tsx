import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "אווירה בעסק — מוזיקה חכמה לעסקים",
  description:
    "פלייליסטים מקוריים לעסקים, מותאמים לאופי המקום, לקהל ולשעות הפעילות. חודש ניסיון חינם לבעלי עסקים ראשונים.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body>{children}</body>
    </html>
  );
}
