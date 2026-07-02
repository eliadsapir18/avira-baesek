// מקור אמת יחיד למספר/הודעת/קישור הוואטסאפ — כל ה-CTA באתר מסתמכים על זה.
export const WA_PHONE = "972546503587";

export const WA_MESSAGE = encodeURIComponent(
  'היי, ראיתי את השירות "אווירה בעסק" ואני רוצה לקבל חודש ניסיון חינם.\n\nסוג העסק שלי:\nשם העסק:\nעיר:\nהאווירה שאני רוצה במקום:',
);

export const WA_URL = `https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`;

// קישור וואטסאפ עם הודעה מותאמת (למשל CTA של מסלול ספציפי)
export function waUrlFor(message: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}
