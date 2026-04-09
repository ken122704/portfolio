"use client";

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Bot, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const webProjects = [
    {
      title: "ResuMake",
      description: "An ATS-optimized resume builder integrated with Gemini AI for generating professional bullet points.",
      tech: ["Next.js", "React", "TypeScript", "Supabase"],
      type: "Web App",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Hanap Web App",
      description: "A secure masterlist and role management system to centralize records efficiently.",
      tech: ["React", "JavaScript", "Firebase"],
      type: "Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Genesis",
      description: "Developed key frontend components for a comprehensive todo list and task management system.",
      tech: ["React", "TypeScript", "Django"],
      type: "Web App",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const aiProjects = [
    { title: "AI Voice Receptionist", tool: "n8n", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop" },
    { title: "AI Facebook Chatbot", tool: "n8n", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
    { title: "AI Video Generator", tool: "n8n", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop" },
    { title: "AI Jobs Scraper", tool: "n8n", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop" },
    { title: "Video-to-Social Content", tool: "Zapier", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop" },
    { title: "Asana CRM Automation", tool: "Zapier", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
    { title: "Leads Enrichment", tool: "Zapier", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Financial Reporting", tool: "Make", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" },
    { title: "Gmail Attachment Organizer", tool: "Make", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A selection of web applications and automated workflows I&apos;ve built to solve real-world problems.
          </p>
        </div>

        {/* Web Projects */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-px bg-indigo-500" /> Web & Software
          </h3>
          <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">
            Swipe <ArrowRight size={12} />
          </span>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center shrink-0 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col h-full hover:border-indigo-500/50 transition-colors overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                    <FaGithub size={14} />
                  </button>
                  <button className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
                <span className="absolute bottom-4 left-4 text-xs font-medium px-2.5 py-1 bg-neutral-900/80 backdrop-blur-md text-neutral-300 rounded-md border border-neutral-800">
                  {project.type}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-neutral-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Projects */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-500" /> AI & Automation
          </h3>
          <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">
            Swipe <ArrowRight size={12} />
          </span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="min-w-[75vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0 bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors group flex flex-col"
            >
              <div className="relative h-32 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800">
                  <Bot size={14} className="text-cyan-400" />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-white mb-2">{project.title}</h4>
                <div className="mt-auto">
                  <span className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-md">
                    {project.tool}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}