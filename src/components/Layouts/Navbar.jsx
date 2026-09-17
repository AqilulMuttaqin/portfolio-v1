import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import {
  SECTIONS,
  SCROLL_OFFSET,
  SCROLL_DURATION,
  SOCIAL_LINKS,
} from "../../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayScaled, setOverlayScaled] = useState(false);
  const [overlayProps, setOverlayProps] = useState({
    left: 0,
    top: 0,
    size: 0,
  });
  const menuButtonRef = useRef(null);

  // Kept in refs so the scroll listener below can stay registered exactly once
  // instead of being torn down and re-added on every section change.
  const activeSectionRef = useRef("home");
  const isManualScrollRef = useRef(false);
  const manualScrollTimeout = useRef(null);
  const overlayTimeout = useRef(null);
  const openMenuTimeout = useRef(null);

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        setIsScrolled(window.scrollY > 10);

        if (isManualScrollRef.current) return;
        for (const section of SECTIONS) {
          const el = document.getElementById(section);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            if (activeSectionRef.current !== section) {
              activeSectionRef.current = section;
              setActiveSection(section);
            }
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOverlayScaled(false);
    window.clearTimeout(overlayTimeout.current);
    overlayTimeout.current = window.setTimeout(
      () => setOverlayVisible(false),
      600
    );
  }, []);

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

  // Stop the page behind the full-screen menu from scrolling, compensating for
  // the scrollbar so the layout does not jump.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const { body } = document;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && !overlayVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, overlayVisible, closeMenu]);

  useEffect(
    () => () => {
      window.clearTimeout(manualScrollTimeout.current);
      window.clearTimeout(overlayTimeout.current);
      window.clearTimeout(openMenuTimeout.current);
    },
    []
  );

  // The react-scroll <Link> runs this handler and then performs the scroll
  // itself, so this must not scroll as well — it only syncs state and mutes the
  // scroll spy while the animation plays.
  const handleManualScroll = (sectionId) => {
    isManualScrollRef.current = true;
    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
    closeMenu();

    window.clearTimeout(manualScrollTimeout.current);
    manualScrollTimeout.current = window.setTimeout(() => {
      isManualScrollRef.current = false;
    }, SCROLL_DURATION + 200);
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

    setOverlayProps({ left: centerX - radius, top: centerY - radius, size });
    setOverlayVisible(true);

    window.requestAnimationFrame(() => setOverlayScaled(true));

    window.clearTimeout(openMenuTimeout.current);
    openMenuTimeout.current = window.setTimeout(() => setIsMenuOpen(true), 120);
  };

  const toggleMenu = () => {
    if (overlayVisible || isMenuOpen) {
      closeMenu();
    } else {
      openMenuWithCircle();
    }
  };

  const menuIsShowing = overlayVisible || isMenuOpen;

  return (
    <nav
      className={`w-full fixed z-50 top-0 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="home"
              href="#home"
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={SCROLL_DURATION}
              onClick={() => handleManualScroll("home")}
              className="text-2xl font-medium text-gray-800 cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              AQiels
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center space-x-6">
              {/* data-aos lives on the <li>, not the link: AOS adds its
                  aos-animate class imperatively, and React would wipe it every
                  time the active section changes the link's className — making
                  the item briefly disappear. */}
              {SECTIONS.map((section) => (
                <li key={section} data-aos="fade-down" data-aos-delay="300">
                  <Link
                    to={section}
                    href={`#${section}`}
                    smooth={true}
                    offset={SCROLL_OFFSET}
                    duration={SCROLL_DURATION}
                    onClick={() => handleManualScroll(section)}
                    aria-current={activeSection === section ? "true" : undefined}
                    className={`cursor-pointer px-3 py-2 rounded-md text-base transition-colors duration-300 ${
                      activeSection === section
                        ? "text-cyan-800 font-medium"
                        : "text-gray-700 hover:text-cyan-800 font-normal"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {SOCIAL_LINKS.map(({ href, label, Icon }, index) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
                aria-label={label}
                data-aos="fade-left"
                data-aos-delay={400 + index * 50}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-800 rounded cursor-pointer"
              aria-label={menuIsShowing ? "Close menu" : "Open menu"}
              aria-expanded={menuIsShowing}
              aria-controls="mobile-menu"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {menuIsShowing ? (
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
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
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
            <span className="text-2xl font-medium text-white">AQiels</span>
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white focus:outline-none cursor-pointer transition-colors duration-200"
              aria-label="Close menu"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <IoClose className="text-3xl" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-4">
            <ul className="space-y-3 text-center">
              {SECTIONS.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    href={`#${section}`}
                    smooth={true}
                    offset={SCROLL_OFFSET}
                    duration={SCROLL_DURATION}
                    onClick={() => handleManualScroll(section)}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className={`block py-1 text-xl transition-all duration-300 cursor-pointer ${
                      activeSection === section
                        ? "text-white font-bold"
                        : "text-gray-200 hover:text-white font-base"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-8">
            <div className="flex items-center justify-center space-x-4 py-6">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="p-2 bg-white/90 hover:bg-white text-cyan-800 rounded-full transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
