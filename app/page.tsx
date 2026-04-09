import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AmbientBackground />
      <Hero />
      <About />
      <Navbar />
      <Services />
      <Experience />
      <TechStack />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}