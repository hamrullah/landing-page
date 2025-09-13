"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* =========================================================
   Speakers + Agenda Section
   - Top: horizontal snap carousel of speakers (card style matches hero)
   - Bottom: agenda timeline with time, title, desc, optional speakers line
   - Props are flexible and typed; drop-in under IntroDetailsSection
========================================================= */

const EASE = [0.22, 1, 0.36, 1] as const;

export type Speaker = { name: string; role: string; img: string };
export type AgendaItem = {
  time: string;
  title: string;
  desc: string;
  speakers?: string;
};

type Props = {
  speakers: Speaker[];
  agenda: AgendaItem[];
};

export default function SpeakersAndAgenda({ speakers, agenda }: Props) {
  return (
    <section className="bg-aurora-kcs px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-16">
        <SpeakersCarousel speakers={speakers} />
        <AgendaTimeline items={agenda} />
      </div>
    </section>
  );
}

/* ===================== Speakers Carousel ===================== */

function SpeakersCarousel({ speakers }: { speakers: Speaker[] }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const dx = card ? card.offsetWidth + 16 : 320; // include gap
    el.scrollBy({ left: dir * dx, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Meet the <span className="text-fuchsia-300">Speakers</span>
        </h2>
        <div className="hidden gap-2 md:flex">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="snap-x snap-mandatory overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex gap-4 pr-4">
          {speakers.map((sp, i) => (
            <SpeakerCard key={i} sp={sp} />
          ))}
        </div>
      </div>

      {/* mobile arrows (overlay) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between md:pointer-events-auto md:flex">
        <button
          aria-label="Prev"
          onClick={() => scrollBy(-1)}
          className="pointer-events-auto ml-[-12px] inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/20 hover:bg-black/50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="pointer-events-auto mr-[-12px] inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/20 hover:bg-black/50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function SpeakerCard({ sp }: { sp: Speaker }) {
  return (
    <article
      data-card
      className="group relative w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border border-fuchsia-300/20 bg-gradient-to-b from-fuchsia-600/70 to-fuchsia-800/70 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
    >
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image src={sp.img} alt={sp.name} fill sizes="260px" className="object-cover" />
      </div>
      <h3 className="text-base font-semibold">{sp.name}</h3>
      <p className="text-sm text-white/80">{sp.role}</p>
      <button className="mt-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-inset ring-white/25 transition group-hover:bg-white/20">
        Profile
      </button>
    </article>
  );
}

/* ===================== Agenda Timeline ===================== */

function AgendaTimeline({ items }: { items: AgendaItem[] }) {
  const prefersReducedMotion = useReducedMotion();
  const fade = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: EASE },
  } as const;

  return (
    <div className="grid gap-10 md:grid-cols-[1fr]">
      <header className="space-y-2">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Event <span className="text-fuchsia-300">Agenda</span>
        </h2>
        <p className="text-white/80">Conversion Playbook — 12:30 PM to 5:30 PM</p>
      </header>

      <ol className="relative ml-1 border-l border-white/15 pl-6">
        {/* gradient line embellishment */}
        <div className="pointer-events-none absolute left-[-1px] top-0 h-full w-px bg-gradient-to-b from-fuchsia-300 via-white/30 to-transparent" />

        {items.map((it, idx) => (
          <motion.li key={idx} {...fade} className="relative mb-8 last:mb-0">
            {/* dot */}
            <span className="absolute -left-[9px] top-1 block h-4 w-4 rounded-full bg-gradient-to-br from-fuchsia-300 to-pink-400 ring-2 ring-[#1a0b2a]" />

            <div className="flex flex-wrap items-baseline gap-3">
              <time className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 ring-1 ring-inset ring-white/20">
                {it.time}
              </time>
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </div>
            <p className="mt-2 max-w-3xl text-white/80">{it.desc}</p>
            {it.speakers && (
              <p className="mt-1 text-sm text-white/70">{it.speakers}</p>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
