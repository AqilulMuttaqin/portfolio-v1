import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  // AOS keeps its configuration in a single module-level object and registers a
  // new set of scroll/resize listeners on every init(), so it must only ever be
  // initialised once for the whole app.
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 80,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
