"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-black">
      
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Generate, Edit & Automate <br />
          <span className="text-neutral-300">Ad Creatives at Scale</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          A unified AI-powered platform where businesses instantly generate, edit,
          approve, and automate ad creatives across multiple social platforms.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition"
          >
            Start Free Trial →
          </Link>

          <button className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
            Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Video Row */}
      <div className="w-full max-w-7xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <video autoPlay loop muted playsInline className="rounded-xl w-full h-72 object-cover ring-1 ring-white/20">
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        <video autoPlay loop muted playsInline className="rounded-xl w-full h-72 object-cover ring-1 ring-white/20">
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>

        <video autoPlay loop muted playsInline className="rounded-xl w-full h-72 object-cover ring-1 ring-white/20">
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
