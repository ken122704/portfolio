"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BoxSelect, Code2 } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Data Annotator",
    organization: "Remotask",
    date: "2020 – 2025",
    description: "Precisely annotated complex 3D LiDAR datasets, segmenting and classifying objects such as vehicles, pedestrians, and traffic signals to provide high-quality training data for autonomous driving systems. Worked across multiple engagements (Jun–Dec 2020, May–Sep 2024, Nov-Dec 2025).",
    icon: <BoxSelect size={20} className="text-cyan-400" />,
  },

  {
    type: "work",
    title: "Web Developer (Part-Time)",
    organization: "USTP Registrar",
    date: "Mar – Dec 2025",
    description: "Engineered the frontend for an automated digital system, optimizing the process for student document requests.",
    icon: <Code2 size={20} className="text-cyan-400" />,
  },

  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of Science and Technology of Southern Philippines - USTP",
    date: "2023 – Present",
    description: "I'm currently pursuing my B.S. in Computer Science at the University of Science and Technology of Southern Philippines.",
    icon: <GraduationCap size={20} className="text-cyan-400" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Experience & </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[1.35rem] top-1 bg-background border border-white/20 p-2 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              <h4 className="text-lg text-foreground/80 font-medium mb-4">{exp.organization}</h4>
              <p className=" text-neutral-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}