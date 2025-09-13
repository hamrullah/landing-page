"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function EventAgendaSection() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, ease: EASE },
  } as const;

  return (
    <section className="relative z-10 min-h-[92vh] w-full overflow-visible text-white bg-aurora-kcs">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div {...fadeUp} className="space-y-6">
          <p className="text-xs uppercase tracking-wider text-pink-300">
            Schedule
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug text-white">
            Event Agenda – The{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Conversion Playbook
            </span>
            : Shaping Your 2026 Marketing Plan
          </h2>

          <div className="space-y-2 text-white/85 text-sm leading-relaxed">
            <p>
              <span className="font-semibold">Venue:</span> Colony @ KL Eco City
            </p>
            <p>
              <span className="font-semibold">Date:</span> 16 October 2025
            </p>
            <p>
              <span className="font-semibold">Time:</span> 12:30 PM – 5:30 PM
            </p>
            <p>
              <span className="font-semibold">Dress Code:</span> Business Casual
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div {...fadeUp} className="space-y-4 text-white">
          <h3 className="text-lg font-bold text-white">Event Objective</h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            This event brings together leading voices—brands, platforms, and
            creators—to share insights on the future of marketing. From
            rebranding journeys and creator-led strategies to programmatic
            innovation and data-driven storytelling, sessions are designed to
            spark ideas for building effective, future-ready campaigns. The goal
            is to equip participants with fresh perspectives, practical
            strategies, and inspiration for shaping their 2026 marketing plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
