import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const SITE_URL = "https://avira-baesek.vercel.app";
const TITLE = "אווירה בעסק — מוזיקה חכמה לעסקים";
const DESCRIPTION =
  "אוצרות מוזיקה מותאמת אישית לעסקים — פלייליסטים מקוריים לבית קפה, מסעדה, ספא, בוטיק וקליניקה, מותאמים לאופי המקום, לקהל ולשעות. חודש ניסיון חינם לבעלי עסקים ראשונים.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | אווירה בעסק",
  },
  description: DESCRIPTION,
  applicationName: "אווירה בעסק",
  category: "music",
  keywords: [
    "מוזיקה לעסקים",
    "פלייליסט לעסק",
    "מוזיקת רקע",
    "מוזיקה לבית קפה",
    "מוזיקה למסעדה",
    "מוזיקה לספא",
    "מוזיקה לבוטיק",
    "מוזיקה לקליניקה",
    "אוצרות מוזיקה",
    "אווירה בעסק",
  ],
  authors: [{ name: "אווירה בעסק" }],
  creator: "אווירה בעסק",
  publisher: "אווירה בעסק",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "אווירה בעסק",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
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
