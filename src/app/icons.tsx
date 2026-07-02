import type { ComponentType, SVGProps } from "react";

/**
 * סט אייקוני קו אחיד (בסגנון lucide) שמחליף את האימוג'ים —
 * רינדור זהה בכל מכשיר ומראה פרימיום עקבי עם הזהב.
 * כולם stroke=currentColor כדי לרשת צבע מהטקסט שסביבם.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconRadio(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="9" width="18" height="11" rx="2" />
      <path d="M7 9l10-5" />
      <circle cx="16.5" cy="14.5" r="2.5" />
      <path d="M6.5 13h4M6.5 16h4" />
    </svg>
  );
}

export function IconMehFace(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 15.5h7" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7l14-2" />
      <path d="M5 7l-2.5 6a3 3 0 005 0L5 7zM19 5l-2.5 6a3 3 0 005 0L19 5z" />
    </svg>
  );
}

export function IconCoffee(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 9h12v6a5 5 0 01-5 5H9a5 5 0 01-5-5V9z" />
      <path d="M16 10h2a2.5 2.5 0 010 5h-2" />
      <path d="M8 5.5c0-1 .8-1 .8-2M11.5 5.5c0-1 .8-1 .8-2" />
    </svg>
  );
}

export function IconUtensils(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3v7a2 2 0 01-2 2v0a2 2 0 01-2-2V3M5 12v9" />
      <path d="M19 3c-2 1.5-3 4-3 7v2h3v9" />
    </svg>
  );
}

export function IconLotus(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20c-2.5-1.6-4-4.3-4-7.3 0-2.5 1.5-4.9 4-6.7 2.5 1.8 4 4.2 4 6.7 0 3-1.5 5.7-4 7.3z" />
      <path d="M12 20c-3.4.6-6.6-.5-9-3 1.8-1.2 3.9-1.8 6-1.7M12 20c3.4.6 6.6-.5 9-3-1.8-1.2-3.9-1.8-6-1.7" />
    </svg>
  );
}

export function IconMeditate(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 9.5c-2 0-3.5 1.5-3.5 3.5v2" />
      <path d="M12 9.5c2 0 3.5 1.5 3.5 3.5v2" />
      <path d="M4 17.5c2-.8 3.5-1 5.5-.5M20 17.5c-2-.8-3.5-1-5.5-.5" />
      <path d="M8.5 19.5h7" />
    </svg>
  );
}

export function IconShoppingBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8h12l1 12a1.8 1.8 0 01-1.8 2H6.8A1.8 1.8 0 015 20L6 8z" />
      <path d="M9 10V6a3 3 0 016 0v4" />
    </svg>
  );
}

export function IconClinic(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l8 4v6c0 4.5-3.2 7.2-8 8-4.8-.8-8-3.5-8-8V7l8-4z" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}

export function IconHotel(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16" />
      <path d="M2 21h20" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10.5 21v-3h3v3" />
    </svg>
  );
}

export function IconBread(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10a4 4 0 014-4h8a4 4 0 012.5 7.1c-.3.2-.5.6-.5 1V18a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18v-3.9c0-.4-.2-.8-.5-1A4 4 0 014 10z" />
      <path d="M10 10c-1 1.5-1 3.5 0 5M14.5 10c-1 1.5-1 3.5 0 5" />
    </svg>
  );
}

export function IconSunrise(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M9.5 5.5L12 3l2.5 2.5" />
      <path d="M6.3 12.3l-1.4-1.4M17.7 12.3l1.4-1.4M4 16h16" />
      <path d="M7.5 16a4.5 4.5 0 019 0" />
      <path d="M6 20h12" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
    </svg>
  );
}

export function IconSunset(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 7V3M9.5 4.5L12 7l2.5-2.5" />
      <path d="M6.3 12.3l-1.4-1.4M17.7 12.3l1.4-1.4M4 16h16" />
      <path d="M7.5 16a4.5 4.5 0 019 0" />
      <path d="M6 20h12" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 13.5A8 8 0 1110.5 4 6.5 6.5 0 0020 13.5z" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </svg>
  );
}

export function IconRepeat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M17 2l3 3-3 3" />
      <path d="M20 5H7a4 4 0 00-4 4v1" />
      <path d="M7 22l-3-3 3-3" />
      <path d="M4 19h13a4 4 0 004-4v-1" />
    </svg>
  );
}

export function IconHeadphones(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </svg>
  );
}

export function IconWave(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 10v4M7 7v10M11 4v16M15 7v10M19 10v4" strokeWidth={2.2} />
    </svg>
  );
}

export function IconWhatsApp({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** מיפוי slug של סוג עסק → אייקון, משותף לצ'יפים ולנגן הדמו. */
export const BUSINESS_ICONS: Record<string, ComponentType<IconProps>> = {
  cafe: IconCoffee,
  restaurant: IconUtensils,
  spa: IconLotus,
  yoga: IconMeditate,
  boutique: IconShoppingBag,
  clinic: IconClinic,
  hotel: IconHotel,
  bakery: IconBread,
};
