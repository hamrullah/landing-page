"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Bungkus next/image jadi motion component
const MotionImage = motion(Image);

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax effect untuk roket
  const yRocket = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const xRocket = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const rRocket = useTransform(scrollYProgress, [0, 1], [-15, 20]);

  // State untuk navbar scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable fade-in variant
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        {/* Kiri */}
        <div className="flex items-center gap-2">
          <Menu className="w-6 h-6" aria-label="Menu" />
          <span>Menu</span>
        </div>

        {/* Tengah (Logo) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/kredence.png"
            alt="Kredence Logo"
            width={140}
            height={50}
            priority
            draggable={false}
          />
        </div>

        {/* Kanan (Button) */}
        <a
          href="#contact"
          className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
      </nav>

      {/* Section 1 - Hero Logo */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 to-purple-400">
        <MotionImage
          src="/kcs-logo.png"
          alt="KCS Logo"
          width={400}
          height={400}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-3/4 md:w-1/2"
          draggable={false}
        />
      </section>

      {/* Section 2 - Welcome + Rocket */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black px-6 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Kiri - Teks */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to</h2>
            <span className="text-3xl md:text-5xl text-yellow-400 italic block mb-4">
              Kredence Creative Solutions
            </span>
            <p className="text-lg text-gray-300 leading-relaxed">
              We began as a digital-first agency at the peak of the pandemic and
              have since evolved to help brands humanise marketing in a world
              driven by AI, connecting with audiences on a deeper level and
              turning marketing into a powerful, ROI-generating asset.
            </p>
          </motion.div>

          {/* Kanan - Roket */}
          <MotionImage
            src="/rocket1.png"
            alt="Rocket"
            width={320}
            height={320}
            draggable={false}
            style={{ y: yRocket, x: xRocket, rotate: rRocket }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto w-52 md:w-72 
                       transition-all duration-300 hover:scale-110
                       hover:drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 flex flex-col items-center text-gray-400 text-sm"
        >
          <span className="mb-2">scroll to continue</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
