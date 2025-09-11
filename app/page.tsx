"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Mail,AlertCircle  } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Poppins } from "next/font/google";

/* Fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* Static Data */
const EASE = [0.22, 1, 0.36, 1] as const;

const SPEAKERS = [
  { name: "Christian Gerron", role: "CRO, StackAdapt", img: "/attend1.jpg" },
  { name: "Liam McCarten", role: "APAC VP, StackAdapt", img: "/attend2.jpg" },
  { name: "Anna Goodridge", role: "Senior Conversion Expert", img: "/attend3.jpg" },
  { name: "Jessica Tan", role: "Marketing Leader", img: "/attend4.jpg" },
  { name: "David Wong", role: "CEO", img: "/attend1.jpg" },
  { name: "Miranda Simopoulos", role: "Regional CMO", img: "/attend3.jpg" },
];

const AGENDA = [
  { time: "12:30 – 1:15 PM", title: "Registration & Networking Lunch", desc: "Guest arrivals with light bites and canapés, informal networking." },
  { time: "1:15 – 1:20 PM", title: "Welcome by Emcee", desc: "Overview of the day’s objective: converting awareness into measurable impact." },
  { time: "1:20 – 1:25 PM", title: "CEO Opening Keynote – Keem", desc: "Why this conversation matters for brands moving into 2026.", speakers: "Keem, CEO" },
  { time: "1:25 – 1:45 PM", title: "Julie’s: Rebranding that Converts Perceptions into Loyalty", desc: "How Julie’s repositioned its brand to build trust and long-term consumer connection.", speakers: "Julie’s Marketing Team" },
  { time: "1:45 – 2:05 PM", title: "PayNet: Shaping Everyday Behaviour", desc: "Turning innovative solutions into daily habits that feel natural and intuitive.", speakers: "PayNet Representative" },
  { time: "2:05 – 2:25 PM", title: "Richard Ker: The Creator’s Edge", desc: "Why authentic, creator-driven narratives strengthen brand advocacy.", speakers: "Richard Ker" },
  { time: "2:25 – 2:45 PM", title: "StackAdapt: Programmatic Without Borders", desc: "Unifying CTV, DOOH, audio, and display to drive measurable brand results.", speakers: "StackAdapt Team" },
  { time: "2:45 – 3:05 PM", title: "KCS: The Performance Marketing Engine", desc: "PME ties creativity, storytelling, and media into measurable growth.", speakers: "KCS Representative" },
  { time: "3:05 – 3:25 PM", title: "Coffee Break & Networking", desc: "Refreshments and informal mingling." },
  { time: "3:25 – 3:55 PM", title: "Panel / Fireside Chat", desc: "Conversion in the New Marketing Era." },
  { time: "3:55 – 4:15 PM", title: "Interactive Session", desc: "Engaging recap with small prizes." },
  { time: "4:15 – 4:45 PM", title: "Closing Remarks", desc: "Key takeaways to shape impactful 2026 plans.", speakers: "KCS Representative" },
  { time: "4:45 – 5:30 PM", title: "Networking & Farewell", desc: "Relaxed networking as guests depart." },
];

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
    <main
      className={`${poppins.className} text-white`}
      style={{
    background: `
      radial-gradient(600px 420px at 85% 12%, rgba(255,210,200,0.70), transparent 60%),
      radial-gradient(720px 520px at 14% 82%, rgba(255,210,200,0.58), transparent 60%),
      linear-gradient(180deg, #5A2BD8 0%, #6B37E2 45%, #4D22B8 100%)
    `,
    backgroundRepeat: "no-repeat",
  }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative isolate flex flex-col items-center justify-center min-h-[100svh] overflow-hidden"
        aria-labelledby="event-title"
      >
        <motion.div {...fadeUp} className="relative z-10 text-center px-4">
          <h1 id="event-title" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            THE CONVERSION PLAYBOOK:
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
            Shaping Your Marketing Plan Event
          </p>
          <p className="text-gray-200/90 mb-6">
            <time dateTime="2025-10-16">October 16, 2025</time> — Kuala Lumpur
          </p>
          <a
            href="#register"
            className="inline-block px-6 py-3 bg-blue-600 rounded-full font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition"
          >
            Register Now
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
            <p className="text-gray-200/80">
              Gain insights from brands, creators, and platforms shaping the future of marketing.
              Leave with a playbook of strategies—from storytelling to performance—to power your 2026 campaigns.
            </p>
          </motion.div>

          <motion.aside
            {...fadeUp}
            className="bg-black/25 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-lg border border-white/10"
            aria-label="Event details"
          >
            <div className="flex items-center gap-3">
              <Calendar className="text-blue-300 w-5 h-5" aria-hidden="true" />
              <span><time dateTime="2025-10-16">October 16, 2025</time></span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-300 w-5 h-5" aria-hidden="true" />
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Colony+%40+KL+Eco+City"
                target="_blank" rel="noopener noreferrer"
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

      {/* ================= WHY ATTEND + IMAGES ================= */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <motion.h2 {...fadeUp} className="text-4xl font-extrabold">
              The Conversion Playbook:
            </motion.h2>
            <motion.p {...fadeUp} className="text-white/80">
              Shaping Your 2026 Marketing Plan is an exclusive event for marketing leaders,
              brand builders, and decision-makers. You’ll hear from brands, platforms, and creators
              reshaping how marketing connects with people.{" "}
              <span className="font-semibold text-white">
                Why Attend · Future-ready insights · Actionable frameworks · Real brand stories ·
                Meaningful connections
              </span>
            </motion.p>
          </div>

          {/* Image grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid grid-rows-2 gap-6">
              <figure className="relative rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src="/attend1.jpg"
                  alt="Conference keynote session with attendees"
                  width={1200} height={700}
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover w-full h-60 md:h-full transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <figcaption className="absolute bottom-4 left-4 text-lg font-semibold">
                  Inspiring Keynotes
                </figcaption>
              </figure>

              <div className="grid grid-cols-2 gap-6">
                <figure className="relative rounded-xl overflow-hidden group shadow-lg">
                  <Image
                    src="/attend2.jpg"
                    alt="Attendees taking notes during a session"
                    width={500} height={400}
                    sizes="(min-width: 1024px) 400px, 50vw"
                    className="object-cover w-full h-40 md:h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-3 left-3 text-sm md:text-base font-semibold">
                    Insightful Takeaways
                  </figcaption>
                </figure>

                <figure className="relative rounded-xl overflow-hidden group shadow-lg">
                  <Image
                    src="/attend3.jpg"
                    alt="Panel speakers on stage"
                    width={600} height={400}
                    sizes="(min-width: 1024px) 400px, 50vw"
                    className="object-cover w-full h-40 md:h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-3 left-3 text-sm md:text-base font-semibold">
                    Thought-Provoking Panels
                  </figcaption>
                </figure>
              </div>
            </div>

            <figure className="relative rounded-xl overflow-hidden group shadow-lg md:row-span-2">
              <Image
                src="/attend4.jpg"
                alt="Professionals connecting during networking"
                width={900} height={1200}
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 text-lg font-semibold">
                Networking Opportunities
              </figcaption>
            </figure>
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

    <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
              onError={(e) => {
                // fallback aman kalau gambar belum ada
                (e.currentTarget as HTMLImageElement).src = "/placeholder.png";
              }}
            />

            {/* overlay label di bagian atas (sesuai vibe referensi) */}
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
    </ul>
  </div>
</section>


      {/* ================= EVENT AGENDA (Timeline UI) ================= */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Event Agenda – The Conversion Playbook:{" "}
              <span className="text-blue-200">Shaping Your 2026 Marketing Plan</span>
            </h2>
            <p className="text-white/85">
              Venue: Colony @ KL Eco City <br />
              Date: <time dateTime="2025-10-16">16 October 2025</time> <br />
              Time: 12:30 PM – 5:30 PM <br />
              Dress Code: Business Casual
            </p>
          </header>

          {/* Objective */}
          <div className="space-y-3 text-white/80 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white">Event Objective</h3>
            <p>
              This event brings together leading voices—brands, platforms, and creators—to share
              insights on the future of marketing. From rebranding journeys and creator-led strategies
              to programmatic innovation and data-driven storytelling, sessions are designed to spark ideas
              for building effective, future-ready campaigns.
            </p>
            <p>The goal: equip participants with practical strategies for shaping their 2026 plans.</p>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-8">
            {AGENDA.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                className="relative pl-10 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-blue-300
                           after:absolute after:left-[3px] after:top-6 after:w-px after:h-[calc(100%-1.5rem)] after:bg-white/15 last:after:hidden"
              >
                <div className="inline-block bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded font-mono text-xs md:text-sm text-white/80 mb-3 border border-white/10">
                  {item.time}
                </div>
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 mt-1">{item.desc}</p>
                {item.speakers && (
                  <p className="text-sm text-white/70 mt-1 italic">{item.speakers}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= SECTION 6: REGISTRATION (2-col, like screenshot) ================= */}
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

    {/* Right form */}
    <form
      className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form).entries());
        alert(`Thanks! We received your registration:\n${JSON.stringify(data, null, 2)}`);
        form.reset();
      }}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* First / Last */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            First Name
          </label>
          <input
            id="firstName" name="firstName" required
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            Last Name
          </label>
          <input
            id="lastName" name="lastName" required
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Doe"
          />
        </div>

        {/* Email / Phone */}
        <div>
          <label htmlFor="businessEmail" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            Business Email
          </label>
          <input
            id="businessEmail" name="businessEmail" type="email" inputMode="email" required autoComplete="email"
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            Phone Number
          </label>
          <input
            id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel"
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="+60 12 345 6789"
          />
        </div>

        {/* Job Title / Company Name */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            Job Title
          </label>
          <input
            id="jobTitle" name="jobTitle" required
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Marketing Lead"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium mb-1 after:content-['*'] after:text-blue-300 after:ml-1">
            Company Name
          </label>
          <input
            id="companyName" name="companyName" required autoComplete="organization"
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Acme Sdn Bhd"
          />
        </div>

        {/* Country (full) */}
        <div className="md:col-span-2">
          <label htmlFor="companyCountry" className="block text-sm font-medium mb-1">
            Company Country
          </label>
          <select
            id="companyCountry" name="companyCountry" defaultValue=""
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="" disabled>Select a country</option>
            <option>Malaysia</option>
            <option>Singapore</option>
            <option>Indonesia</option>
            <option>Thailand</option>
            <option>Philippines</option>
            <option>Vietnam</option>
            <option>Other</option>
          </select>
        </div>

        {/* Company Type / Size */}
        <div>
          <label htmlFor="companyType" className="block text-sm font-medium mb-1">
            Company Type
          </label>
          <select
            id="companyType" name="companyType" defaultValue=""
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="" disabled>Select type</option>
            <option>Brand / Advertiser</option>
            <option>Agency</option>
            <option>Tech / Platform</option>
            <option>Publisher</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium mb-1">
            Company Size
          </label>
          <select
            id="companySize" name="companySize" defaultValue=""
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="" disabled>Select size</option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>201–500</option>
            <option>501–1000</option>
            <option>1000+</option>
          </select>
        </div>

        {/* Dietary restrictions (textarea) */}
        <div className="md:col-span-2">
          <label htmlFor="dietary" className="block text-sm font-medium mb-1">
            Do you have any dietary restrictions?
          </label>
          <textarea
            id="dietary" name="dietary" rows={3}
            className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="e.g., vegetarian, no nuts"
          />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mt-6 space-y-3">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="agreeTerms" required className="mt-1.5 h-4 w-4 accent-blue-500" />
          <span className="text-sm">
            Yes, I have read and accepted the <span className="underline decoration-white/50">Event Terms and Conditions</span>.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input type="checkbox" name="agreeComms" className="mt-1.5 h-4 w-4 accent-blue-500" />
          <span className="text-sm">
            Yes, I would like to receive communications. I understand that I can opt out at any time.
          </span>
        </label>

        <p className="text-xs text-white/70">
          Submitting this form does not guarantee acceptance. An official confirmation will be sent once approved.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow transition focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Request Your Seat
        </button>
      </div>
    </form>
  </div>
</section>

    </main>
  );
}
