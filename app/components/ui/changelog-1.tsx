"use client";

import * as React from "react";
import clsx from "clsx";

/* ---- Types ---- */
export type ChangelogEntry = {
  /** Dipakai untuk jam (badge kecil di kartu) */
  version?: string;
  /** Ditampilkan di kolom kiri */
  date?: string;
  /** Judul kartu */
  title: string;
  /** Deskripsi singkat */
  description?: string;
  /** Opsional: list item kecil di bawah */
  items?: string[];
  /** Opsional: tombol */
  button?: { url: string; text: string };
};

export type Changelog1Props = {
  title?: string;
  description?: string;
  /** Data agenda/changelog */
  entries: ChangelogEntry[];
  /** Palet warna kartu */
  colorMode?: "light" | "dark";
  className?: string;
};

/* ---- Component ---- */
export function Changelog1({
  title,
  description,
  entries,
  colorMode = "light",
  className,
}: Changelog1Props) {
  const isLight = colorMode === "light";

  return (
    <section className={clsx("w-full", className)}>
      {(title || description) && (
        <header className={clsx(isLight ? "text-neutral-900" : "text-white", "mb-8")}>
          {title && (
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className={clsx("mt-2 max-w-2xl",
              isLight ? "text-neutral-600" : "text-white/80"
            )}>
              {description}
            </p>
          )}
        </header>
      )}

      <ol className="relative space-y-10">
        {entries.map((e, i) => (
          <li
            key={`${e.title}-${i}`}
            className="relative grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-10"
          >
            {/* timeline dot */}
            <span
              aria-hidden
              className={clsx(
                "absolute -left-2 top-2 h-3 w-3 rounded-full",
                isLight ? "bg-blue-500 ring-4 ring-white" : "bg-blue-300/90 ring-4 ring-white/10"
              )}
            />
            {/* Optional vertical line (subtle) */}
            <span
              aria-hidden
              className={clsx(
                "hidden md:block absolute left-0 top-8 -bottom-8 w-px",
                isLight ? "bg-neutral-200" : "bg-white/15"
              )}
            />

            {/* Left: Date */}
            <div className="pl-6 md:pl-0">
              {e.date && (
                <div className={clsx(
                  "text-sm font-semibold",
                  isLight ? "text-neutral-500" : "text-white/70"
                )}>
                  {e.date}
                </div>
              )}
            </div>

            {/* Right: Card */}
            <div
              className={clsx(
                "rounded-2xl p-6 md:p-8 shadow-sm",
                isLight
                  ? "bg-white text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                  : "bg-white/10 text-white backdrop-blur border border-white/10"
              )}
            >
              {/* time badge */}
              {e.version && (
                <span
                  className={clsx(
                    "inline-flex items-center rounded-md px-3 py-1 text-xs font-medium tracking-wide",
                    isLight
                      ? "bg-neutral-100 text-neutral-700"
                      : "bg-white/10 text-white/85"
                  )}
                >
                  {e.version}
                </span>
              )}

              <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">
                {e.title}
              </h3>

              {e.description && (
                <p
                  className={clsx(
                    "mt-3 text-lg leading-relaxed",
                    isLight ? "text-neutral-600" : "text-white/85"
                  )}
                >
                  {e.description}
                </p>
              )}

              {e.items && e.items.length > 0 && (
                <ul className={clsx("mt-3 space-y-1.5",
                  isLight ? "text-neutral-500" : "text-white/70"
                )}>
                  {e.items.map((it, idx) => (
                    <li key={idx} className="text-sm italic">• {it}</li>
                  ))}
                </ul>
              )}

              {e.button && (
                <a
                  href={e.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-5 inline-block rounded-full px-5 py-2 text-sm font-semibold transition",
                    isLight
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "bg-white/90 text-neutral-900 hover:bg-white"
                  )}
                >
                  {e.button.text}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
