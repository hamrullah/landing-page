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
    <section className="relative z-10 w-full overflow-visible bg-aurora-kcs/90 py-16 text-white">
      <div className="mx-auto mb-12 max-w-3xl space-y-3 px-6 text-5xl text-left md:px-0">
        <p className="text-xs uppercase tracking-wider text-pink-200">
          Schedule
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug text-blue-950">
          Event Agenda – The{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Conversion Playbook
          </span>
          : Shaping Your 2026 Marketing Plan
        </h2>
      </div>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12">
        {/* LEFT SIDE */}
        <motion.div {...fadeUp} className="space-y-6">
          <div className="space-y-2 text-sm leading-relaxed text-gray-200">
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
        <motion.div {...fadeUp} className="space-y-4">
          <h3 className="text-lg font-bold text-blue-950">Event Objective</h3>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
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
