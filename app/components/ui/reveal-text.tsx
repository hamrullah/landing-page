"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RevealTextProps {
  text?: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  springDuration?: number;
  letterImages?: string[];
}

export function RevealText({
  text = "STUNNING",
  textColor = "text-white",
  overlayColor = "text-red-500",
  fontSize = "text-[250px]",
  letterDelay = 0.08,
  overlayDelay = 0.05,
  overlayDuration = 0.4,
  springDuration = 600,
  letterImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ],
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const lastDelay = (text.length - 1) * letterDelay * 1000;
    const timer = setTimeout(() => setShowOverlay(true), lastDelay + springDuration);
    return () => clearTimeout(timer);
  }, [text.length, letterDelay, springDuration]);

  return (
    <div className="relative flex items-center justify-center">
      {/* penting: flex-wrap + whitespace-pre-wrap supaya spasi & \n dihormati */}
      <div className="relative flex flex-wrap whitespace-pre-wrap leading-tight">
        {Array.from(text).map((ch, index) => {
          // ===== line break support =====
          if (ch === "\n") {
            return <span key={`br-${index}`} className="basis-full h-0" />;
          }
          // ===== space handling: pakai nbsp + width em ====
          if (ch === " ") {
            return (
              <span
                key={`space-${index}`}
                className={`${fontSize} inline-block w-[0.35em] md:w-[0.4em]`}
                aria-hidden
              >
                &nbsp;
              </span>
            );
          }

          return (
            <motion.span
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${fontSize} relative cursor-pointer overflow-hidden font-black tracking-tight`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * letterDelay,
                type: "spring",
                damping: 8,
                stiffness: 200,
                mass: 0.8,
              }}
            >
              {/* base glyph */}
              <motion.span
                className={`absolute inset-0 ${textColor}`}
                animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              >
                {ch}
              </motion.span>

              {/* image fill on hover */}
              <motion.span
                className="bg-clip-text bg-cover bg-no-repeat text-transparent"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  backgroundPosition: hoveredIndex === index ? "10% center" : "0% center",
                }}
                transition={{
                  opacity: { duration: 0.1 },
                  backgroundPosition: { duration: 3, ease: "easeInOut" },
                }}
                style={{
                  backgroundImage: `url("${letterImages[index % letterImages.length]}")`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {ch}
              </motion.span>

              {/* sweeping overlay */}
              {showOverlay && (
                <motion.span
                  className={`pointer-events-none absolute inset-0 ${overlayColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: index * overlayDelay,
                    duration: overlayDuration,
                    times: [0, 0.1, 0.7, 1],
                    ease: "easeInOut",
                  }}
                >
                  {ch}
                </motion.span>
              )}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
