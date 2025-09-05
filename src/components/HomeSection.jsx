import { TbNorthStar } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import ProfileImage from "../assets/images/profile.jpg";

const HomeSection = () => {
  return (
    <div id="home" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16">
        <p className="text-[0.65rem] sm:text-xs lg:text-sm text-gray-800 font-light tracking-[.20em] mt-0 lg:mt-8 mb-6 sm:mb-4 lg:mb-2">
          CRAFTING DIGITAL GOODS SINCE → v.2024
        </p>
        <div className="relative inline-block mt-[-16px]">
          <p className="text-[80px] sm:text-[122px] lg:text-[164px] bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent font-extrabold tracking-[-.08em] leading-none mb-[-15px] sm:mb[-20px] lg:mb-[-25px]">
            AQILUL
          </p>
          <img
            src={ProfileImage}
            alt="Profile Image"
            className="absolute top-1/2 left-1/2 w-[75px] h-[100px] sm:w-[111px] sm:h-[148px] lg:w-[155px] lg:h-[212px] -translate-x-1/2 -translate-y-1/2 mt-1 sm:mt-2 lg:mt-3 z-10 rounded-[70px] border-4 border-white object-cover"
          />
          <p className="text-[80px] sm:text-[122px] lg:text-[164px] bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent font-extrabold tracking-[-.08em] leading-none">
            MUTTAQIN
          </p>
        </div>
        <TbNorthStar className="text-cyan-900 text-lg sm:text-xl lg:text-2xl my-6 lg:my-4" />
        <p className="text-gray-800 text-sm sm:text-base max-w-screen-sm">
          A junior web developer — passionately crafting digital experiences
          and solutions since 2024. With a focus on clean code and
          user-friendly design, I build websites that make an impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-8 lg:mt-6">
          <button className="flex justify-center items-center px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 cursor-pointer">
            <BsStars className="inline-block mr-2" />
            View Projects
            <FaLongArrowAltRight className="inline-block ml-2" />
          </button>
          <div className="relative group rounded-lg p-[1px] bg-gradient-to-r from-cyan-900 to-cyan-800">
            <button className="flex justify-center items-center w-full h-full px-3 py-1.5 bg-white text-cyan-900 text-sm font-normal rounded-lg transition-colors duration-300 group-hover:bg-gradient-to-r hover:from-cyan-900 hover:to-cyan-800 hover:text-white cursor-pointer">
              <MdMailOutline className="inline-block mr-2" />
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
