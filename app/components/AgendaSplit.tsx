// components/AgendaSplit.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export type AgendaItem = {
  time: string;
  title: string;
  desc: string;
  img?: string;
  speakers?: string; // <-- baru
};

export default function AgendaSplit({
  entries,
  startIndex = 0,
}: {
  entries: AgendaItem[];
  startIndex?: number;
}) {
  const total = entries.length;
  const [i, setI] = React.useState(Math.min(Math.max(startIndex, 0), total - 1));
  const e = entries[i];

  const prefers = useReducedMotion();
  const fade = {
    initial: { opacity: 0, y: prefers ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  };

  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  return (
    <section className="bg-aurora-kcs px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,.35)] md:grid-cols-2">
        {/* LEFT: image */}
        <div className="relative aspect-[4/3] w-full md:aspect-auto">
          <Image
            key={i}
            src={e.img ?? "/image-bg.jpg"}
            alt={e.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* RIGHT: gradient panel */}
        <div className="relative p-8 md:p-10">
          <div
            className="pointer-events-none absolute inset-0"
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

          {/* Progress rail */}
          <div className="absolute right-6 top-8 bottom-8 w-px bg-white/15">
            <div
              className="absolute top-0 right-0 w-px rounded-b"
              style={{
                height: `${((i + 1) / total) * 100}%`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,0))",
              }}
            />
            <div className="absolute right-[-26px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#2D0953] shadow">
              {i + 1} of {total}
            </div>
          </div>

          {/* Content */}
          <motion.div key={i} {...fade} className="relative z-10 pr-12">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-fuchsia-200 ring-1 ring-inset ring-white/25 backdrop-blur-sm">
              {e.time}
            </div>

            <h3
              className="mt-4 text-[28px] leading-tight font-extrabold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#EFBBC4,#845194)" }}
            >
              {e.title}
            </h3>

            {e.speakers && (
              <p className="mt-1 text-sm font-medium text-fuchsia-200/90">Speakers: {e.speakers}</p>
            )}

            <p className="mt-3 max-w-[52ch] text-white/80">{e.desc}</p>

            <div className="pointer-events-none mt-8 h-3 w-[220px] rounded-full bg-white/8 ring-1 ring-white/10" />
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 z-10 flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
