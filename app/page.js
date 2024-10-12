import Header from "./components/Header";
import About from "./section/About";
import Contact from "./section/ContactUs";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Projects from "./section/Project";
import Skills from "./section/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
