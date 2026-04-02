"use client";

import { motion, Variants } from "framer-motion"; // Added Variants here
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  // Explicitly typing as Variants solves the type mismatch
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-10 pb-20 px-6"
    >
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          variants={itemVariants}
          className="text-brand font-medium tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Ken Besa.
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-foreground/60 mb-8"
        >
          AI Automation Developer & Full-Stack Builder.
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in building exceptional digital experiences and automating complex workflows. 
          Currently focused on integrating AI into robust full-stack applications and creating 
          seamless business automations.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand/90 transition-colors w-full sm:w-auto justify-center"
          >
            View My Work
            <ArrowRight size={18} />
          </Link>
          <Link 
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 text-foreground border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}