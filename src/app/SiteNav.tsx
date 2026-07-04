import { WA_URL } from "./whatsapp";
import { IconWave, IconWhatsApp } from "./icons";

// "/#..." ולא "#..." — כדי שהעוגנים יעבדו גם מעמודי ה-SEO פר סוג עסק
const links = [
  { href: "/#demo", label: "דגימות" },
  { href: "/#packages", label: "מסלולים" },
  { href: "/#faq", label: "שאלות נפוצות" },
];

/** תפריט עליון דק וקבוע — ניווט עוגנים + CTA וואטסאפ מקוצר. */
export default function SiteNav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 border-b border-white/5"
      style={{
        background: "rgba(7,9,26,0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-6 h-14">
        <a
          href="/"
          className="flex items-center gap-2 text-white font-bold hover:text-[#f0d080] transition-colors"
        >
          <IconWave size={20} className="text-[#d4a853]" />
          <span>אווירה בעסק</span>
        </a>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-[#f0d080] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold bg-[#d4a853] text-[#07091a] hover:bg-[#f0d080] transition-colors"
        >
          <IconWhatsApp size={15} />
          <span>חודש ניסיון חינם</span>
        </a>
      </nav>
    </header>
  );
}
