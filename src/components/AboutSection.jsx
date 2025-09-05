import ProfileImage from "../assets/images/profile.jpg";
import { FaRegUser, FaRegBell } from "react-icons/fa";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlineDownload } from "react-icons/hi";
import { RiGraduationCapLine } from "react-icons/ri";

const AboutSection = () => {
  return (
    <div id="about" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            About Me
          </p>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-800 my-4 lg:mb-8">
          Passionate about creating innovations solutions through technology
        </p>
        <div className="flex flex-col lg:flex-row gap-6 text-center mt-4 w-full">
          {/* Kolom Gambar */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative h-64 md:h-72 lg:h-96 w-80 md:w-96 lg:w-full">
              <div className="absolute top-7 md:top-7 lg:top-12 left-6 lg:left-12 w-52 md:w-60 lg:w-72 p-1 rounded-xl backdrop-blur-md bg-white/20 shadow-md transition-transform duration-400 hover:z-10 hover:scale-105">
                <img
                  src={ProfileImage}
                  alt="Gambar 1"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Gambar 2 */}
              <div className="absolute top-0 right-12 md:right-14 lg:right-20 w-24 md:w-28 lg:w-36 p-1 rounded-xl backdrop-blur-md bg-white/20 shadow-md transition-transform duration-400 hover:z-10 hover:scale-105">
                <img
                  src={ProfileImage}
                  alt="Gambar 2"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Gambar 3 */}
              <div className="absolute bottom-0 right-6 lg:right-12 w-36 md:w-40 lg:w-52 p-1 rounded-xl backdrop-blur-md bg-white/20 shadow-md transition-transform duration-400 hover:z-10 hover:scale-105">
                <img
                  src={ProfileImage}
                  alt="Gambar 3"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Kolom Paragraf */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-800 text-xl sm:text-2xl text-center lg:text-left font-bold mb-4">
              Hello There!
            </p>
            <p className="text-gray-800 text-xs sm:text-sm text-justify">
              I am a Junior Web Developer with a degree in Informatics
              Engineering from Politeknik Negeri Malang, passionate about web
              development and cutting-edge technology. Driven to bridge modern
              technology with intelligent systems, I am committed to
              delivering optimal and efficient digital solutions. In this
              rapidly evolving digital era, I believe lifelong learning is the
              key to staying competitive and relevant.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 mt-8 text-left">
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <FaRegUser className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Name
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    Muhammad Aqilul Muttaqin
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <HiOutlineLocationMarker className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Address
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    Malang, Indonesia
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <RiGraduationCapLine className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Education
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    D4 Informatics Engineering
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <MdMailOutline className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Email
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    aqilulmuttaqin16@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <MdOutlinePhone className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Phone
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    +62 823-3955-0714
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center p-2 m-2 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-md text-sm">
                  <FaRegBell className="text-white" />
                </div>
                <div className="flex flex-col my-2">
                  <span className="text-gray-500 text-[0.625rem] sm:text-xs">
                    Status
                  </span>
                  <span className="text-gray-800 text-[0.625rem] sm:text-xs font-medium">
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-4 border-gray-200" />
            <p className="mt-6 text-gray-800 text-base text-center lg:text-left font-bold">
              Interest & Focus
            </p>
            <div className="mt-2 flex gap-2 justify-center lg:justify-start">
              <span className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium">
                Web Development
              </span>
              <span className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium">
                UI/UX Design
              </span>
              <span className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium">
                Laravel
              </span>
              <span className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium">
                React Js
              </span>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="flex justify-center mt-6 items-center px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 cursor-pointer">
                <HiOutlineDownload className="inline-block mr-2" />
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;