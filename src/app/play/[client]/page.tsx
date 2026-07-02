import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconWave } from "../../icons";
import { WA_URL } from "../../whatsapp";
import PlaylistPlayer from "../PlaylistPlayer";
import { CLIENTS, getClient } from "../clients";

type Props = { params: Promise<{ client: string }> };

export function generateStaticParams() {
  return CLIENTS.map((c) => ({ client: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { client } = await params;
  const data = getClient(client);
  return {
    title: {
      absolute: data ? `${data.name} · אווירה בעסק` : "נגן · אווירה בעסק",
    },
    // עמוד פרטי של לקוח — לא לאינדוקס
    robots: { index: false, follow: false },
  };
}

export default async function PlayPage({ params }: Props) {
  const { client } = await params;
  const data = getClient(client);
  if (!data) notFound();

  return (
    <main
      className="min-h-screen flex flex-col px-6 py-10"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 70%), linear-gradient(180deg, #07091a 0%, #0b0f22 100%)",
      }}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-10 flex-1">
        {/* כותרת */}
        <header className="text-center space-y-3 pt-6">
          <div className="flex items-center justify-center gap-2 text-[#d4a853]">
            <IconWave size={22} />
            <span className="text-sm font-semibold tracking-[0.2em]">
              אווירה בעסק
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {data.name}
          </h1>
          <p className="text-slate-400">
            בחרו אווירה — והמוזיקה תתנגן ברצף. אפשר להשאיר את הדף פתוח
            כל היום.
          </p>
        </header>

        <PlaylistPlayer client={data} />

        {/* פוטר */}
        <footer className="mt-auto pt-10 text-center space-y-3">
          <p className="text-slate-500 text-sm">
            הפלייליסטים נוצרו במיוחד עבור {data.businessType} זו · רוצים
            לעדכן או להוסיף אווירה?
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#f0d080] text-sm font-semibold transition-colors"
          >
            דברו איתנו בוואטסאפ
          </a>
          <p className="text-slate-700 text-xs pt-4">
            מופעל באמצעות{" "}
            <a href="/" className="underline hover:text-slate-500">
              אווירה בעסק
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
