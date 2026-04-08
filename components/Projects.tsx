"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Workflow } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Hanap Web App",
    category: "Web",
    description: "Built a secure masterlist and role management system to centralize organizational records.",
    tech: ["React", "JavaScript", "Firebase"],
    icon: <Code2 className="text-brand" />,
  },
  {
    title: "ResuMake",
    category: "Web",
    description: "ATS-optimized resume builder integrated with Gemini AI for generating professional bullet points.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
    icon: <Code2 className="text-brand" />,
  },
  {
    title: "AI Voice Receptionist",
    category: "Automation",
    description: "Conversational AI system capable of handling inbound and outbound calls autonomously.",
    tech: ["n8n", "Voice AI APIs"],
    icon: <Workflow className="text-cyan-400" />,
  },
  {
    title: "Automated Leads Enrichment",
    category: "Automation",
    description: "Real-time lead processing, enrichment, prioritization, and automated AI sales outreach.",
    tech: ["Zapier", "OpenAI"],
    icon: <Workflow className="text-cyan-400" />,
  },
  {
    title: "AI Video Distributor",
    category: "Automation",
    description: "Automated content generation pipeline that creates and cross-posts videos to multiple platforms.",
    tech: ["n8n", "Social APIs"],
    icon: <Workflow className="text-cyan-400" />,
  },
  {
    title: "Genesis",
    category: "Web",
    description: "Developed key frontend components for a scalable, full-stack to-do list and management system.",
    tech: ["React", "TypeScript", "Django"],
    icon: <Code2 className="text-brand" />,
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Web", "Automation"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex gap-3 overflow-x-auto pb-2 md:pb-0"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? "bg-brand text-white border border-brand" 
                    : "bg-white/5 text-foreground/70 border border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid with AnimatePresence for smooth filtering */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-3xl bg-background border border-white/10 hover:border-brand/50 transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-foreground/40 hover:text-white transition-colors">
                      <FaGithub size={20} /> {/* Updated tag here */}
                    </a>
                    <a href="#" className="text-foreground/40 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-brand text-neutral-400">
                      {t} {i !== project.tech.length - 1 && "•"}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}