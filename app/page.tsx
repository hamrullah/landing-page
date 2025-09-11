"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Mail, AlertCircle, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
  FaBehance,
  FaYoutube,
} from "react-icons/fa6";
import { CircularTestimonials } from "./components/ui/circular-testimonials";
import { Changelog1 } from "./components/ui/changelog-1";
import { Component as SignInCard } from "./components/ui/sign-in-card-2";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* Static Data */
const EASE = [0.22, 1, 0.36, 1] as const;

const SPEAKERS = [
  { name: "Christian Gerron", role: "CRO, StackAdapt", img: "/attend1.jpg",quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!" },
  { name: "Liam McCarten", role: "APAC VP, StackAdapt", img: "/attend2.jpg" ,quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!"},
  { name: "Anna Goodridge", role: "Senior Conversion Expert", img: "/attend3.jpg",quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!" },
  { name: "Jessica Tan", role: "Marketing Leader", img: "/attend4.jpg" ,quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!"},
  { name: "David Wong", role: "CEO", img: "/attend1.jpg", quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!" },
  { name: "Miranda Simopoulos", role: "Regional CMO", img: "/attend3.jpg" ,quote : "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!"},
];

const SPEAKER_TESTIMONIALS = SPEAKERS.map((s) => ({
  name: s.name,
  designation: s.role,
  src: s.img,
  quote: s.quote
}));

const AGENDA = [
  {
    time: "12:30 – 1:15 PM",
    title: "Registration & Networking Lunch",
    desc: "Guest arrivals with light bites and canapés, informal networking.",
  },
  {
    time: "1:15 – 1:20 PM",
    title: "Welcome by Emcee",
    desc: "Emcee introduction, overview of the day’s objective: Exploring strategies that convert awareness into measurable impact.",
  },
  {
    time: "1:20 – 1:25 PM",
    title: "CEO Opening Keynote – Keem",
    desc: "Welcome address and quick introduction. Setting the tone: Why this conversation matters for brands moving into 2026.",
    speakers: "Keem, CEO",
  },
  {
    time: "1:25 – 1:45 PM",
    title: "Julie’s: Rebranding that Converts Perceptions into Loyalty",
    desc: "Case study on how Julie’s repositioned its brand to build trust and long-term consumer connection.",
    speakers: "Julie’s Marketing Team",
  },
  {
    time: "1:45 – 2:05 PM",
    title: "PayNet : Shaping Everyday Behaviour: Educating Users into Adoption",
    desc: "How to build trust and adoption by integrating seamlessly into daily life, turning innovative solutions into habits that feel natural and intuitive for users.",
    speakers: "PayNet Representative",
  },
  {
    time: "2:05 – 2:25 PM",
    title: "Richard Ker: The Creator’s Edge",
    desc: "Storytelling that converts audiences into advocates. Why authentic, creator-driven narratives outlast algorithms and strengthen brand advocacy.",
    speakers: "Richard Ker",
  },
  {
    time: "2:25 – 2:45 PM",
    title: "StackAdapt: Programmatic Without Borders",
    desc: "How programmatic unifies CTV, DOOH, audio, and display to drive measurable brand results.",
    speakers: "StackAdapt Team",
  },
  {
    time: "2:45 – 3:05 PM",
    title: "KCS: The Performance Marketing Engine",
    desc: "Introducing PME, a structured system that ties creativity, storytelling, and media into measurable growth.",
    speakers: "KCS Representative",
  },
  { time: "3:05 – 3:25 PM", title: "Coffee Break & Networking", desc: "Refreshments and informal mingling." },
  { time: "3:25 – 3:55 PM", title: "Panel / Fireside Chat", desc: "Conversion in the New Marketing Era." },
  { time: "3:55 – 4:15 PM", title: "Interactive Session", desc: "A fun and engaging recap of key learnings, with small prizes for winners." },
  {
    time: "4:15 – 4:45 PM",
    title: "Closing Remarks - KCS Representative",
    desc: "Key takeaways tying together insights to shape impactful marketing plans for 2026.",
    speakers: "KCS Representative",
  },
  { time: "4:45 – 5:30 PM", title: "Networking Session & Farewell", desc: "Relaxed networking as guests depart." },
];

const AGENDA_ENTRIES = AGENDA.map((a) => ({
  version: a.time,                       // tampil di pill kiri
  date: "16 October 2025",               // tanggal event (opsional)
  title: a.title,
  description: a.desc,
  items: a.speakers ? [a.speakers] : undefined,
}));

/* Page */
export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, ease: EASE },
  };

  return (
    <main className={`${poppins.className} bg-aurora-kcs text-white`}>
      {/* ================= HERO ================= */}
      <section
        className="relative isolate flex flex-col items-center justify-center min-h-[100svh] overflow-hidden"
        aria-labelledby="event-title"
      >
        <motion.div {...fadeUp} className="relative z-10 text-center px-4 text-black">
          <p className="mb-6">
            <time dateTime="2025-10-16">October 16, 2025</time> — Kuala Lumpur
          </p>

          <h1 id="event-title" className="text-black text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            THE CONVERSION PLAYBOOK:
          </h1>
          <p className="text-black text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
            Shaping Your Marketing Plan Event
          </p>
          <p className="text-black mb-6">COLONY, KEL ECO CITY CALL-TO-ACTION</p>

          <a
            href="#register"
            className="inline-block px-6 py-3 bg-blue-600 rounded-full font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition"
          >
            RSVP NOW
          </a>
        </motion.div>
      </section>

      {/* ================= INTRO + DETAILS ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-gray-200">Your 2026 Playbook Starts Here</span>
            </h2>
            <motion.p {...fadeUp} className="text-gray-200/80">
              Gain insights from brands, creators, and platforms shaping the future of marketing. Leave with a playbook
              of strategies — from storytelling to performance for you to power your 2026 campaigns. Event Info Block:
              ● October 16, 2025 ● Colony @ KL Eco City ● Invite-only.
            </motion.p>
          </motion.div>

          <motion.aside
            {...fadeUp}
            className="bg-black/25 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-lg border border-white/10"
            aria-label="Event details"
          >
            <div className="flex items-center gap-3">
              <Calendar className="text-blue-300 w-5 h-5" aria-hidden="true" />
              <span>
                <time dateTime="2025-10-16">October 16, 2025</time>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-300 w-5 h-5" aria-hidden="true" />
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Colony+%40+KL+Eco+City"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-200 font-medium"
              >
                Colony @ KL Eco City · Invite-only
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-300 w-5 h-5" aria-hidden="true" />
              <span>Invitation-only</span>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ================= WHY ATTEND ================= */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <motion.h2 {...fadeUp} className="text-4xl font-extrabold">
              The Conversion Playbook:
            </motion.h2>
            <motion.p {...fadeUp} className="text-white/80">
              Shaping Your 2026 Marketing Plan is an exclusive event designed for marketing leaders, brand builders, and
              decision-makers. You’ll hear from brands, platforms, and creators who are reshaping the way marketing
              connects with people. The sessions are designed to inspire bold ideas, share practical strategies, and
              spark conversations. Why Attend ● Future-ready insights ● Actionable frameworks ● Real brand stories ●
              Meaningful connections.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= SPEAKERS ================= */}
      <section id="speakers" className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Meet the <span className="text-blue-200">SPEAKERS</span>
            </h2>
          </header>

          {/* Grid kartu speaker */}
          {/* <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {SPEAKERS.map((spk, i) => (
              <li key={`${spk.name}-${i}`} className="text-center">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg">
                  <Image
                    src={spk.img}
                    alt={`${spk.name}, ${spk.role}`}
                    width={600}
                    height={720}
                    sizes="(min-width: 1024px) 400px, 50vw"
                    className="object-cover w-full aspect-[3/4] transition-transform duration-500 hover:scale-105"
                    priority={i === 0}
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 p-3 text-left">
                    <div className="rounded-md bg-gradient-to-b from-blue-600/70 to-transparent p-3">
                      <p className="text-xs uppercase tracking-wide text-white/90">{spk.role}</p>
                      <p className="text-sm font-semibold text-white">{spk.name}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 font-semibold">{spk.name}</p>
                <p className="text-sm text-white/70">{spk.role}</p>
              </li>
            ))}
          </ul> */}

          {/* Animasi CircularTestimonials */}
          <div className="mt-16">
            <CircularTestimonials
              testimonials={SPEAKER_TESTIMONIALS}
              autoplay
              colors={{
                name: "#ffffff",
                designation: "rgba(255,255,255,0.85)",
                testimony: "rgba(255,255,255,0.9)",
                arrowBackground: "rgba(0,0,0,0.65)",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#3b82f6",
              }}
              fontSizes={{
                name: "22px",
                designation: "14px",
                quote: "18px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= EVENT AGENDA (Timeline UI) ================= */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="space-y-4 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Event Agenda – The Conversion Playbook:{" "}
              <span className="text-blue-100">Shaping Your 2026 Marketing Plan</span>
            </h2>

            <p className="text-white/85">
              Venue: Colony @ KL Eco City <br />
              Date: <time dateTime="2025-10-16">16 October 2025</time> <br />
              Time: 12:30 PM – 5:30 PM <br />
              Dress Code: Business Casual
            </p>
          </header>

          <div className="space-y-3 text-white/80 text-left max-w-3xl">
            <h3 className="text-xl font-semibold text-white">Event Objective</h3>
            <p>
              This event brings together leading voices—brands, platforms, and creators—to share insights on the future
              of marketing. From rebranding journeys and creator-led strategies to programmatic innovation and
              data-driven storytelling, sessions are designed to spark ideas for building effective, future-ready
              campaigns. The goal is to equip participants with fresh perspectives, practical strategies, and
              inspiration for shaping their 2026 marketing plans.
            </p>
          </div>

          <Changelog1
              title="Event Agenda"
              description="Shaping Your 2026 Marketing Plan"
              entries={AGENDA_ENTRIES}
            />
        </div>
      </section>

    {/* ================= REGISTRATION ================= */}
<section id="register" className="px-6 py-24">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    {/* Left info panel */}
    <aside className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
      <h2 className="text-3xl font-extrabold leading-tight">Registration is now open!</h2>
      <p className="text-white/80">
        Spaces are limited, please register as soon as possible to reserve your spot.
      </p>

      <div className="flex items-start gap-3 rounded-xl bg-black/40 border border-white/10 p-4">
        <AlertCircle className="w-5 h-5 mt-0.5 text-white/80" aria-hidden="true" />
        <p className="text-sm text-white/80">
          Please disable any ad blockers to successfully submit this form.
        </p>
      </div>
    </aside>

    {/* Right panel: pakai komponen sign-in-card-2 */}
    <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-0 overflow-hidden self-stretch">
      <SignInCard />
    </div>
  </div>
</section>


      {/* ================= FOOTER / CTA ================= */}
      <footer id="contact" className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.95]">
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                LET’S WORK
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
                TOGETHER
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-black/80">
              Got an <span className="font-semibold">Idea</span>? Need a <span className="font-semibold">Strategy</span>?
            </p>

            <a
              href="mailto:worktogether@kredencecs.com"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-white font-semibold
                         bg-gradient-to-r from-pink-300 via-purple-500 to-purple-700
                         shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/30 hover:brightness-105 transition"
            >
              Let’s make it happen.
            </a>

            <div className="space-y-3 text-black/80 text-sm md:text-base">
              <p>2025 © All rights reserved. Kredence Creative Solutions Sdn Bhd</p>
              <p>
                Unit 16–01, Menara MBMR, 1, Jalan Syed Putra, 58000
                <br />
                Kuala Lumpur
              </p>
              <p>
                +6018-203 8817
                <br />
                worktogether@kredencecs.com
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:justify-self-end w-full max-w-[520px]">
            <div className="rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-extrabold text-purple-800">Stay Ahead with KCS</h3>
              <p className="mt-3 text-black/80">
                Subscribe to Kredence Creative Solutions for the latest insights, strategies, and trends in digital
                marketing. Let’s shape the future of marketing together!
              </p>

              <form
                className="mt-6 flex items-center gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement).entries());
                  alert(`Subscribed:\n${JSON.stringify(data, null, 2)}`);
                  (e.currentTarget as HTMLFormElement).reset();
                }}
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-black/20 bg-white/70 px-5 py-3 pr-14 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white shadow hover:bg-white/90 transition"
                >
                  <ArrowRight className="h-5 w-5 text-purple-800" />
                </button>
              </form>
            </div>

            {/* Social icons */}
            <ul className="mt-10 flex flex-wrap gap-3 md:justify-end">
              {[
                { href: "#", label: "Facebook", Icon: FaFacebookF },
                { href: "#", label: "Instagram", Icon: FaInstagram },
                { href: "#", label: "LinkedIn", Icon: FaLinkedinIn },
                { href: "#", label: "X", Icon: FaXTwitter },
                { href: "#", label: "TikTok", Icon: FaTiktok },
                { href: "#", label: "Behance", Icon: FaBehance },
                { href: "#", label: "YouTube", Icon: FaYoutube },
              ].map(({ href, label, Icon }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white shadow hover:opacity-90 focus-visible:ring-2 focus-visible:ring-purple-400 transition"
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
