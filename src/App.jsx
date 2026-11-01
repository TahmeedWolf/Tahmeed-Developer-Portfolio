import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Products } from "@/sections/Products";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
