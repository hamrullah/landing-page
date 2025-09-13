"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";

export type Speaker = { name: string; role: string; img: string };

/* --- tokens (mudah diubah kalau perlu) --- */
const GRAD_TEXT =
  "linear-gradient(90deg,#EEA6FF 0%,#FF63D1 52%,#C94BFF 100%)"; // untuk kata "Marketing Plan"
const GRAD_BTN  =
  "linear-gradient(90deg,#B973FF 0%,#FF63D1 55%,#8B5CF6 100%)"; // hover RSVP

/* helper teks gradient */
function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ backgroundImage: GRAD_TEXT }}
      className="bg-clip-text text-transparent font-extrabold"
    >
      {children}
    </span>
  );
}

export default function Hero({
  bgSrc,
  targetISO,
  speakers = [],
}: {
  bgSrc: string;
  targetISO: string;
  speakers?: Speaker[];
}) {
  const prefersReducedMotion = useReducedMotion();
  const { days, hours, minutes, seconds } = useCountdown(targetISO);

  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section className="relative z-10 min-h-[92vh] w-full overflow-visible text-white bg-aurora-kcs">
      {/* BG */}
      <Image
        src={bgSrc}
        alt="Event background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2a0a46]/70 via-[#4b1a7a]/60 to-[#160929]/80" />
      <div className="pointer-events-none absolute -left-1/4 top-[-20%] h-[150vh] w-[150vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(226,102,255,0.35),transparent_55%)]" />

      {/* NAV */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#" className="inline-flex items-center gap-2">
            <span className="inline-block h-8 w-16 rounded bg-white/10 backdrop-blur-md" aria-hidden />
            <span className="sr-only">KCS</span>
          </Link>
          <button className="group inline-flex items-center gap-2 text-sm tracking-[0.2em]">
            <span className="opacity-80">MENU</span>
            <Menu className="h-4 w-4 opacity-80 transition group-hover:opacity-100" />
          </button>
        </nav>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-40 pt-4 md:pb-56">
        <motion.div {...fadeUp}>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/80">
            OCTOBER 16, 2025 • KUALA LUMPUR
          </p>

          {/* judul: ukuran & leading sesuai mock */}
          <h1 className="text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-[56px]">
            THE CONVERSION <br />PLAYBOOK:Shaping Your <br /><GradText>Marketing Plan</GradText> Event
          </h1>

          {/* lokasi + CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <br />
            <span className="rounded-full bg-white/10 px-3 py-1">
              COLONY, KL ECO CITY
            </span>
            <a
              href="#register"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#38135f] shadow-sm ring-1 ring-inset ring-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70"
              style={{ backgroundImage: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = GRAD_BTN)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = "none")
              }
            >
              RSVP NOW
            </a>
          </div>
        </motion.div>

        {/* COUNTDOWN miring + glass + kartu cyan di belakang */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-6 top-[120px] hidden rotate-[-14deg] md:block"
          aria-hidden
        >
          {/* dekor kartu cyan */}
          <div className="absolute -right-8 -top-8 -z-10 h-[160px] w-[220px] rotate-6 rounded-md bg-gradient-to-br from-[#30E0FF] via-[#4CB7FF] to-[#5C7CFF] opacity-90 shadow-[0_18px_70px_rgba(0,0,0,0.45)]" />

          {/* glass card utama */}
          <div className="rounded-2xl border border-white/25 bg-white/20 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-[10px]">
            <div className="rotate-[14deg]">
              <CountdownDisplay d={days} h={hours} m={minutes} s={seconds} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* SPEAKER STRIP */}
      {speakers.length > 0 && (
        <div className="relative z-50 -mt-24 md:-mt-28 mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {speakers.slice(0, 4).map((sp, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-xl border border-fuchsia-300/20 bg-gradient-to-b from-fuchsia-600/70 to-fuchsia-800/70 p-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={sp.img}
                    alt={sp.name}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold">{sp.name}</h3>
                <p className="text-sm text-white/80">{sp.role}</p>
                <button className="mt-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-inset ring-white/25 transition group-hover:bg-white/20">
                  Profile
                </button>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* blend ke section berikutnya */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0414]" />
    </section>
  );
}

/* ================= Helpers ================= */

function useCountdown(targetISO: string) {
  const prefersReducedMotion = useReducedMotion();
  const target = React.useMemo(() => new Date(targetISO).getTime(), [targetISO]);

  const compute = React.useCallback(() => {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86_400_000);
    const h = Math.floor((diff / 3_600_000) % 24);
    const m = Math.floor((diff / 60_000) % 60);
    const s = Math.floor((diff / 1_000) % 60);
    return { d, h, m, s };
  }, [target]);

  const [state, setState] = React.useState(compute);

  React.useEffect(() => {
    const id = setInterval(() => setState(compute), prefersReducedMotion ? 1000 : 1000);
    return () => clearInterval(id);
  }, [compute, prefersReducedMotion]);

  return { days: state.d, hours: state.h, minutes: state.m, seconds: state.s };
}

function CountdownDisplay({ d, h, m, s }: { d: number; h: number; m: number; s: number }) {
  return (
    <div className="min-w-[280px] rounded-xl bg-black/35 p-4 ring-1 ring-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <p className="mb-2 text-xs tracking-[0.2em] text-white/75">TIME REMAINING</p>
      <div className="grid grid-cols-4 gap-3 text-center">
        <TimeBox label="Days" value={d} />
        <TimeBox label="Hours" value={h} />
        <TimeBox label="Min" value={m} />
        <TimeBox label="Sec" value={s} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="rounded-lg border border-white/20 bg-white/15 px-3 py-2 shadow-inner backdrop-blur-sm">
      <div className="text-2xl font-extrabold leading-none">{padded}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/75">{label}</div>
    </div>
  );
}
