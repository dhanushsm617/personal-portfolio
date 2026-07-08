import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import Chatbot from "@/components/chatbot/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialBar />

      <main className="overflow-x-hidden bg-[#050505] text-white">
        <section id="hero">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects"  >
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
        <Chatbot />
      </main>
    </>
  );
}