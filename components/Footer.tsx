import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-center gap-8">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col">
          <Link href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          KEN
        </Link>
          <p className="text-foreground/60 text-sm mt-2 text-neutral-400 ">
            Full-Stack Developer & AI Automation Specialist.
          </p>
          <p className="text-foreground/40 text-xs mt-6 text-neutral-400 ">
            © {currentYear} Ken Charles I. Besa. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-6">
          <a href="https://github.com/ken122704" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/besa-ken-charles-527154243" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:kencharlesbesa27@gmail.com" className="text-foreground/60 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}