"use client";

import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export default function Certifications() {
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
    },
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Licenses & <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Continuous learning and professional validations of my technical expertise.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-end mb-4 md:hidden">
          <span className="text-xs font-medium text-neutral-500 flex items-center gap-1 animate-pulse">
            Swipe <ArrowRight size={12} />
          </span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center shrink-0 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors group flex flex-col"
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
                  <Award size={20} className="text-indigo-400" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-neutral-400 mb-4">{cert.issuer}</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-full">
                    Issued {cert.date}
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