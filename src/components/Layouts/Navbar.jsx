import React, { useState, useEffect, useRef } from "react";
import { Link, scroller } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayScaled, setOverlayScaled] = useState(false);
  const [overlayProps, setOverlayProps] = useState({
    left: 0,
    top: 0,
    size: 0,
  });
  const menuButtonRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (!isManualScroll) {
        const sections = ["home", "about", "experience", "project", "contact"];
        let currentSection = activeSection;
        for (let i = 0; i < sections.length; i++) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = sections[i];
              break;
            }
          }
        }
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll, activeSection]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setOverlayVisible(false);
        setOverlayScaled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleManualScroll = (sectionId) => {
    setIsManualScroll(true);
    setActiveSection(sectionId);
    closeMenu();
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -32,
    });
    setTimeout(() => setIsManualScroll(false), 600);
  };
  const openMenuWithCircle = () => {
    if (!menuButtonRef.current) {
      setIsMenuOpen(true);
      return;
    }

    const rect = menuButtonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distances = [
      Math.hypot(centerX, centerY),
      Math.hypot(window.innerWidth - centerX, centerY),
      Math.hypot(centerX, window.innerHeight - centerY),
      Math.hypot(window.innerWidth - centerX, window.innerHeight - centerY),
    ];
    const radius = Math.ceil(Math.max(...distances));
    const size = radius * 2;
    const left = centerX - radius;
    const top = centerY - radius;

    setOverlayProps({ left, top, size });
    setOverlayVisible(true);

    requestAnimationFrame(() => {
      setOverlayScaled(true);
    });

    setTimeout(() => {
      setIsMenuOpen(true);
    }, 120);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOverlayScaled(false);
    setTimeout(() => {
      setOverlayVisible(false);
    }, 600);
  };

  const toggleMenu = () => {
    if (overlayVisible || isMenuOpen) {
      closeMenu();
    } else {
      openMenuWithCircle();
    }
  };

  return (
    <nav
      className={`w-full fixed z-50 top-0 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-medium text-gray-800"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              AQiels
            </a>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center space-x-6">
              {["home", "about", "experience", "project", "contact"].map(
                (section, index) => (
                  <li key={section}>
                    <Link
                      to={section}
                      spy={false}
                      smooth={true}
                      offset={-32}
                      duration={500}
                      onClick={() => handleManualScroll(section)}
                      className={`cursor-pointer px-3 py-2 rounded-md text-base transition-colors duration-300 ${
                        activeSection === section
                          ? "text-cyan-800 font-medium"
                          : "text-gray-700 hover:text-cyan-800 font-normal"
                      }`}
                      data-aos="fade-down"
                      data-aos-delay="300"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
              aria-label="LinkedIn Profile"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href="https://github.com/AqilulMuttaqin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
              aria-label="GitHub Profile"
              data-aos="fade-left"
              data-aos-delay="450"
            >
              <TbBrandGithubFilled className="text-lg" />
            </a>
            <a
              href="https://instagram.com/aql_mtqn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
              aria-label="Instagram Profile"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <RiInstagramFill className="text-lg" />
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none cursor-pointer"
              aria-label={
                overlayVisible || isMenuOpen ? "Close menu" : "Open menu"
              }
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {overlayVisible || isMenuOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <CgMenuRight className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {overlayVisible && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div
            aria-hidden
            style={{
              left: overlayProps.left,
              top: overlayProps.top,
              width: overlayProps.size,
              height: overlayProps.size,
              transform: overlayScaled ? "scale(1)" : "scale(0)",
              transition: "transform 600ms cubic-bezier(.2,.9,.3,1)",
              transformOrigin: "center center",
            }}
            className="absolute rounded-full bg-gradient-to-b from-cyan-900/95 to-cyan-800/95 backdrop-blur-sm"
          />
        </div>
      )}

      <div
        className={`lg:hidden fixed inset-0 z-50 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col justify-between h-full transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <a href="/" className="text-2xl font-medium text-white">
              AQiels
            </a>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none cursor-pointer transition-colors duration-200"
            >
              <IoClose className="text-3xl" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-4">
            <ul className="space-y-3 text-center">
              {["home", "about", "experience", "project", "contact"].map(
                (section) => (
                  <li key={section}>
                    <Link
                      to={section}
                      spy={false}
                      smooth={true}
                      offset={-32}
                      duration={500}
                      onClick={() => handleManualScroll(section)}
                      className={`block py-1 text-xl transition-all duration-300 cursor-pointer ${
                        activeSection === section
                          ? "text-white font-bold"
                          : "text-gray-200 hover:text-white font-base"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="pb-8">
            <div className="flex items-center justify-center space-x-4 py-6">
              <a
                href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://github.com/AqilulMuttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <TbBrandGithubFilled className="text-xl" />
              </a>
              <a
                href="https://instagram.com/aql_mtqn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <RiInstagramFill className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
