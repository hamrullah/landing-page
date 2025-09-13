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
import Hero from "./components/hero";
import IntroDetailsSection from "./components/IntroDetailsSection";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* Ease */
const EASE = [0.22, 1, 0.36, 1] as const;

/* Data */
const SPEAKERS = [
  { name: "Christian Gerron", role: "CRO, StackAdapt", img: "/attend1-1.jpg", quote: "…" },
  { name: "Liam McCarten", role: "APAC VP, StackAdapt", img: "/attend2-1.jpg", quote: "…" },
  { name: "Anna Goodridge", role: "Senior Conversion Expert", img: "/attend3-1.jpg", quote: "…" },
  { name: "Jessica Tan", role: "Marketing Leader", img: "/attend4-1.jpg", quote: "…" },
  { name: "David Wong", role: "CEO", img: "/attend1-1.jpg", quote: "…" },
  { name: "Miranda Simopoulos", role: "Regional CMO", img: "/attend3-1.jpg", quote: "…" },
];

const SPEAKER_TESTIMONIALS = SPEAKERS.map((s) => ({
  name: s.name,
  designation: s.role,
  src: s.img,
  quote: s.quote,
}));

const AGENDA = [
  { time: "12:30 – 1:15 PM", title: "Registration & Networking Lunch", desc: "Guest arrivals with light bites and canapés, informal networking." },
  { time: "1:15 – 1:20 PM", title: "Welcome by Emcee", desc: "Emcee introduction, overview of the day’s objective: Exploring strategies that convert awareness into measurable impact." },
  { time: "1:20 – 1:25 PM", title: "CEO Opening Keynote – Keem", desc: "Why this conversation matters for 2026.", speakers: "Keem, CEO" },
  { time: "1:25 – 1:45 PM", title: "Julie’s: Rebranding that Converts Perceptions into Loyalty", desc: "Case study on Julie’s repositioning.", speakers: "Julie’s Marketing Team" },
  { time: "1:45 – 2:05 PM", title: "PayNet: Shaping Everyday Behaviour", desc: "Build trust/adoption by integrating into daily life.", speakers: "PayNet Representative" },
  { time: "2:05 – 2:25 PM", title: "Richard Ker: The Creator’s Edge", desc: "Creator-driven narratives outlast algorithms.", speakers: "Richard Ker" },
  { time: "2:25 – 2:45 PM", title: "StackAdapt: Programmatic Without Borders", desc: "Unifying CTV, DOOH, audio, display.", speakers: "StackAdapt Team" },
  { time: "2:45 – 3:05 PM", title: "KCS: The Performance Marketing Engine", desc: "Introducing PME for measurable growth.", speakers: "KCS Representative" },
  { time: "3:05 – 3:25 PM", title: "Coffee Break & Networking", desc: "Refreshments and informal mingling." },
  { time: "3:25 – 3:55 PM", title: "Panel / Fireside Chat", desc: "Conversion in the New Marketing Era." },
  { time: "3:55 – 4:15 PM", title: "Interactive Session", desc: "Fun recap with small prizes." },
  { time: "4:15 – 4:45 PM", title: "Closing Remarks", desc: "Key takeaways for 2026.", speakers: "KCS Representative" },
  { time: "4:45 – 5:30 PM", title: "Networking Session & Farewell", desc: "Relaxed networking as guests depart." },
];

const AGENDA_ENTRIES = AGENDA.map((a) => ({
  version: a.time,
  date: "16 October 2025",
  title: a.title,
  description: a.desc,
  items: a.speakers ? [a.speakers] : undefined,
}));

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, ease: EASE },
  };

  return (
    <main className={`${poppins.className} bg-aurora-kcs`}>
      {/* ============ HERO (sudah overlap speaker strip) ============ */}
      <Hero bgSrc="/image-bg.jpg" targetISO="2025-10-16T12:30:00+08:00" speakers={SPEAKERS} />
      <IntroDetailsSection />   {/* <- Desktop Section 2 */}
      {/* ============ SECTION 2: sesuai gambar ============ */}
    

      {/* (hapus section lama yang card biru & “WHY ATTEND” agar tidak dobel) */}

      {/* ============ SPEAKERS (carousel / circular) ============ */}
      <section id="speakers" className="bg-aurora-kcs text-white px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Meet the <span className="text-blue-200">SPEAKERS</span>
            </h2>
          </header>

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
              fontSizes={{ name: "22px", designation: "14px", quote: "18px" }}
            />
          </div>
        </div>
      </section>

      {/* ============ EVENT AGENDA ============ */}
      <section className="bg-aurora-kcs text-white px-6 py-20">
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
              This event brings together leading voices—brands, platforms, and creators—to share insights on
              the future of marketing. From rebranding journeys and creator-led strategies to programmatic
              innovation and data-driven storytelling, sessions are crafted to equip you with fresh
              perspectives and practical moves for your 2026 plans.
            </p>
          </div>

          <Changelog1
            title="Event Agenda"
            description="Network session on 16 October 2025."
            entries={AGENDA_ENTRIES}
            colorMode="light"
          />
        </div>
      </section>

      {/* ============ REGISTRATION ============ */}
      <section id="register" className="bg-aurora-kcs text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <aside className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight">Registration is now open!</h2>
            <p className="text-white/80">
              Spaces are limited — please register as soon as possible to reserve your spot.
            </p>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 border border-white/10 p-4">
              <AlertCircle className="w-5 h-5 mt-0.5 text-white/80" aria-hidden="true" />
              <p className="text-sm text-white/80">
                Please disable any ad blockers to successfully submit this form.
              </p>
            </div>
          </aside>

          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden self-stretch">
            <SignInCard />
          </div>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <footer id="contact" className="bg-aurora-kcs text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
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

            <address className="not-italic space-y-3 text-black/80 text-sm md:text-base">
              <p>2025 © All rights reserved. Kredence Creative Solutions Sdn Bhd</p>
              <p>
                Unit 16–01, Menara MBMR, 1, Jalan Syed Putra, 58000
                <br />
                Kuala Lumpur
              </p>
              <p>
                +6018-203 8817
                <br />
                <a href="mailto:worktogether@kredencecs.com" className="underline-offset-2 hover:underline">
                  worktogether@kredencecs.com
                </a>
              </p>
            </address>
          </div>

          <div className="md:justify-self-end w-full max-w-[520px]">
            <div className="rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-extrabold text-purple-800">Stay Ahead with KCS</h3>
              <p className="mt-3 text-black/80">
                Subscribe for the latest insights, strategies, and trends in digital marketing. Let’s shape the future together!
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
                  <label className="sr-only" htmlFor="email-subscribe">Email address</label>
                  <input
                    id="email-subscribe"
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

            <ul className="mt-10 flex flex-wrap gap-3 md:justify-end">
              {[{ href: "#", label: "Facebook", Icon: FaFacebookF },
                { href: "#", label: "Instagram", Icon: FaInstagram },
                { href: "#", label: "LinkedIn", Icon: FaLinkedinIn },
                { href: "#", label: "X", Icon: FaXTwitter },
                { href: "#", label: "TikTok", Icon: FaTiktok },
                { href: "#", label: "Behance", Icon: FaBehance },
                { href: "#", label: "YouTube", Icon: FaYoutube }].map(({ href, label, Icon }, i) => (
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
