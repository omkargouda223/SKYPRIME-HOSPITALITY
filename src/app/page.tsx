"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Instagram, Twitter, Linkedin } from "lucide-react";

// --- PREMIUM VISUAL ASSETS (UPDATED WITH YOUR UPLOADED IMAGES) ---
const homeImages = [
  "/pexels-luis-contf-2970945-9997755.jpg",           // Luxury Terminal View
  "/pexels-mateo-valdes-274446-33424869.jpg",     // China Eastern Plane
  "/pexels-kursat-kuzu-42706530-12560712.jpg",       // Turkish Airlines Tarmac
  "/pexels-yasar-baskurt-706180077-26274856.jpg"     // Airport Runway View
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    setMounted(true);

    // UPDATED: Background slider changes every 10 seconds (10,000ms)
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % homeImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-neutral-950" />;

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500 selection:text-black flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden">

        {/* 10-SECOND SLIDING BACKGROUND */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth 2-second fade
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${homeImages[currentImg]})` }}
          />
        </AnimatePresence>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
        <div className="absolute inset-0 z-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-1.5 mb-8 mt-20 border border-yellow-500/30 rounded-full bg-yellow-500/5 backdrop-blur-md"
          >
            <span className="text-yellow-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              Skyprime Hospitality
            </span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-8xl lg:text-1xl mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Comfort. Speed. <br /> Peace of Mind.
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto mb-12 text-base md:text-xl leading-relaxed font-light italic">
            "Redefining global travel through personalized luxury and seamless airport transitions."
          </p>

          {/* Action Button */}
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-yellow-500 mb-5 text-black font-black rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_40px_rgba(250,204,21,0.3)] flex items-center gap-3 group text-lg"
            >
              Explore Our Excellence
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}