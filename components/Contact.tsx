"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Column: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-foreground">Let&apos;s work </span>
              <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent"> together.</span>
            </h2>
            
            <p className="text-neutral-400 text-lg mb-10 max-w-md leading-relaxed">
              Whether you need a full-stack web application built from scratch or intelligent workflows automated to save you time, I am ready to help scale your ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-fit pr-8">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand" size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium mb-1">Email</p>
                  <a href="mailto:kencharlesbesa27@gmail.com" className="text-foreground font-semibold hover:text-brand transition-colors">
                    kencharlesbesa27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-fit pr-8">
                <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium mb-1">Location</p>
                  <p className="text-foreground font-semibold">Cagayan de Oro City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/70 ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-5 py-4 rounded-2xl bg-background border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand/50 focus:bg-white/[0.02] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/70 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-5 py-4 rounded-2xl bg-background border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand/50 focus:bg-white/[0.02] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl bg-background border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand/50 focus:bg-white/[0.02] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors group"
                >
                  Send Message 
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}