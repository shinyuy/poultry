"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroVideo from "../components/HeroVideo";

const MotionLink = motion(Link);

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section */}
      <HeroVideo />

      {/* Highlights */}
      <div className="grid md:grid-cols-2 gap-10 px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl group"
        >
          <img
            src="/poultry1.jpg"
            alt="Poultry Farm"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#2a9d8f]/60 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              Agribusiness
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl group"
        >
          <img
            src="/guesthouse1.jpg"
            alt="Guest House"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[#f4a261]/70 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              Guest Houses
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
