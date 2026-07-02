/**
 * קטלוג הדגימות שמוצג בנגן הדמו.
 * ה-slug חייב להיות זהה ל-slug ב-scripts/generate-samples.mjs —
 * הקובץ שנוצר שם הוא /public/samples/<slug>.mp3 והנגן טוען /samples/<slug>.mp3.
 */
export type Sample = {
  slug: string; // גם מפתח האייקון ב-BUSINESS_ICONS (icons.tsx)
  label: string;
  blurb: string;
};

// אירוע גלובלי: סקשן "לאיזה עסקים" משדר בחירת סוג עסק, והנגן מאזין ובוחר את הדגימה.
export const SELECT_SAMPLE_EVENT = "avira:select-sample";

// מוצגות באתר רק דגימות שכבר נוצרו (יש להן /public/samples/<slug>.mp3).
export const SAMPLES: Sample[] = [
  { slug: "cafe", label: "בית קפה", blurb: "אקוסטי חם, רגוע, מזמין להישאר" },
  { slug: "restaurant", label: "מסעדה", blurb: "ג'אז ערב מעודן, תחכום" },
  { slug: "spa", label: "ספא ויופי", blurb: "אמביינט מרגיע, ריפוי ושקט" },
];

// טרם נוצרו — נגמרו קרדיטים ב-Suno בעת היצירה (2026-05-18).
// כדי להפעיל: לטעון קרדיטים ב-sunoapi.org → `npm run generate:samples`
// (ידלג על ה-3 הקיימות, ייצר רק את אלה) → להעביר שורות אלה ל-SAMPLES למעלה.
export const COMING_SOON: Sample[] = [
  { slug: "yoga", label: "יוגה ופילאטיס", blurb: "מדיטטיבי, נשימה ושקט פנימי" },
  { slug: "boutique", label: "בוטיק וחנות", blurb: "דיפ האוס שיק, מודרני" },
  { slug: "hotel", label: "מלון ולובי", blurb: "לאונג' אלגנטי, חמים ומלוטש" },
];
