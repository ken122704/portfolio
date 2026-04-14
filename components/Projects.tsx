"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ExternalLink, Bot, ArrowRight, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Strict typing to avoid TypeScript errors
interface Project {
  title: string;
  description: string;
  image: string;
  tech?: string[];
  type?: string;
  tool?: string;
  githubLink?: string;
  liveLink?: string;
  category?: string; // Used by the modal to style differently based on Web vs AI
}

export default function Projects() {
  const webScrollRef = useRef<HTMLDivElement>(null);
  const aiScrollRef = useRef<HTMLDivElement>(null);
  
  const [webActiveIndex, setWebActiveIndex] = useState(0);
  const [aiActiveIndex, setAiActiveIndex] = useState(0);

  // State for the full preview modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = window.innerWidth > 768 ? 424 : window.innerWidth * 0.85;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleWebScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const progress = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
    setWebActiveIndex(Math.round(progress * (webProjects.length - 1)));
  };

  const handleAiScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const progress = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
    setAiActiveIndex(Math.round(progress * (aiProjects.length - 1)));
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (!ref.current) return;
    const child = ref.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Replace the placeholder URLs with your actual GitHub and Web App links!
  const webProjects: Project[] = [
    { title: "ResuMake", description: "An ATS-optimized resume builder integrated with Gemini AI for generating professional bullet points.", tech: ["Next.js", "React", "TypeScript", "Supabase"], type: "Web App", image: "ResuMake.png", githubLink: "https://github.com/yourusername/resumake", liveLink: "https://resumake.com" },
    { title: "Hanap", description: "A secure masterlist and role management system to centralize records efficiently.", tech: ["React", "JavaScript", "Firebase"], type: "Web App", image: "Hanap.png", githubLink: "https://github.com/yourusername/hanap", liveLink: "https://hanap.com" },
    { title: "Genesis", description: "Developed key frontend components for a comprehensive todo list and task management system.", tech: ["React", "TypeScript", "Django"], type: "Web App", image: "Genesis.png", githubLink: "https://github.com/yourusername/genesis", liveLink: "https://genesis-app.com" },
    { title: "IRequest", description: "Developed key frontend components for a web app for online document request created for the USTP-CDO registrar.", tech: ["React", "JavaScript", "Django"], type: "Web App", image: "IRequest.png", githubLink: "https://github.com/yourusername/irequest", liveLink: "https://irequest-ustp.edu.ph" },
    { title: "LocatR", description: "Developed key frontend components for a desktop application that manages student data and location tracking, featuring add, edit, delete, and search functionalities.", tech: ["Python", "CustomTkinter", "SQLite"], type: "Desktop App", image: "LocatR.png", githubLink: "https://github.com/yourusername/locatr", liveLink: "" },
  ];

  // Added link placeholders here too, in case you have repos/videos to link for your automations
  const aiProjects: Project[] = [
    { title: "AI Voice Receptionist", description: "Conversational AI system handling inbound/outbound calls.", tool: "n8n", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop", githubLink: "https://github.com/yourusername/ai-voice", liveLink: "" },
    { title: "AI Facebook Chatbot", description: "Automated customer service and lead generation bot.", tool: "n8n", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop", githubLink: "", liveLink: "" },
    { title: "AI Video Generator", description: "Pipeline creating and cross-posting videos automatically.", tool: "n8n", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop", githubLink: "", liveLink: "" },
    { title: "AI Jobs Scraper", description: "Scrapes job boards and uses AI to filter opportunities.", tool: "n8n", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop", githubLink: "", liveLink: "" },
    { title: "Video-to-Social Content", description: "Repurposes long-form video into social media shorts.", tool: "Zapier", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop", githubLink: "", liveLink: "" },
    { title: "Asana CRM Automation", description: "Syncs leads and automates task creation for sales teams.", tool: "Zapier", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", githubLink: "", liveLink: "" }
  ];

  return (
    <>
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Featured <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                A selection of web applications and automated workflows I&apos;ve built to solve real-world problems.
              </p>
            </motion.div>
          </div>

          {/* ================= WEB PROJECTS ================= */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-600" /> Web & Software
            </h3>
            <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">
              Swipe <ArrowRight size={12} />
            </span>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll(webScrollRef, "left")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
                <ChevronLeft size={20} className="text-neutral-500 group-hover:text-neutral-400" />
              </button>
              <button onClick={() => scroll(webScrollRef, "right")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
                <ChevronRight size={20} className="text-neutral-500 group-hover:text-neutral-400" />
              </button>
            </div>
          </div>
          
          <div 
            ref={webScrollRef}
            onScroll={handleWebScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[85vw] sm:w-[350px] md:w-[400px] h-[420px] shrink-0 snap-center bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col hover:border-neutral-500/50 transition-colors overflow-hidden group relative"
              >
                {/* Clickable Image Area for Modal Preview */}
                <div 
                  className="relative h-48 overflow-hidden shrink-0 cursor-pointer"
                  onClick={() => setSelectedProject({ ...project, category: "Web" })}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                  
                  {/* Hover Overlay indicating it can be expanded */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-700 text-white font-medium text-sm">
                      <Maximize size={16} /> Preview
                    </div>
                  </div>

                  {/* Updated Links to use <a> tags */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                        <FaGithub size={14} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs font-medium px-2.5 py-1 bg-neutral-900/80 backdrop-blur-md text-neutral-300 rounded-md border border-neutral-800">
                    {project.type}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h4>
                  <p className="text-sm text-neutral-400 mb-4 line-clamp-2 min-h-[2.5rem]">{project.description}</p>
                  <div className="mt-auto flex overflow-x-auto gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {project.tech?.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4 mb-16">
            {webProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(webScrollRef, idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  webActiveIndex === idx ? "w-8 bg-neutral-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          {/* ================= AI PROJECTS ================= */}
          <div className="flex items-center justify-between mb-4 mt-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-500" /> AI & Automation
            </h3>
            <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">
              Swipe <ArrowRight size={12} />
            </span>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scroll(aiScrollRef, "left")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
                <ChevronLeft size={20} className="text-neutral-500 group-hover:text-neutral-400" />
              </button>
              <button onClick={() => scroll(aiScrollRef, "right")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
                <ChevronRight size={20} className="text-neutral-500 group-hover:text-neutral-400" />
              </button>
            </div>
          </div>

          <div 
            ref={aiScrollRef}
            onScroll={handleAiScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-[85vw] sm:w-[350px] md:w-[400px] h-[420px] shrink-0 snap-center bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors group flex flex-col relative"
              >
                {/* Clickable Image Area for Modal Preview */}
                <div 
                  className="relative h-48 overflow-hidden shrink-0 cursor-pointer"
                  onClick={() => setSelectedProject({ ...project, category: "AI" })}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-700 text-white font-medium text-sm">
                      <Maximize size={16} /> Preview
                    </div>
                  </div>

                  {/* Updated Links to use <a> tags */}
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                        <FaGithub size={14} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 w-10 h-10 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800">
                    <Bot size={18} className="text-cyan-400" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h4>
                  <p className="text-sm text-neutral-400 mb-4 line-clamp-2 min-h-[2.5rem]">{project.description}</p>
                  <div className="mt-auto">
                    <span className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      Powered by {project.tool}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4 mb-16">
            {aiProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(aiScrollRef, idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  aiActiveIndex === idx ? "w-8 bg-neutral-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FULL PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
              className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col relative shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Large Image */}
              <div className="relative w-full h-[35vh] sm:h-[45vh] shrink-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover md:object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80" />
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-10 flex flex-col gap-6 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {selectedProject.type && (
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                          {selectedProject.type}
                        </span>
                      )}
                      {selectedProject.tool && (
                        <span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-md">
                          Powered by {selectedProject.tool}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white">{selectedProject.title}</h3>
                  </div>

                  {/* External Links shown prominently in the Modal */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubLink && (
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium text-white transition-colors">
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                    {selectedProject.liveLink && (
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded-lg text-sm font-medium transition-colors">
                        <ExternalLink size={16} /> Live App
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="w-full h-px bg-neutral-800" />
                
                <div>
                  <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Project Overview</h4>
                  <p className="text-neutral-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProject.tech && selectedProject.tech.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string, i: number) => (
                        <span key={i} className="text-sm font-medium px-3 py-1.5 rounded-lg text-neutral-300 bg-cyan-500/10 border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}