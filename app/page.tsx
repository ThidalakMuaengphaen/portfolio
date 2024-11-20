import Image from "next/image";
import Navbar from '@/components/nav';
import Hero from "@/components/hero";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
