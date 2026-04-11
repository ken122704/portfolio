"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-brand rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Story Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6 text-neutral-400  leading-relaxed text-lg"
          >
            <p>
              I&apos;m a Computer Science Undergarduate, Full-Stack Web Developer, and AI Automation Specialist with a strong foundation in AI systems.
            </p>
            <p>
              I started in the data layer of AI, working for 3 years as a Data Annotator on 3D LiDAR datasets for autonomous driving—building a practical understanding of how AI models learn from real-world data.
            </p>
            <p>
             Now, I focus on building scalable, production-ready solutions. From full-stack applications to automation workflows using tools like n8n and Zapier, I design systems that solve real-world problems efficiently.
            </p>
          </motion.div>

          {/* Quick Facts Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold text-neutral-400  border-b border-white/10 pb-4">
              Quick Facts
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-400 ">Location</p>
                  <p className="text-sm text-neutral-400 ">Cagayan de Oro City, PH</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <GraduationCap className="text-brand shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-400 ">Education</p>
                  <p className="text-sm text-neutral-400 ">USTP (B.S. Computer Science)</p>
                  <p className="text-xs text-neutral-400 ">2023 – Present</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="text-brand shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-400 ">Experience</p>
                  <p className="text-sm text-neutral-400 ">3 Years (Data Annotation)</p>
                  <p className="text-sm text-neutral-400 ">Mar - Dec 2025 (Web Developer - USTP Registrar)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="text-brand shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-400 ">Focus</p>
                  <p className="text-sm text-neutral-400 ">Full-Stack & Automations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}