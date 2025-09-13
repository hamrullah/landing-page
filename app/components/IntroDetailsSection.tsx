"use client";
import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IntroDetailsSection() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, ease: EASE },
  } as const;

  return (
    <section className="relative z-0 w-full bg-aurora-kcs px-6 pt-44 pb-16 text-white md:pt-52 md:pb-20">
      {/* overlay tambahan (cahaya lembut), BUKAN parent konten */}
      <div
       
      />

      {/* ROW 1: kiri = heading + bullets, kanan = detail */}
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <h2 className="text-[34px] font-extrabold leading-[1.12] md:text-[40px]">
            <span>Your </span>
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">2026</span>{" "}
            <span className="bg-gradient-to-r from-[#EEA6FF] via-[#FF63D1] to-[#C94BFF] bg-clip-text text-transparent">
              Playbook
            </span>
            <br />
            <span>Starts Here</span>
          </h2>

          <p className="mt-4 max-w-prose text-white/85">
            Gain insights from brands, creators, and platforms shaping the future of marketing. Leave with a Playbook of
            strategies — from storytelling to performance — to power your 2026 campaigns.
          </p>

          <ul className="mt-5 space-y-2 text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>
                Event info block • <time dateTime="2025-10-16">October 16, 2025</time> •{" "}
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Colony+%40+KL+Eco+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-300 underline-offset-2 hover:text-fuchsia-200 hover:underline"
                >
                  Colony @ KL Eco City
                </Link>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Invite-Only.</span>
            </li>
          </ul>

          <h3 className="mt-8 text-2xl font-extrabold md:text-[28px]">
            The{" "}
            <span className="bg-gradient-to-r from-[#EEA6FF] to-[#FF63D1] bg-clip-text text-transparent">
              Conversion
            </span>{" "}
            Playbook:
          </h3>
        </motion.div>

        <motion.aside {...fadeUp} aria-label="Event details" className="text-white/90">
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-fuchsia-300" />
              <span className="font-medium">October 16, 2025</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-fuchsia-300" />
              <span>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Colony+%40+KL+Eco+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-fuchsia-300 underline-offset-2 hover:text-fuchsia-200 hover:underline"
                >
                  Colony @ KL Eco City
                </Link>
                <span className="mx-1">•</span>
                <span className="font-medium text-fuchsia-300">Invite-Only</span>
              </span>
            </li>
          </ul>
        </motion.aside>
      </div>

      {/* ROW 2: paragraf kanan */}
      <div className="relative mx-auto mt-6 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div />
          <p className="text-white/80">
            Shaping Your 2026 Marketing Plan is an exclusive event designed for marketing leaders, brand builders, and
            decision-makers. You’ll hear from brands, platforms, and creators who are reshaping how marketing connects
            with people. Sessions blend inspiration with practical frameworks and real brand stories — more predictable
            strategies, an agenda you can action immediately, and confidence to turn storytelling into performance.
          </p>
        </div>
      </div>

      {/* separator */}
      <div className="relative mx-auto mt-12 max-w-6xl border-t border-white/10" />
    </section>
  );
}
