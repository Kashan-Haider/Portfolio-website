import Advantages from "@/components/advantages/Advanteges";
import Connect from "@/components/connect/Connect";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import WhyChooseMe from "@/components/whyChooseMe/WhyChooseMe";

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden text-light" >
      <Navbar/>
      <Hero/>
      <Projects/>
      <Connect/>
      <WhyChooseMe/>
      <Skills/>
      <Advantages/>
      <Contact/>
      <p className="text-center p-2 text-sm" >Copyrights @ 2024 Kashan Haider</p>
    </main>
  );
}
