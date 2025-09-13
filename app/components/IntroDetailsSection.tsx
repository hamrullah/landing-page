"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

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
    <section className="relative z-10 min-h-[92vh] w-full overflow-visible text-white bg-aurora-kcs">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div {...fadeUp} className="space-y-5">
          <h2 className="text-[40px] md:text-[48px] font-extrabold leading-tight text-[#0F0B1A]">
            Your{" "}
            <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
              2026 Playbook
            </span>{" "}
            Starts Here
          </h2>

          <p className="text-white/80 max-w-[60ch]">
            Gain insights from brands, creators, and platforms shaping the
            future of marketing. Leave with a Playbook of strategies — from
            storytelling to performance — to power your 2026 campaigns.
          </p>

          <ul className="mt-3 space-y-2 text-white/85 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>
                Event info block •{" "}
                <time dateTime="2025-10-16">October 16, 2025</time> •{" "}
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Colony+%40+KL+Eco+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline text-pink-300"
                >
                  Colony @ KL Eco City
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Invite-Only.</span>
            </li>
          </ul>

          <h3 className="pt-8 text-[32px] md:text-[40px] font-extrabold tracking-tight text-white">
            The{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Conversion
            </span>{" "}
            Playbook:
          </h3>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.aside {...fadeUp} className="space-y-8 text-white md:pl-6">
          {/* Event details block */}
          <div className="space-y-3">
            <br/>
            <br/>
            <br/>
            <div className="flex items-center gap-2 font-bold">
              <Calendar className="h-4 w-4 text-pink-300" />
              <span>October 16, 2025</span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <MapPin className="h-4 w-4 text-pink-300" />
              <span>
                Colony @ KL Eco City –{" "}
                <span className="text-pink-300">Invite-Only</span>
              </span>
            </div>
          </div>

          {/* Event description */}
          <br />
          <br/>
          <br />
          <br/>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Shaping Your 2026 Marketing Plan is an exclusive event designed for
            marketing leaders, brand builders, and decision-makers. You’ll hear
            from brands, platforms, and creators who are reshaping how marketing
            connects with people. The sessions are designed to inspire bold
            ideas, share practical strategies, and spark conversations. Why
            attend?{" "}
            <span className="mx-1">•</span> Future-ready insights
            <span className="mx-1">•</span> Actionable frameworks
            <span className="mx-1">•</span> Real brand stories
            <span className="mx-1">•</span> Meaningful connections.
          </p>
        </motion.aside>
      </div>

      {/* Divider */}
    </section>
  );
}
