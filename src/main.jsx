import { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";
import Navbar from "./components/Layouts/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </>
    ),
  },
  // { path: "/about", element: <About /> },
  // { path: "/project", element: <Project /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
