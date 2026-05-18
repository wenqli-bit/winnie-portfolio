import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Demo from "@/components/Demo";
import Life from "@/components/Life";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Demo />
      <Life />
      <Contact />
      <Footer />
    </main>
  );
}
