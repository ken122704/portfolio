"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    name: "Test of Practical Competency in IT (TOPCIT)",
    issuer: "Institute for Information & communications Technology Planning & Evaluation",
    date: "December 2025",
    status: "Completed"
  }
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Licenses & </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-1">
                <Award className="text-brand" size={24} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-neutral-400 font-medium">{cert.issuer}</p>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <span className="text-neutral-400">Issued: {cert.date}</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full font-medium">
                    {cert.status}
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