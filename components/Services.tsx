"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Workflow, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building responsive, secure, and scalable web applications from the ground up using React, Next.js, and robust backend technologies.",
    icon: <MonitorSmartphone className="text-cyan-400" size={32} />,
  },
  {
    title: "Business Workflow Automation",
    description: "Designing intelligent, hands-free systems using n8n, Zapier, and Make to connect apps, manage leads, and automate repetitive tasks.",
    icon: <Workflow className="text-brand" size={32} />,
  },
  {
    title: "AI Integration Solutions",
    description: "Embedding custom AI capabilities—like conversational chatbots, smart content generators, and resume optimizers—directly into your business tools.",
    icon: <BrainCircuit className="text-blue-400" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-brand to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Bridging the gap between modern web architecture and cutting-edge artificial intelligence to deliver complete digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}