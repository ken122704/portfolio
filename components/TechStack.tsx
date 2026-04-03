"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGreensock, SiFlutter, SiBootstrap,
  SiNodedotjs, SiPython, SiDjango, SiExpress,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiDocker, 
} from "react-icons/si";

// We store the exact brand hex colors to use on hover
const techCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
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
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative z-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-white to-brand bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
                    // The 'group' class is the magic that links the hover state of the box to the icon inside
                    className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-lg hover:shadow-xl"
                    style={{ '--hover-color': tech.color } as React.CSSProperties}
                  >
                    <tech.icon 
                      size={24} 
                      // Text starts gray, and on group-hover, dynamically switches to the CSS variable color
                      className="text-foreground/40 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    />
                    <span className="text-sm font-medium text-foreground/70 group-hover:text-white transition-colors duration-300">
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