import { Link } from "react-scroll";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdOutlineWorkOutline } from "react-icons/md";
import { TbHome, TbUser, TbFolder } from "react-icons/tb";
import {
  PROFILE,
  SOCIAL_LINKS,
  SCROLL_OFFSET,
  SCROLL_DURATION,
} from "../../constants";

const QUICK_LINKS = [
  { to: "home", label: "Home", Icon: TbHome },
  { to: "about", label: "About", Icon: TbUser },
  { to: "experience", label: "Experience", Icon: MdOutlineWorkOutline },
  { to: "project", label: "Projects", Icon: TbFolder },
  { to: "contact", label: "Contact", Icon: MdMailOutline },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-6">
          {/* Brand Section */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              AQiels Portfolio
            </h3>
            <p className="text-gray-600 mb-4 text-xs sm:text-sm">
              Passionate developer creating innovative solutions and beautiful
              experiences. Let&apos;s build something amazing together.
            </p>
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUICK_LINKS.map(({ to, label, Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    href={`#${to}`}
                    smooth={true}
                    offset={SCROLL_OFFSET}
                    duration={SCROLL_DURATION}
                    className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                  >
                    <Icon className="mr-1 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center break-all"
                >
                  <MdMailOutline className="mr-1 shrink-0" />
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center"
                >
                  <FaWhatsapp className="mr-1 shrink-0" />
                  {PROFILE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs sm:text-sm">
          <p className="text-gray-600 flex items-center justify-center">
            © {currentYear} AQiels Portfolio. Made with
            <FaHeart className="text-red-400 mx-1" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
