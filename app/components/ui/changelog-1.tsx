"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type ChangelogEntry = {
  version: string;           // di agenda = time
  date?: string;             // tanggal acara (opsional)
  title: string;             // judul sesi
  description?: string;      // deskripsi sesi
  items?: string[];          // bullet (mis. speakers)
  image?: string;            // opsional
  button?: { url: string; text: string }; // opsional
};

export function Changelog1({
  title,
  description,
  entries,
}: {
  title: string;
  description?: string;
  entries: ChangelogEntry[];
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
          {description ? (
            <p className="text-white/85 max-w-3xl">{description}</p>
          ) : null}
        </header>

        <ol className="relative border-s border-white/20 pl-6 space-y-10">
          {entries.map((e, i) => (
            <li key={i} className="relative">
              {/* dot */}
              <span className="absolute -left-[9px] top-1 inline-block h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-white/15 bg-white/5 p-5 shadow-lg"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <span className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-2.5 py-1 font-mono">
                    {e.version}
                  </span>
                  {e.date ? (
                    <time className="text-white/70">{e.date}</time>
                  ) : null}
                </div>

                <h3 className="mt-3 text-xl font-bold">{e.title}</h3>

                {e.description ? (
                  <p className="mt-2 text-white/80 leading-relaxed">
                    {e.description}
                  </p>
                ) : null}

                {e.items && e.items.length > 0 ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-white/85">
                    {e.items.map((it, idx) => (
                      <li key={idx}>{it}</li>
                    ))}
                  </ul>
                ) : null}

                {/* Media / CTA */}
                {(e.image || e.button) && (
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    {e.image ? (
                      <div className="overflow-hidden rounded-lg border border-white/15">
                        {/* gunakan Image jika dari domain remote sudah diizinkan di next.config */}
                        <Image
                          src={e.image}
                          alt=""
                          width={560}
                          height={315}
                          className="h-40 w-[280px] object-cover sm:h-44 sm:w-[420px]"
                        />
                      </div>
                    ) : null}

                    {e.button ? (
                      <a
                        href={e.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold shadow hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-300 transition"
                      >
                        {e.button.text}
                      </a>
                    ) : null}
                  </div>
                )}
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
