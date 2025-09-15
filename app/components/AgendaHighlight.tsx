"use client";

import * as React from "react";
import Image from "next/image";

type AgendaItem = {
  time: string;
  title: string;
  desc: string;
  speakers?: string;
  img?: string;
};

export default function AgendaHighlight({
  imageSrc = "/tulis.jpg",
  entry,
  entries,
  index = 1,
  total = 1,
}: {
  imageSrc?: string;
  entry?: AgendaItem; // mode single
  entries?: AgendaItem[]; // mode list-scroll
  index?: number; // hanya dipakai mode single
  total?: number; // hanya dipakai mode single
}) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!entries?.length || !listRef.current) return;
    const el = listRef.current;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight || 1;
      setProgress(Math.min(1, Math.max(0, el.scrollTop / max)));
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [entries]);

  const Item = ({ item }: { item: AgendaItem }) => (
    <div className="pr-12">
      {/* time pill */}
      <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-200 ring-1 ring-inset ring-white/25 backdrop-blur-sm">
        {item.time}
      </div>

      {/* title */}
      <h3
        className="mt-4 text-[28px] md:text-[30px] leading-tight font-extrabold text-white"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,.25)" }}
      >
        {item.title}
      </h3>

      {item.speakers && (
        <p className="mt-1 text-sm font-medium text-fuchsia-200/90">
          Speakers: {item.speakers}
        </p>
      )}

      <p className="mt-3 max-w-[52ch] text-white/85">{item.desc}</p>

      {/* tray dekor bawah */}
      <div className="pointer-events-none mt-8 h-3 w-[220px] rounded-full bg-white/10 ring-1 ring-white/15" />
    </div>
  );

  return (
    <section className="bg-aurora-kcs px-6 py-14 text-white">
      <div className="mx-auto grid  grid-cols-1 overflow-hidden rounded-xl border border-white/12 shadow-[0_24px_80px_rgba(0,0,0,.35)] md:grid-cols-2">
        {/* LEFT: image */}
        <div className="relative aspect-[4/3] w-full md:aspect-auto">
          <Image
            src={imageSrc}
            alt="Agenda visual"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* RIGHT: gradient panel */}
        <div className="relative p-8 md:p-10">
          {/* layers */}
          <div
            className="pointer-events-none absolute inset-0 rounded-t-3xl md:rounded-none md:rounded-r-3xl"
            aria-hidden
            style={{
              background:
                "linear-gradient(180deg, rgba(18,10,30,.88) 0%, rgba(29,14,53,.94) 50%, rgba(45,9,83,.96) 100%)," +
                "radial-gradient(900px 520px at 110% -10%, rgba(132,81,148,.45), rgba(132,81,148,0) 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            aria-hidden
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 30% -10%, rgba(255,255,255,.25) 0 1px, transparent 1px 42px)",
            }}
          />

          {/* progress rail kanan */}
          <div className="absolute right-6 top-8 bottom-8 w-px bg-white/15">
            <div
              className="absolute top-0 right-0 w-px rounded-b"
              style={{
                height: entries?.length
                  ? `${Math.max(6, progress * 100)}%`
                  : `${(index / Math.max(1, total)) * 100}%`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,0))",
              }}
            />
            <div className="absolute right-[-26px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#2D0953] shadow">
              {entries?.length ? "Scroll" : `${index} of ${total}`}
            </div>
          </div>

          {/* CONTENT */}
          {entries?.length ? (
            <div
              ref={listRef}
              className="relative z-10 max-h-[520px] overflow-y-auto pr-10 thin-scroll"
            >
              <div className="space-y-10">
                {entries.map((it, idx) => (
                  <div key={idx}>
                    <Item item={it} />
                    {idx < entries.length - 1 && (
                      <div className="my-8 h-px w-full bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative z-10">
              {entry && <Item item={entry} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
