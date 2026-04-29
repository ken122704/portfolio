"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // NEW: State for the full preview modal
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCert]);

  const certifications = [
    {
      title: "TOPCIT Level 3",
      issuer: "TOPCIT (Korea)",
      date: "2025",
      description: "Validated practical competency in IT business, software development, and modern computing fundamentals.",
      image: "/topcit.jpg"
    },
    {
      title: "AI Automation with n8n",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Mastered building complex, multi-step workflow automations, webhooks, and custom integrations using n8n.",
      image: "/n8n-cert.png"
    },
    {
      title: "AI Automation with Zapier",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Demonstrated proficiency in connecting web applications and automating repetitive business tasks with Zapier.",
      image: "/zapier-cert.png"
    },
    {
      title: "AI Automation with Make",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Certified in designing advanced visual automation pipelines and managing complex data routing in Make.",
      image: "/make-cert.png"
    },
    {
      title: "Prompt Engineering",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Certified in designing effective prompts for AI models and optimizing their performance.",
      image: "/prompt-engineering-cert.png"
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollProgress = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
    setActiveIndex(Math.round(scrollProgress * (certifications.length - 1)));
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 424 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="certifications" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Licenses & <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Continuous learning and professional validations of my technical expertise.</p>
            </motion.div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">Swipe <ArrowRight size={12} /></span>
            <div className="hidden md:flex ml-auto gap-2">
              <button onClick={() => scroll("left")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group"><ChevronLeft size={20} className="text-neutral-500 group-hover:text-neutral-400" /></button>
              <button onClick={() => scroll("right")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group"><ChevronRight size={20} className="text-neutral-500 group-hover:text-neutral-400" /></button>
            </div>
          </div>

          <div ref={scrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden scroll-smooth">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-[85vw] sm:w-[350px] md:w-[400px] h-[420px] shrink-0 snap-center bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-500/50 transition-colors group flex flex-col relative"
              >
                {/* NEW: Clickable Image Area */}
                <div 
                  className="relative h-48 overflow-hidden shrink-0 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                  
                  {/* Hover Overlay indicating it can be expanded */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-700 text-white font-medium text-sm">
                      <Maximize size={16} /> Preview
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800">
                    <Award size={20} className="text-cyan-400" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{cert.title}</h3>
                  <p className="text-xs font-medium text-cyan-400 mb-3">{cert.issuer}</p>
                  <p className="text-sm text-neutral-400 mb-4 line-clamp-2 min-h-[2.5rem]">{cert.description}</p>
                  <div className="mt-auto">
                    <span className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">Issued {cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4 mb-16">
            {certifications.map((_, idx) => <button key={idx} onClick={() => scrollTo(idx)} aria-label={`Go to slide ${idx + 1}`} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-8 bg-neutral-500" : "w-2 bg-neutral-700 hover:bg-neutral-500"}`} />)}
          </div>
        </div>
      </section>

      {/* ================= FULL PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
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
                onClick={() => setSelectedCert(null)} 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Large Image */}
              <div className="relative w-full h-[40vh] sm:h-[50vh] shrink-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80" />
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-10 flex flex-col gap-4 overflow-y-auto">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <div className="flex items-center gap-3">
                    <p className="text-base font-medium text-cyan-400">{selectedCert.issuer}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <p className="text-sm text-neutral-400">Issued: {selectedCert.date}</p>
                  </div>
                </div>
                
                <div className="w-full h-px bg-neutral-800 my-2" />
                
                <div>
                  <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-neutral-300 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}