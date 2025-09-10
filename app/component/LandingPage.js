"use client"; // Required because Framer Motion runs on the client

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">MyCompany</div>
          <div className="flex gap-6 text-gray-700 font-medium">
            <a href="#hero" className="hover:text-blue-600">Home</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to Our Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            A modern solution for your digital needs. Fast, secure, and reliable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#features"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-md hover:bg-gray-100"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-2xl shadow-md hover:bg-yellow-300"
            >
              Contact Us
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex justify-center"
          >
            <Image
              src="/hero-illustration.png"
              alt="Hero Illustration"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: "/fast.png",
                title: "Fast",
                desc: "Latest technology ensures optimal performance for your website.",
              },
              {
                src: "/secure.png",
                title: "Secure",
                desc: "Your data is our top priority with full encryption.",
              },
              {
                src: "/easy.png",
                title: "Easy to Use",
                desc: "An intuitive interface that makes it easy for everyone to start.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="mb-8">
          Join hundreds of customers who already benefit from our services.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-2xl shadow-md hover:bg-yellow-300"
        >
          Contact Us Now
        </a>
      </motion.section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-10 bg-gray-900 text-gray-300 text-center"
      >
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </footer>
    </div>
  );
}
