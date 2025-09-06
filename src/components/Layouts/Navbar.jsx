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

        // // Special case for contact section
        // const contactEl = document.getElementById("contact");
        // if (contactEl) {
        //   const contactRect = contactEl.getBoundingClientRect();
        //   if (contactRect.top <= window.innerHeight - 200) {
        //     currentSection = "contact";
        //   }
        // }

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
      className={`flex items-center space-x-1 ${
        isMobile ? "justify-center py-4" : ""
      }`}
    >
      <a
        href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn className="text-base" />
      </a>
      <a
        href="https://github.com/AqilulMuttaqin"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="GitHub Profile"
      >
        <TbBrandGithubFilled className="text-base" />
      </a>
      <a
        href="https://instagram.com/aql_mtqn"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
        aria-label="Instagram Profile"
      >
        <RiInstagramFill className="text-base" />
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
              className="text-gray-800 hover:text-gray-800 focus:outline-none cursor-pointer"
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

      {/* Dropdown Menu Mobile */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
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
                  className={`nav-item-2 block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
          <li>
            <SocialIcons isMobile={true} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
