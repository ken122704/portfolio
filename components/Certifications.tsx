"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // NEW: Track the currently visible card
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Coursera / Google",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // NEW: Calculate which card is in the center of the screen when swiping
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollProgress = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
    const newIndex = Math.round(scrollProgress * (certifications.length - 1));
    setActiveIndex(newIndex);
  };

  // NEW: Scroll exactly to a specific card when a dot is clicked
  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 424 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Licenses & <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Continuous learning and professional validations of my technical expertise.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-medium text-neutral-500 md:hidden flex items-center gap-1 animate-pulse">
            Swipe <ArrowRight size={12} />
          </span>
          <div className="hidden md:flex ml-auto gap-2">
            <button onClick={() => scroll("left")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
              <ChevronLeft size={20} className="text-neutral-500 group-hover:text-neutral-400" />
            </button>
            <button onClick={() => scroll("right")} className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-400 transition-colors group">
              <ChevronRight size={20} className="text-neutral-500 group-hover:text-neutral-400" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="w-[85vw] sm:w-[350px] md:w-[400px] h-[420px] shrink-0 snap-center bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-500/50 transition-colors group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-neutral-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-neutral-800">
                  <Award size={20} className="text-cyan-400" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{cert.title}</h3>
                <p className="text-neutral-400 mb-4 line-clamp-2">{cert.issuer}</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium text-neutral-400 bg-cyan-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                    Issued {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEW: Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 mb-16">
          {certifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-8 bg-neutral-500" 
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}