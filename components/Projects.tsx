"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Bot, ArrowRight, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Strict typing to avoid TypeScript errors
interface Project {
  title: string;
  description: string;
  image: string;
  tech?: string[];
  type?: string;
  tool?: string[];
  githubLink?: string;
  liveLink?: string;
  category?: string; 
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

const webProjects: Project[] = [
  {
    title: "IRequest",
    description:
      "Virtual Assistants often struggle to respond confidently during live client calls. HusAI solves this with AI-powered real-time reply suggestions and post-call communication coaching. Developed as a scalable cross-platform SaaS through USTP's startup incubation program.",
    tech: ["React", "TypeScript", "Node.js", "Supabase"],
    type: "Web App",
    image: "HusAI.png",
    githubLink: "https://github.com/Birky-andrie/HusAI",
    liveLink: "hus-ai-five.vercel.app"
  },

  {
    title: "IRequest",
    description:
      "Manual document requests cause slow processing and administrative bottlenecks. To solve this, a centralized React and Django web portal was built for the university registrar, streamlining operations, cutting backlog, and providing rapid access to records.",
    tech: ["React", "JavaScript", "Django"],
    type: "Web App",
    image: "IRequest.png",
    githubLink: "https://github.com/pendonj14/iRequest",
    liveLink: "https://irequest-nu.vercel.app"
  },
  {
    title: "ResuMake",
    description:
      "Job seekers spend hours formatting resumes to pass automated ATS filters. A Next.js web app integrating Gemini AI was developed to generate ATS-optimized bullet points, reducing formatting time from hours to minutes and boosting interview chances.",
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    type: "Web App",
    image: "ResuMake.png",
    githubLink: "https://github.com/ken122704/ResuMake",
    liveLink: "https://resu-make-kappa.vercel.app"
  },
  {
    title: "Hanap",
    description:
      "Organizations struggle with insecure record-keeping and inefficient role access. A secure masterlist and role management system was created using React and Firebase, centralizing user data and ensuring strict, efficient access control.",
    tech: ["React", "JavaScript", "Firebase"],
    type: "Web App",
    image: "Hanap.png",
    githubLink: "https://github.com/ken122704/Hanap",
    liveLink: "https://hanap-9a95a.web.app/"
  },
  {
    title: "PollView",
    description:
      "Gathering synchronized audience feedback often suffers from high-latency delays. A real-time polling app built with Next.js and Supabase enables concurrent voting, delivering zero-latency engagement and instant data visualization.",
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    type: "Web App",
    image: "PollView.png",
    githubLink: "https://github.com/ken122704/PollView",
    liveLink: "https://poll-view-client.vercel.app/"
  },
  {
    title: "Genesis",
    description:
      "Scattered workflows and disorganized tasks reduce personal and team productivity. A comprehensive task management frontend built with React and TypeScript was developed to provide a unified interface that streamlines daily task tracking.",
    tech: ["React", "TypeScript", "Django"],
    type: "Web App",
    image: "Genesis.png",
    githubLink: "https://github.com/towtu/genesis-frontend",
    liveLink: "https://genesis-woad.vercel.app"
  },
  {
    title: "LocatR",
    description:
      "Tracking student locations via traditional spreadsheets is slow and cumbersome. A Python desktop app with offline SQLite database management enables instant, offline retrieval of student location data.",
    tech: ["Python", "CustomTkinter", "SQLite", "Pandas"],
    type: "Desktop App",
    image: "LocatR.png",
    githubLink:
      "https://github.com/wency01x/StudentRecordLocatorSystem",
    liveLink: ""
  }
];

const aiProjects: Project[] = [
  {
    title: "Automated Lead Capture & AI Classification",
    description:
      "Sales teams waste hours on manual data entry, duplicate records, and delayed lead visibility. An end-to-end n8n automation was built to capture, deduplicate, and AI-classify leads in real time — automatically logging to Google Sheets, sending instant email replies, and notifying the team on Slack with priority scoring powered by Google Gemini.",
    tool: ["n8n", "Jotform", "Google Sheets", "Google Gemini", "Gmail", "Slack"],
    image: "Automated Lead Capture AI Classification.png"
  },
  {
    title: "Automated Leads Enrichment",
    description:
      "Sales teams lose high-value prospects due to slow, manual lead processing. An end-to-end Zapier automation was built to capture, enrich, and prioritize leads, accelerating routing so sales can instantly engage high-value opportunities.",
    tool: ["Zapier", "Apollo", "Slack", "Google Sheets", "Gmail"],
    image: "Automated Leads Enrichment.png"
  },
  {
    title: "AI Voice Receptionist",
    description:
      "Businesses miss critical calls during off-hours due to expensive 24/7 staffing requirements. A conversational AI voice agent built in n8n handles inbound and outbound calls, capturing 100% of phone leads round-the-clock while reducing operational costs.",
    tool: ["n8n", "Google Calendar", "Airtable", "VAPI"],
    image: "AI Voice Receptionist.png"
  },
  {
    title: "Automated Financial Reporting",
    description:
      "Manually transferring accounting data to task managers is slow and error-prone. A secure Make pipeline syncing Xero financial ledgers directly into Asana eliminates manual entry errors and speeds up financial reporting.",
    tool: ["Make", "Xero", "Asana", "Google Sheets"],
    image: "Automated Financial Reporting Xero-to-Asana Ledger Integration.png"
  },
  {
    title: "Asana CRM Automation",
    description:
      "Fragmented pipelines cause dropped leads when data is manually copied. A Zapier workflow was created to sync incoming leads and generate Asana tasks, ensuring zero leads slip through the cracks due to administrative oversight.",
    tool: ["Zapier", "Asana", "Google Drive", "Gmail"],
    image: "AI-Powered Asana CRM Automation.png"
  },
  {
    title: "AI Facebook Chatbot",
    description:
      "Scaling social media support manually leads to delayed customer responses. An n8n chatbot was built to handle tier-1 support and capture Facebook leads, providing instant responses while freeing human agents for complex issues.",
    tool: ["n8n", "Facebook Graph API", "Openrouter"],
    image: "AI Facebook Chatbot.png"
  },
  {
    title: "AI-Powered Gmail Attachment Organizer",
    description:
      "Professionals waste hours manually downloading and filing email attachments. A Make automation powered by AI routes and organizes incoming files, reclaiming weekly administrative time and creating a searchable digital filing system.",
    tool: ["Make", "Gmail", "Google Drive", "Gemini AI", "Google Sheets"],
    image: "AI-Powered Gmail Attachment Organizer.png"
  },
  {
    title: "AI Jobs Scraper",
    description:
      "Job seekers spend hours manually filtering irrelevant job postings. An n8n scraper extracts and AI-scores listings, automating the job hunt by delivering curated and relevant opportunities.",
    tool: ["n8n"],
    image: "AI Jobs Scraper.png"
  },
  {
    title: "Video-to-Social Content",
    description:
      "Repurposing long-form videos for social media requires tedious manual editing. A Zapier workflow automatically slices and formats videos into shorts, scaling content creation with minimal manual intervention.",
    tool: ["Zapier", "AI by Zapier", "Facebook Graph API", "LinkedIn API"],
    image: "AI-Powered Video-to-Social Content Automation.png"
  },
  {
    title: "AI ASMR Video Generator",
    description:
      "Producing daily niche video content requires massive repetitive effort. An autonomous n8n pipeline generates, renders, and cross-posts videos, operating a fully automated media channel that replaces manual production.",
    tool: ["n8n","Openrouter", "AI Video Generation API", "JWT Authentication", "YouTube API", "Facebook Graph API", ],
    image: "AI ASMR Generator.png"
  }
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
                Featured <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Works</span> <span className="text-3xl md:text-5xl font-display font-bold text-white mb-4">&</span> <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Case Studies</span>
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
                viewport={{ once: false, margin: "-100px" }}
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
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="mt-auto flex overflow-x-auto gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {project.tool?.map((tool, i) => (
                      <span key={i} className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
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
                      {selectedProject.tool && selectedProject.tool.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tool.map((tool: string, i: number) => (
                              <span key={i} className="text-sm font-medium px-3 py-1.5 rounded-lg text-neutral-300 bg-cyan-500/10 border border-cyan-500/20">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
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