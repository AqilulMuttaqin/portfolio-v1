import { useState } from "react";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;