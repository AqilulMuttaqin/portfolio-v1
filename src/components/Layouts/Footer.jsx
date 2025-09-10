import { Link } from "react-scroll";
import {
  FaHeart,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdMailOutline, MdOutlineWorkOutline } from "react-icons/md";
import { TbHome, TbUser, TbFolder, TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  const handleScrollClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-12 md:gap-6">
          {/* Brand Section */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">AQiels Portfolio</h3>
            <p className="text-gray-600 mb-4 text-xs sm:text-sm">
              Passionate developer creating innovative solutions and beautiful
              experiences. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-3 text-cyan-100 mb-6 md:mb-0">
              <a
                href="https://linkedin.com/in/muhammad-aqilul-muttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://github.com/AqilulMuttaqin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <TbBrandGithubFilled className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://instagram.com/aql_mtqn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 hover:bg-cyan-900 text-white rounded-full transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <RiInstagramFill className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-xs sm:text-sm grid grid-cols-2 gap-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={500}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                >
                  <TbHome className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={500}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                >
                  <TbUser className="mr-1" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={500}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                >
                  <MdOutlineWorkOutline className="mr-1" />
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={500}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                >
                  <TbFolder className="mr-1" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={500}
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center cursor-pointer"
                >
                  <MdMailOutline className="mr-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:aqilulmuttaqin16@gmail.com"
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center"
                >
                  <MdMailOutline className="mr-1" />
                  aqilulmuttaqin16@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6282339550714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-900 transition-colors flex items-center"
                >
                  <FaWhatsapp className="mr-1" />
                  +62 823-3955-0714
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs sm:text-sm">
          <p className="text-gray-600 flex items-center justify-center">
            © 2025 AQiels Portfolio. Made with{" "}
            <FaHeart className="text-red-400 mx-1" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
