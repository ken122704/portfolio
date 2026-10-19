"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION: Centered Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-6"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-neutral-400">Available for new opportunities</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Book a </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Meeting</span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Pick a time that works for you and let&apos;s discuss how I can help with your next project.
          </p>
        </motion.div>

        {/* Calendly Inline Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/kencharlesbesa27/30min"
            style={{ minWidth: "320px", width: "100%", height: "700px" }}
          />
        </motion.div>

      </div>
    </section>
  );
}