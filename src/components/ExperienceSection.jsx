import { useState, useEffect } from "react";
import { TbBuildings } from "react-icons/tb";
import {
  MdDateRange,
  MdOutlineLocationOn,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  const workExperience = [
    {
      role: "Software Engineer Intern",
      company: "CV. Sinergi Teknokarya",
      date: "Aug 2024 - Dec 2024",
      location: "Jember, Indonesia",
      description:
        "Gained comprehensive experience in the end-to-end software development lifecycle, from analyzing business process flows for creative proposals, contributing to UI/UX design, to hands-on code implementation. Actively participated in enhancing the primary application by developing and integrating new features.",
      skills: ["Laravel", "Bootstrap", "Git", "UI/UX Design"],
    },
    {
      role: "Web Developer Intern",
      company: "PT. Surabaya Autocomp Indonesia",
      date: "Jan 2024 - Jun 2024",
      location: "Mojokerto, Indonesia",
      description:
        "Contributed to the digital transformation of the production department by analyzing operational processes and implementing technical solutions. Successfully developed and deployed a system for real-time data input, notifications, and a monitoring dashboard to improve production tracking and management.",
      skills: ["Laravel", "Bootstrap", "MySQL"],
    },
  ];

  const education = [
    {
      degree: "D4 - Informatics Engineering",
      institution: "Politeknik Negeri Malang",
      date: "2021 - 2025",
      gpa: "3.77/4.00",
      location: "Malang, Indonesia",
      description:
        "Focused on web development and database management. Proactively applied knowledge in a professional setting by participating in web development internship programs.",
      skills: [
        "Laravel",
        "React Js",
        "MySQL",
        "Bootstrap",
        "Tailwind CSS",
        "UI/UX Design",
      ],
    },
    {
      degree: "MAS - Natural Science",
      institution: "Al-Hayatul Islamiyah",
      date: "2017 - 2020",
      gpa: "88/100",
      location: "Malang, Indonesia",
      description:
        "Developed organizational and administrative skills while serving as the General Secretary of the Student Council (OSIS).",
      skills: ["Excel", "Adaptability", "Graphic Design"],
    },
  ];

  return (
    <div id="experience" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16 w-full">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            My Experience
          </p>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div
              className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
            <div
              className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="300"
            ></div>
          </div>
        </div>

        <p
          className="text-sm sm:text-base text-gray-800 my-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Showcasing my professional journey through work experiences and
          educational milestones.
        </p>

        {/* Tab Navigation */}
        <div
          className="flex space-x-1 rounded-xl mb-4 w-full bg-gray-100 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center justify-center w-full rounded-lg py-1.5 sm:py-2 text-xs sm:text-sm font-medium leading-5 cursor-pointer ${
              activeTab === "work"
                ? "bg-gradient-to-r from-cyan-900 to-cyan-800 text-white shadow"
                : "text-gray-600 hover:bg-white/[0.12] hover:text-cyan-800"
            }`}
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <MdOutlineWorkOutline className="inline-block mr-2" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center justify-center w-full rounded-lg py-1.5 sm:py-2 text-xs sm:text-sm font-medium leading-5 cursor-pointer ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-900 to-cyan-800 text-white shadow"
                : "text-gray-600 hover:bg-white/[0.12] hover:text-cyan-800"
            }`}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <LuGraduationCap className="inline-block mr-2" />
            Education
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {activeTab === "work" &&
            workExperience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 mb-8 text-left border-l-4 border-cyan-800"
                data-aos="fade-right"
                data-aos-delay={300 + index * 150}
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-cyan-800 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 flex items-center">
                    <TbBuildings className="inline-block mr-1" />
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center">
                    <MdDateRange className="inline-block mr-1" />
                    {exp.date} |
                    <MdOutlineLocationOn className="inline-block mx-1" />
                    {exp.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "education" &&
            education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-6 mb-8 text-left border-l-4 border-cyan-800"
                data-aos="fade-right"
                data-aos-delay={300 + index * 150}
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-cyan-800 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 flex items-center">
                    <LuGraduationCap className="inline-block mr-1" />
                    {edu.institution} | GPA: {edu.gpa}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center">
                    <MdDateRange className="inline-block mr-1" />
                    {edu.date} |{" "}
                    <MdOutlineLocationOn className="inline-block mx-1" />
                    {edu.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
