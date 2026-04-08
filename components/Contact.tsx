"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP SECTION: Centered Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Subtle Badge */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-neutral-400 ">Available for new opportunities</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Start Your Next </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Project</span>
          </h2>
          
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Whether you need a custom web application or an automated workflow to scale your business, I&apos;m here to help.
          </p>
        </motion.div>

        {/* BOTTOM SECTION: Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Contact Info Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8 lg:pt-8"
          >
            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                <Mail className="text-neutral-400" size={20} />
              </div>
              <div>
                <p className="text-base text-foreground font-bold mb-1">Email</p>
                <a href="mailto:kencharlesbesa27@gmail.com" className="text-neutral-400 text-sm hover:text-cyan-400 transition-colors">
                  kencharlesbesa27@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                <Phone className="text-neutral-400" size={20} />
              </div>
              <div>
                <p className="text-base text-foreground font-bold mb-1">Phone</p>
                <p className="text-neutral-400 text-sm">
                  0929 236 9556
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-neutral-400" size={20} />
              </div>
              <div>
                <p className="text-base text-foreground font-bold mb-1">Location</p>
                <p className="text-neutral-400 text-sm">Cagayan de Oro City, Philippines</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/5 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  // Using the vibrant indigo from your design
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-white-400 transition-colors group"
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