"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-white">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Left - Menu */}
        <div className="flex items-center gap-2">
          <Menu className="w-6 h-6 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Menu</span>
        </div>

        {/* Center - Logo */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-purple-900">Kredence</h1>
          <p className="text-xs text-gray-500 tracking-wide">CREATIVE SOLUTIONS</p>
        </div>

        {/* Right - Button */}
        <a
          href="#contact"
          className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Logo Animation */}
        <motion.img
          src="/logo.png" // ganti sesuai logo kamu
          alt="KCS Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-2/3 md:w-1/3"
        />

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-3xl md:text-5xl font-bold text-purple-900"
        >
          Kredence Creative Solutions
        </motion.h2>

        {/* Button Animation */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
}
