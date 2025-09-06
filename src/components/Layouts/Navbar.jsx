import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Only update active section if not in manual scroll mode
      if (!isManualScroll) {
        const sections = ["home", "about", "experience", "project", "contact"];
        let currentSection = activeSection;

        for (let i = 0; i < sections.length; i++) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            // More precise detection with larger threshold
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

  const handleManualScroll = (sectionId) => {
    setIsManualScroll(true);
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -32,
    });

    // Reset manual scroll mode after scroll completes
    setTimeout(() => {
      setIsManualScroll(false);
    }, 600);
  };

  const SocialIcons = ({ isMobile = false }) => (
    <div
      className={`flex items-center justify-center space-x-3 ${
        isMobile ? "py-6" : ""
      }`}
    >
      <a
        href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn className="text-lg" />
      </a>
      <a
        href="https://github.com/AqilulMuttaqin"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="GitHub Profile"
      >
        <TbBrandGithubFilled className="text-lg" />
      </a>
      <a
        href="https://instagram.com/aql_mtqn"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="Instagram Profile"
      >
        <RiInstagramFill className="text-lg" />
      </a>
    </div>
  );

  return (
    <nav
      className={`w-full fixed z-50 top-0 transition-colors duration-300 bg-white ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-medium text-gray-800">
              AQiels
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex">
            <ul className="flex items-center space-x-8">
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
                      className={`nav-item cursor-pointer ${
                        activeSection === section ? "active" : ""
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Ikon Sosial Media Desktop */}
          <div className="hidden lg:block">
            <SocialIcons />
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <CgMenuRight className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile - Full Screen */}
      <div
        className={`${
          isMenuOpen ? "fixed" : "hidden"
        } lg:hidden inset-0 z-50 bg-gradient-to-b from-cyan-900/90 to-cyan-800/90 backdrop-blur-sm`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Close Button */}
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

          {/* Menu Items - Centered */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-1 text-center">
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
                      className={`block py-2 text-xl font-medium transition-all duration-300 cursor-pointer ${
                        activeSection === section
                          ? "text-white font-extrabold rounded-lg mx-4"
                          : "text-gray-200/80 font-normal rounded-lg mx-4"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Icons - Bottom */}
          <div className="pb-8">
            <div className="flex items-center justify-center space-x-3 py-6">
              <a
                href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://github.com/AqilulMuttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="GitHub Profile"
              >
                <TbBrandGithubFilled className="text-lg" />
              </a>
              <a
                href="https://instagram.com/aql_mtqn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Instagram Profile"
              >
                <RiInstagramFill className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
