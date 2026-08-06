"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Maximize, X, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
}

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Track the actual DOM index for scaling the centered element
  const [closestDomIndex, setClosestDomIndex] = useState(0);
  // Track the original array index (0-9) for the pagination dots
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Mouse Dragging State
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    initialX: 0,
    startScrollLeft: 0,
    distance: 0,
  });

  const certifications: Certification[] = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2026",
      description: "Successfully completed the Introduction to Networks course and achieved this student level credential.",
      image: "/CCNA-Cert.jpg",
      credentialUrl: "https://www.credly.com/badges/f46ca63e-62f5-421e-86c1-8a3265445cf1/public_url"
    },
    {
      title: "Essentials: Your First Workflows",
      issuer: "n8n",
      date: "2026",
      description: "Successfully completed, received a passing grade and was awarded this certificate of completion.",
      image: "/n8n-N8N101-Certificate.jpg",
      credentialUrl: "https://learn.n8n.io/certificates/f4b69f547204444e9bbfce4a45d58d3e"
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "2026",
      description: "Demonstrated proficiency in using Claude AI for coding tasks, including code generation, debugging, and optimization.",
      image: "/Anthropic.jpg",
      credentialUrl: "https://verify.skilljar.com/c/p4fic2tj6atw"
    },
    {
      title: "System-wide OJT Orientation 2026",
      issuer: "USTP",
      date: "2026",
      description: "Completed comprehensive training on workplace safety, communication, and organizational culture for all USTP OJT participants.",
      image: "/OJT.jpg",
      credentialUrl: ""
    },
    {
      title: "TOPCIT Level 3",
      issuer: "TOPCIT (Korea)",
      date: "2025",
      description: "Validated practical competency in IT business, software development, and modern computing fundamentals.",
      image: "/topcit.jpg",
      credentialUrl: ""
    },
    {
      title: "GoHighLevel CRM Certification",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Certified in utilizing GoHighLevel for CRM management, marketing automation, and client relationship strategies.",
      image: "/ghl-cert.png",
      credentialUrl: "https://my-certificates.com/certificates/69d7490bdfcac932b88bfb7e"
    },
    {
      title: "AI Automation with n8n",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Mastered building complex, multi-step workflow automations, webhooks, and custom integrations using n8n.",
      image: "/n8n-cert.png",
      credentialUrl: "https://my-certificates.com/certificates/69ac2bf8c0b91469f8cd321c"
    },
    {
      title: "AI Automation with Zapier",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Demonstrated proficiency in connecting web applications and automating repetitive business tasks with Zapier.",
      image: "/zapier-cert.png",
      credentialUrl: "https://my-certificates.com/certificates/698abd4e7664f5c8819293cf"
    },
    {
      title: "AI Automation with Make",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Certified in designing advanced visual automation pipelines and managing complex data routing in Make.",
      image: "/make-cert.png",
      credentialUrl: "https://my-certificates.com/certificates/698f42a17664f5c88195be94"
    },
    {
      title: "Prompt Engineering",
      issuer: "Technical Virtual Assistant",
      date: "2026",
      description: "Certified in designing effective prompts for AI models and optimizing their performance.",
      image: "/prompt-engineering-cert.png",
      credentialUrl: "https://my-certificates.com/certificates/6990c049b34e429290df957e"
    }
  ];

  // Duplicate the array to create a seamless infinite scrolling illusion
  const extendedCerts = [...certifications, ...certifications, ...certifications];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCert]);

  // Calculate the exact pixel width of one full set of original items
  const getSetWidth = () => {
    const container = scrollRef.current;
    if (!container || container.children.length < certifications.length * 3) return 0;
    const item0 = container.children[0] as HTMLElement;
    const itemN = container.children[certifications.length] as HTMLElement;
    return itemN.offsetLeft - item0.offsetLeft;
  };

  // Setup Initial infinite state by starting in the middle set
  useEffect(() => {
    let isMounted = true;
    const initScroll = () => {
      if (scrollRef.current && isMounted) {
        const setWidth = getSetWidth();
        if (setWidth > 0 && scrollRef.current.scrollLeft === 0) {
          const container = scrollRef.current;
          const centerItemIndex = certifications.length; // First item of the middle set
          const item = container.children[centerItemIndex] as HTMLElement;
          
          if (item) {
            // Calculate perfect center
            const centerPos = item.offsetLeft - container.clientWidth / 2 + item.offsetWidth / 2;
            container.style.scrollBehavior = 'auto'; // Disable smooth for instant jump
            container.scrollLeft = centerPos;
            
            setClosestDomIndex(centerItemIndex);
            setActiveIndex(0);
            
            // Re-enable smooth native scroll on next tick
            requestAnimationFrame(() => {
              if (container) container.style.scrollBehavior = 'smooth';
            });
          }
        }
      }
    };

    const timer = setTimeout(initScroll, 100);
    return () => { isMounted = false; clearTimeout(timer); };
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const setWidth = getSetWidth();
    if (setWidth > 0) {
      let jumped = false;
      let diff = 0;

      // If scrolled too far left/right, calculate invisible jump offsets
      if (container.scrollLeft < setWidth * 0.5) {
        diff = setWidth;
        jumped = true;
      } else if (container.scrollLeft > setWidth * 1.5) {
        diff = -setWidth;
        jumped = true;
      }

      // Execute the invisible jump
      if (jumped) {
        const oldBehavior = container.style.scrollBehavior;
        container.style.scrollBehavior = 'auto'; // Force instant jump without animation
        container.scrollLeft += diff;
        
        // If they are actively dragging with mouse, adjust the anchor point seamlessly
        if (dragState.current.isDragging) {
          dragState.current.startScrollLeft += diff;
        }
        
        requestAnimationFrame(() => {
          if (container) container.style.scrollBehavior = oldBehavior;
        });
      }
    }

    // Dynamic centering calculations: Determine which item is in the absolute center
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const center = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(containerCenter - center);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setClosestDomIndex(closestIdx);
    setActiveIndex(closestIdx % certifications.length);
  };

  // --- Desktop Mouse Drag Functions ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX - scrollRef.current.offsetLeft,
      initialX: e.pageX,
      startScrollLeft: scrollRef.current.scrollLeft,
      distance: 0
    };
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.scrollSnapType = 'none'; // Disable snap to allow fluid dragging
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current.isDragging || !scrollRef.current) return;
    e.preventDefault(); // Prevent text highlighting
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5; // Drag sensitivity/multiplier
    
    dragState.current.distance = Math.abs(e.pageX - dragState.current.initialX);
    scrollRef.current.scrollLeft = dragState.current.startScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!dragState.current.isDragging || !scrollRef.current) return;
    dragState.current.isDragging = false;
    
    // Restore styling and CSS Snapping after drag
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.scrollSnapType = 'x mandatory';
    scrollRef.current.style.scrollBehavior = 'smooth';

    // Soft-snap to the closest item when released
    const closestChild = scrollRef.current.children[closestDomIndex] as HTMLElement;
    if (closestChild) {
      closestChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Click handler allowing selection OR centering
  const handleCardClick = (cert: Certification, index: number, e: React.MouseEvent) => {
    // If it was a drag gesture rather than a click, ignore it
    if (dragState.current.distance > 10) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (index !== closestDomIndex) {
      // If clicking an inactive card, gracefully center it
      e.preventDefault();
      if (scrollRef.current) {
        const child = scrollRef.current.children[index] as HTMLElement;
        scrollRef.current.style.scrollBehavior = 'smooth';
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      return;
    }

    // If clicking the active card, open modal preview
    setSelectedCert(cert);
  };

  // Bottom Pagination Dots navigation
  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    // Aim for the middle array to prevent breaking the infinite buffer
    const targetIndex = index + certifications.length;
    const child = scrollRef.current.children[targetIndex] as HTMLElement;
    
    if (child) {
      scrollRef.current.style.scrollBehavior = 'smooth';
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <>
      <section id="certifications" className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Licenses & <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Continuous learning and professional validations of my technical expertise.</p>
            </motion.div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-medium text-neutral-500 flex items-center gap-2 mx-auto animate-pulse">
              Drag or Swipe to explore <ArrowRight size={12} />
            </span>
          </div>
      
          <div 
            ref={scrollRef} 
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            // Used padding-y to ensure scaled 100% active items and shadows don't clip bounds
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-8 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden scroll-smooth relative cursor-grab active:cursor-grabbing"
          >
            {extendedCerts.map((cert, index) => {
              const isActive = index === closestDomIndex;
              
              return (
                <motion.div
                  key={`${cert.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.5, delay: (index % certifications.length) * 0.05 }}
                  onClick={(e) => handleCardClick(cert, index, e)}
                  // Dynamic class assignment to generate the Premium depth-scale feel
                  className={`w-[85vw] sm:w-[350px] md:w-[400px] h-[420px] shrink-0 snap-center rounded-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col relative
                    ${isActive
                      ? 'scale-100 opacity-100 shadow-[0_0_30px_rgba(34,211,238,0.15)] border border-cyan-500/40 bg-neutral-900 z-10 cursor-pointer'
                      : 'scale-[0.85] opacity-40 shadow-none border border-neutral-800 bg-neutral-950 z-0 hover:opacity-60 cursor-pointer'
                    }
                  `}
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                    
                    {/* Hover Overlay indicating it can be expanded (Only shows cleanly on active card) */}
                    <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-700 text-white font-medium text-sm">
                        <Maximize size={16} /> Preview
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow pointer-events-none">
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{cert.title}</h3>
                    <p className="text-xs font-medium text-cyan-400 mb-3">{cert.issuer}</p>
                    <p className="text-sm text-neutral-400 mb-4 line-clamp-2 min-h-[2.5rem]">{cert.description}</p>
                    <div className="mt-auto">
                      <span className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">Issued {cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Real-time updating Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 mb-16">
            {certifications.map((_, idx) => (
              <button 
                key={`dot-${idx}`} 
                onClick={() => scrollTo(idx)} 
                aria-label={`Go to slide ${idx + 1}`} 
                className={`h-2 rounded-full transition-all duration-500 ${activeIndex === idx ? "w-8 bg-cyan-400" : "w-2 bg-neutral-700 hover:bg-neutral-500"}`} 
              />
            ))}
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
              onClick={(e) => e.stopPropagation()} 
              className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)} 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
          
              <div className="relative w-full h-[40vh] sm:h-[50vh] shrink-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-80" />
              </div>
          
              <div className="p-6 md:p-10 flex flex-col gap-4 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedCert.title}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-base font-medium text-cyan-400">{selectedCert.issuer}</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                      <p className="text-sm text-neutral-400">Issued: {selectedCert.date}</p>
                    </div>
                  </div>

                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded-lg text-sm font-medium transition-colors shrink-0"
                    >
                      <ExternalLink size={16} /> Verify Credential
                    </a>
                  )}
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