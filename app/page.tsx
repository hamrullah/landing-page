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
import EventAgendaSection from "./components/EventAgendaSection";
import AgendaHighlight from "./components/AgendaHighlight";
import AgendaSplit, { AgendaItem } from "./components/AgendaSplit";
import SpeakersIntro from "./components/SpeakersIntro";
import FooterKCS from "./components/FooterKCS";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* Ease */
const EASE = [0.22, 1, 0.36, 1] as const;

/* Data */
const SPEAKERS = [
  {
    name: "Christian Gerron",
    role: "CRO, StackAdapt",
    img: "/hero1.png",
    quote: "…",
  },
  {
    name: "Liam McCarten",
    role: "APAC VP, StackAdapt",
    img: "/hero2.png",
    quote: "…",
  },
  {
    name: "Anna Goodridge",
    role: "Senior Conversion Expert",
    img: "/hero3.png",
    quote: "…",
  },
  {
    name: "Jessica Tan",
    role: "Marketing Leader",
    img: "/hero4.png",
    quote: "…",
  },
  { name: "David Wong", role: "CEO", img: "/attend1-1.jpg", quote: "…" },
  {
    name: "Miranda Simopoulos",
    role: "Regional CMO",
    img: "/attend3-1.jpg",
    quote: "…",
  },
];

const SPEAKER_TESTIMONIALS = SPEAKERS.map((s) => ({
  name: s.name,
  designation: s.role,
  src: s.img,
  quote: s.quote,
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
    desc: "Why this conversation matters for 2026.",
    speakers: "Keem, CEO",
  },
  {
    time: "1:25 – 1:45 PM",
    title: "Julie’s: Rebranding that Converts Perceptions into Loyalty",
    desc: "Case study on Julie’s repositioning.",
    speakers: "Julie’s Marketing Team",
  },
  {
    time: "1:45 – 2:05 PM",
    title: "PayNet: Shaping Everyday Behaviour",
    desc: "Build trust/adoption by integrating into daily life.",
    speakers: "PayNet Representative",
  },
  {
    time: "2:05 – 2:25 PM",
    title: "Richard Ker: The Creator’s Edge",
    desc: "Creator-driven narratives outlast algorithms.",
    speakers: "Richard Ker",
  },
  {
    time: "2:25 – 2:45 PM",
    title: "StackAdapt: Programmatic Without Borders",
    desc: "Unifying CTV, DOOH, audio, display.",
    speakers: "StackAdapt Team",
  },
  {
    time: "2:45 – 3:05 PM",
    title: "KCS: The Performance Marketing Engine",
    desc: "Introducing PME for measurable growth.",
    speakers: "KCS Representative",
  },
  {
    time: "3:05 – 3:25 PM",
    title: "Coffee Break & Networking",
    desc: "Refreshments and informal mingling.",
  },
  {
    time: "3:25 – 3:55 PM",
    title: "Panel / Fireside Chat",
    desc: "Conversion in the New Marketing Era.",
  },
  {
    time: "3:55 – 4:15 PM",
    title: "Interactive Session",
    desc: "Fun recap with small prizes.",
  },
  {
    time: "4:15 – 4:45 PM",
    title: "Closing Remarks",
    desc: "Key takeaways for 2026.",
    speakers: "KCS Representative",
  },
  {
    time: "4:45 – 5:30 PM",
    title: "Networking Session & Farewell",
    desc: "Relaxed networking as guests depart.",
  },
];
const images = [
  "/attend1-1.jpg",
  "/attend2-1.jpg",
  "/attend3-1.jpg",
  "/attend4-1.jpg",
];

const agendaSplitData: AgendaItem[] = AGENDA.map((a, idx) => ({
  ...a,
  img: images[idx % images.length], // rotasi gambar
}));

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
      <Hero
        bgSrc="/image-bg.jpg"
        targetISO="2025-10-16T12:30:00+08:00"
        speakers={SPEAKERS}
      />
      <IntroDetailsSection /> {/* <- Desktop Section 2 */}
      <EventAgendaSection />
      <AgendaHighlight
        imageSrc="/tulis.jpg" // ganti sesuai fotomu di /public
        entries={AGENDA} // <-- list agenda untuk scroll
      />
      <SpeakersIntro
        speakers={[
          {
            name: "Brooklyn Simpson",
            role: "Design Researcher",
            img: "/hero1.png",
          },
          { name: "Jenny Wilson", role: "UX Designer", img: "/hero2.png" },
          {
            name: "Devon Lane",
            role: "Design Strategist",
            img: "/hero3.png",
          },
        ]}
        logos={[
          { src: "/logo1.png", alt: "Microsoft" },
          { src: "/logo2.png", alt: "IKEA" },
          { src: "/logo3.png", alt: "Alexa" },
          { src: "/logo4.png", alt: "Google" },
          { src: "/logo5.png", alt: "Logitech" },
        ]}
      />
      {/* ============ REGISTRATION ============ */}
      <section id="register" className="bg-aurora-kcs text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <aside className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              Registration is now open!
            </h2>
            <p className="text-white/80">
              Spaces are limited — please register as soon as possible to
              reserve your spot.
            </p>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 border border-white/10 p-4">
              <AlertCircle
                className="w-5 h-5 mt-0.5 text-white/80"
                aria-hidden="true"
              />
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
      <FooterKCS />
    </main>
  );
}
