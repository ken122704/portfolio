"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFirebase, SiSupabase,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit,
} from "react-icons/si";

const techCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ]
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4343", color: "#EA4343" },
      { name: "Make", icon: "https://cdn.simpleicons.org/make/FFFFFF", color: "#6132D5" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00", color: "#FF4A00" },
      { name: "GoHighLevel", icon: "/ghl.png", color: "#000000"  },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 relative z-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-b border-white/5 pb-16 last:border-0"
            >
              {/* Left Column: Category Name */}
              <div className="w-full md:w-1/4 pt-2">
                <h3 className="text-2xl md:text-3xl font-black tracking-widest text-foreground/20 uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Right Column: Interactive Logo Grid */}
              <div className="w-full md:w-3/4 flex flex-wrap gap-4">
                {category.skills.map((tech, i) => (
                  <div 
                    key={i} 
                    className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-lg hover:shadow-xl"
                    style={{ '--brand-color': tech.color } as React.CSSProperties}
                  >
                    {/* THIS IS THE FIX: Checks if icon is a string URL or a React Component */}
                    {typeof tech.icon === 'string' ? (
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <tech.icon 
                        size={24} 
                        className="text-[var(--brand-color)] transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    
                    <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}