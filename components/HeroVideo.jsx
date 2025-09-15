"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function HeroVideo() {
  const videos = ["/poultry1.mp4", "/guesthouse.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null); // <-- Use plain useRef in JSX

  useEffect(() => {
    const switchInterval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }
    }, 15000); // Switch every 15s

    return () => clearInterval(switchInterval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideo];
      videoRef.current.play().catch((e) => console.log(e));
    }
  }, [currentVideo]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
          Nourishing & Hosting Cameroon
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 opacity-90">
          From fresh meat and poultry to cozy guest houses in Douala and Yaoundé
          — discover the best of both worlds.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <MotionLink
            href="/agriculture"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg text-lg font-semibold transition-colors"
          >
            Explore Our Farms
          </MotionLink>

          <MotionLink
            href="/guesthouses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#dda15e] hover:bg-[#c98e4c] text-white rounded-2xl shadow-lg text-lg font-semibold transition-colors"
          >
            Book a Guest House
          </MotionLink>
        </div>
      </motion.div>
    </div>
  );
}
