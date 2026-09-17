import { Link } from "react-scroll";
import { TbNorthStar } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import ProfileImage from "../assets/images/profile.jpg";
import { SCROLL_OFFSET, SCROLL_DURATION } from "../constants";

const HomeSection = () => {
  return (
    <section id="home" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16">
        <p
          className="text-[0.65rem] sm:text-xs lg:text-sm text-gray-800 font-light tracking-[.20em] mt-0 lg:mt-8 mb-6 sm:mb-4 lg:mb-2"
          data-aos="zoom-out"
          data-aos-delay="50"
        >
          CRAFTING DIGITAL GOODS SINCE → v.2024
        </p>
        <h1 className="relative inline-block mt-[-16px]">
          <span
            className="block text-[80px] sm:text-[122px] lg:text-[164px] bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent font-extrabold tracking-[-.08em] leading-none mb-[-15px] sm:mb-[-20px] lg:mb-[-25px]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            AQILUL
          </span>
          <img
            src={ProfileImage}
            alt="Portrait of Muhammad Aqilul Muttaqin"
            width="155"
            height="212"
            fetchPriority="high"
            decoding="async"
            className="absolute top-1/2 left-1/2 w-[75px] h-[100px] sm:w-[111px] sm:h-[148px] lg:w-[155px] lg:h-[212px] -translate-x-1/2 -translate-y-1/2 mt-1 sm:mt-2 lg:mt-3 z-10 rounded-[70px] border-4 border-white object-cover"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <span
            className="block text-[80px] sm:text-[122px] lg:text-[164px] bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent font-extrabold tracking-[-.08em] leading-none"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            MUTTAQIN
          </span>
        </h1>
        <TbNorthStar
          className="text-cyan-900 text-lg sm:text-xl lg:text-2xl my-6 lg:my-4"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div data-aos="fade-up" data-aos-delay="450">
          <p className="text-gray-800 text-sm sm:text-base max-w-screen-sm">
            A junior web developer — passionately crafting digital experiences
            and solutions since 2024. With a focus on clean code and
            user-friendly design, I build websites that make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-6 justify-center">
            <div className="flex justify-center">
              <Link
                to="project"
                href="#project"
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={SCROLL_DURATION}
                className="inline-flex justify-center items-center px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 cursor-pointer"
              >
                <BsStars className="mr-2" />
                View Projects
                <FaLongArrowAltRight className="ml-2" />
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="relative group rounded-lg bg-gradient-to-r from-cyan-900 to-cyan-800 p-[1px]">
                <Link
                  to="contact"
                  href="#contact"
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  duration={SCROLL_DURATION}
                  className="inline-flex justify-center items-center px-3 py-1.5 bg-white text-cyan-900 text-sm font-normal rounded-lg transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-900 group-hover:to-cyan-800 group-hover:text-white cursor-pointer"
                >
                  <MdMailOutline className="mr-2" />
                  Let&apos;s Work Together
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
