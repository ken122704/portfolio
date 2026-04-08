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
              My journey in tech started at the foundational layer of AI. For four years, I worked as a Data Annotator, 
              precisely segmenting complex 3D LiDAR datasets to train autonomous driving systems. This hands-on experience 
              with raw data gave me a deep appreciation for how artificial intelligence actually learns and functions.
            </p>
            <p>
              Today, I am a 3rd-year Computer Science student applying that knowledge to build robust, production-ready applications. 
              I don&apos;t just write code; I design systems. Whether it&apos;s a full-stack React platform or an intricate n8n/Zapier 
              workflow that automates an entire business process, I focus on solving real-world problems efficiently.
            </p>
            <p>
              When I&apos;m not studying or coding, I&apos;m exploring new ways to integrate AI into everyday workflows to make technology 
              work harder for us, not the other way around.
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
                  <p className="text-xs text-neutral-400 ">2023 – 2027</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="text-brand shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-neutral-400 ">Experience</p>
                  <p className="text-sm text-neutral-400 ">4 Years (Data Annotation)</p>
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