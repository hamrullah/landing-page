"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function FooterKCS() {
  return (
    <footer className="relative bg-aurora-kcs text-white">
      {/* overlays halus biar dramatis seperti figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 110% -10%, rgba(239,187,196,.35), rgba(239,187,196,0) 60%)," +
            "linear-gradient(180deg, rgba(255,255,255,.03), rgba(0,0,0,.06))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 30% -10%, rgba(255,255,255,.28) 0 1px, transparent 1px 42px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-10">
        {/* top strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-white/75">
              GOT ANY IDEA? NEED A STRATEGY?
            </p>
            <h2 className="mt-2 text-[28px] font-extrabold leading-tight md:text-[34px]">
              <span className="text-white/90">LET’S WORK </span>
              <span className="bg-gradient-to-r from-[#FF63D1] to-[#C94BFF] bg-clip-text text-transparent">
                TOGETHER
              </span>
            </h2>
          </div>

          <a
            href="mailto:worktogether@kredencecs.com"
            className="inline-flex items-center justify-center rounded-full bg-black/80 px-5 py-3 text-sm font-semibold shadow-md ring-1 ring-white/15 transition hover:bg-black"
          >
            Let’s Make It Happen
          </a>
        </div>

        {/* subscribe block */}
        <section className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-[26px] font-extrabold leading-tight md:text-[30px]">
              <span className="bg-gradient-to-r from-[#8EF3FF] to-[#7CC6FF] bg-clip-text text-transparent">
                Stay Ahead
              </span>{" "}
              <span className="text-white/90">With KCS</span>
            </h3>
            <p className="mt-3 max-w-prose text-white/85">
              Subscribe to Kredence Creative Solutions for the latest insights,
              strategies, and trends in digital marketing. Let’s shape the
              future together!
            </p>

            <form
              className="mt-6 flex max-w-xl items-center gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(
                  new FormData(e.currentTarget as HTMLFormElement).entries()
                );
                alert(`Subscribed:\n${JSON.stringify(data, null, 2)}`);
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                name="email"
                placeholder="Enter Your Email Here"
                className="h-12 w-full flex-1 rounded-full border border-white/15 bg-white/85 px-5 text-black placeholder-black/55 outline-none ring-2 ring-transparent transition focus:bg-white focus:ring-purple-300"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-purple-800 shadow-md ring-1 ring-black/10 transition hover:brightness-95"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            {/* socials */}
            <ul className="mt-6 flex items-center gap-3">
              {[
                { href: "#", label: "Facebook", Icon: FaFacebookF },
                { href: "#", label: "Instagram", Icon: FaInstagram },
                { href: "#", label: "X", Icon: FaXTwitter },
                { href: "#", label: "LinkedIn", Icon: FaLinkedinIn },
              ].map(({ href, label, Icon }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/75 text-white shadow ring-1 ring-white/15 transition hover:bg-black"
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* bottom bar */}
        <div className="grid grid-cols-1 items-start gap-6 py-8 text-sm text-white/80 md:grid-cols-2">
          <address className="not-italic leading-6">
            <div>2025 © All rights reserved. Kredence Creative Solutions Sdn Bhd</div>
            <div>Unit 16–01, Menara MBMR, 1, Jalan Syed Putra, 58000</div>
            <div>Kuala Lumpur</div>
            <div>+6018-203-8817</div>
            <div>
              <a
                className="underline decoration-white/30 underline-offset-4 hover:text-white"
                href="mailto:worktogether@kredencecs.com"
              >
                worktogether@kredencecs.com
              </a>
            </div>
          </address>

          <div className="md:justify-self-end">
            <ul className="flex items-center gap-6 text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
