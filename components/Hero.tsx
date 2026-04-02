"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // State to track mouse position for the dynamic glow
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // e.clientX and e.clientY track the cursor relative to the screen (so it works while scrolling)
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden"
    >
      {/* Dynamic Interactive Background Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Text & Buttons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-neutral-400 ">Available for new opportunities</span>
          </motion.div>
          
         <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-2"
          >
            Hi, I&apos;m Ken Besa.
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Full-Stack Web Developer &<br className="hidden md:block" /> AI Automation Specialist.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed"
          >
            I build intelligent workflows, scalable web applications, and AI-powered 
            solutions that save time and drive growth. Based in Cagayan de Oro City.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent text-white border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >
          <Image 
            src="/profile.jpg" 
            alt="Ken Besa" 
            fill 
            className="object-cover"
            priority 
          />
        </motion.div>

      </div>
    </section>
  );
}