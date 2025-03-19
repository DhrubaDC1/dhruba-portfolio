import { useRef } from "react";
import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar"; // Assuming Avatar is a separate component
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const sectionsColumnRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && sectionsColumnRef.current) {
      sectionsColumnRef.current.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <div className="flex flex-col md:flex-row">
        {/* Left Column: Avatar */}
        <div className="w-full md:w-2/5 sticky top-0 h-screen">
          <Avatar />
        </div>
        {/* Right Column: Scrollable Sections */}
        <div
          ref={sectionsColumnRef}
          className="w-full md:w-3/5 overflow-y-scroll snap-y snap-mandatory h-screen pr-4"
        >
          <section
            id="about"
            className="min-h-screen  flex items-center justify-center"
          >
            <About />
          </section>
          <section
            id="experience"
            className="min-h-screen  flex items-center justify-center"
          >
            <Experience />
          </section>
          <section
            id="projects"
            className="min-h-screen  flex items-center justify-center"
          >
            <Projects />
          </section>
          <section
            id="skills"
            className="min-h-screen  flex items-center justify-center px-8"
          >
            <Skills />
          </section>
          <section
            id="contact"
            className="min-h-screen  flex items-center justify-center"
          >
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
