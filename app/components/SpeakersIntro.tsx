"use client";

import * as React from "react";
import Image from "next/image";

type Speaker = { name: string; role: string; img: string };
type Logo = { src?: string; alt: string; width?: number; height?: number };

export default function SpeakersIntro({
  speakers,
  logos,
}: {
  speakers: Speaker[]; // kirim minimal 3 orang
  logos: Logo[]; // baris logo brand
}) {
  const cards = speakers.slice(0, 3);

  return (
    <section className="bg-aurora-kcs px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* ROW: intro + cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: copy seperti Figma */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
              SPEAKER
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight md:text-[34px]">
              We{" "}
              <span className="bg-gradient-to-r from-[#8EF3FF] to-[#7CC6FF] bg-clip-text text-transparent">
                Invite
              </span>{" "}
              <span className="bg-gradient-to-r from-[#FFA7E8] to-[#C94BFF] bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Speakers
            </h2>

            <p className="mt-4 max-w-prose text-white/80">
              At our event, we’re thrilled to host a lineup of amazing speakers
              who are leaders and innovators in their fields. These
              distinguished individuals bring a wealth of knowledge, experience,
              and inspiration to our audience.
            </p>

            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/60" />
                <span className="font-semibold text-fuchsia-200">
                  Keynote Speaker
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/40" />
                <span className="text-white/80">Invited Speaker</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: 3 speaker cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3">
            {cards.map((sp, i) => (
              <article
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-fuchsia-600/70 to-fuchsia-800/70 p-3 shadow-[0_14px_50px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "repeating-radial-gradient(circle at 30% -10%, rgba(255,255,255,.25) 0 1px, transparent 1px 42px)",
                  }}
                />
                <div className="relative rounded-xl bg-white/5 p-3">
                  <p className="text-[11px] font-semibold leading-tight text-white/95">
                    {sp.name}
                  </p>
                  <p className="text-[10px] text-white/75">{sp.role}</p>
                </div>
                <div className="relative mt-3 aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={sp.img}
                    alt={sp.name}
                    fill
                    sizes="(max-width:768px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Spacer kecil agar strip logo agak turun */}
        <div className="mt-10" />

        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-white/70">
          Company Logo
        </p>

        {/* STRIP LOGO MARQUEE */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,.35)]">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-8 px-6">
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 150}
                    height={logo.height ?? 58}
                    className="h-7 w-30 opacity-90  hover:opacity-100 md:h-8"
                  />
                ) : (
                  <span className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white/90">
                    {logo.alt}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
