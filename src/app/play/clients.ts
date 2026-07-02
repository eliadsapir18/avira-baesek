/**
 * קטלוג לקוחות הנגן — כל לקוח מקבל עמוד השמעה ב-/play/<slug>.
 * הקבצים יושבים ב-public/playlists/<clientSlug>/<playlistSlug>.m4a
 * (מומרים מהמקור עם: afconvert -f m4af -d aac -b 128000 in.mp3 out.m4a).
 *
 * ל-slug של לקוח אמיתי מוסיפים סיומת אקראית (למשל "cafe-noga-x7k2")
 * כדי שהקישור לא יהיה ניתן לניחוש. העמודים לא באינדקס (robots + noindex).
 */
export type ClientPlaylist = {
  slug: string;
  title: string;
  desc: string;
  /** מפתח אייקון: sunrise | sun | sunset | moon | sparkle | wave */
  icon: string;
};

export type PlayerClient = {
  slug: string;
  name: string;
  businessType: string;
  /** קוד גישה שנמסר ללקוח יחד עם הלינק (הגנה קלה + תחושת בלעדיות).
      ללקוח אמיתי — קוד אקראי בן 4-6 ספרות, שונה לכל לקוח. */
  pin: string;
  playlists: ClientPlaylist[];
};

export const CLIENTS: PlayerClient[] = [
  {
    slug: "bakery-demo",
    name: "מאפייה — לקוח לדוגמה",
    businessType: "מאפייה",
    pin: "1234",
    playlists: [
      {
        slug: "quiet",
        title: "אווירה שקטה",
        desc: "בוקר רגוע — קפה ראשון ומאפים חמים מהתנור",
        icon: "sunrise",
      },
      {
        slug: "upbeat",
        title: "אווירה מרימה",
        desc: "אנרגיה טובה לשעות העומס",
        icon: "sun",
      },
      {
        slug: "israeli",
        title: "אווירה ישראלית",
        desc: "ים־תיכוני חם — מושלם ליום שישי",
        icon: "sparkle",
      },
    ],
  },
];

export function getClient(slug: string) {
  return CLIENTS.find((c) => c.slug === slug) ?? null;
}

export function playlistSrc(client: PlayerClient, playlist: ClientPlaylist) {
  return `/playlists/${client.slug}/${playlist.slug}.m4a`;
}
