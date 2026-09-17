import { useState } from "react";
import { TbBuildings } from "react-icons/tb";
import {
  MdDateRange,
  MdOutlineLocationOn,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";

const workExperience = [
  {
    role: "Fullstack Web Developer",
    company: "Netra Surabaya",
    date: "Aug 2026 - Present",
    location: "Surabaya, Indonesia",
    description:
      "Building internal business applications to support company operations, including a company profile website and an employee attendance system. Also contributing to the development of an online game top-up platform, handling both backend services and interactive frontend interfaces using Laravel, Express, Vue.js, and React with PostgreSQL as the primary database.",
    skills: ["Laravel", "Express", "Vue.js", "React", "PostgreSQL"],
  },
  {
    role: "Fullstack Web Developer",
    company: "SchoolTech Indonesia (MagangHub Batch 2)",
    date: "Nov 2025 - May 2026",
    location: "Malang, Indonesia",
    description:
      "Developed and maintained an integrated ERP platform for the education sector with role-based permission architecture. Contributed to multiple systems including InternPro for student internships, Attendance System using card tapping for attendance tracking, and Recruitment System for company hiring processes. Built scalable backend services using Gin Golang and interactive frontend interfaces using Vue.js while managing relational and NoSQL databases.",
    skills: ["Golang", "Gin", "Vue.js", "MariaDB", "MongoDB", "Role Permission"],
  },
  {
    role: "Software Developer Intern",
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

const TABS = [
  { id: "work", label: "Work Experience", Icon: MdOutlineWorkOutline },
  { id: "education", label: "Education", Icon: LuGraduationCap },
];

const TimelineCard = ({ index, title, subtitle, SubtitleIcon, meta, children }) => (
  <div
    className="relative pl-6 mb-8 text-left border-l-4 border-cyan-800"
    data-aos="fade-right"
    data-aos-delay={150 + index * 80}
  >
    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-cyan-800 rounded-full"></div>
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full">
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-2 flex items-center">
        <SubtitleIcon className="inline-block mr-1 shrink-0" />
        {subtitle}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 mb-3 flex flex-wrap items-center">
        <MdDateRange className="inline-block mr-1 shrink-0" />
        {meta.date}
        <MdOutlineLocationOn className="inline-block mx-1 shrink-0" />
        {meta.location}
      </p>
      {children}
    </div>
  </div>
);

const SkillTags = ({ skills }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <span
        key={skill}
        className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium"
      >
        {skill}
      </span>
    ))}
  </div>
);

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="experience" className="flex justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 py-16 w-full">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            My Experience
          </h2>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div
              className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="150"
            ></div>
            <div
              className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="200"
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
          role="tablist"
          aria-label="Experience categories"
          className="flex space-x-1 rounded-xl mb-4 w-full bg-gray-100 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`experience-tab-${id}`}
              aria-selected={activeTab === id}
              aria-controls={`experience-panel-${id}`}
              onClick={() => setActiveTab(id)}
              className={`flex items-center justify-center w-full rounded-lg py-1.5 sm:py-2 text-xs sm:text-sm font-medium leading-5 transition-colors cursor-pointer ${
                activeTab === id
                  ? "bg-gradient-to-r from-cyan-900 to-cyan-800 text-white shadow"
                  : "text-gray-600 hover:bg-white/60 hover:text-cyan-800"
              }`}
            >
              <Icon className="inline-block mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full">
          {activeTab === "work" && (
            <div
              role="tabpanel"
              id="experience-panel-work"
              aria-labelledby="experience-tab-work"
            >
              {workExperience.map((exp, index) => (
                <TimelineCard
                  key={`${exp.company}-${exp.date}`}
                  index={index}
                  title={exp.role}
                  subtitle={exp.company}
                  SubtitleIcon={TbBuildings}
                  meta={exp}
                >
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    {exp.description}
                  </p>
                  <SkillTags skills={exp.skills} />
                </TimelineCard>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div
              role="tabpanel"
              id="experience-panel-education"
              aria-labelledby="experience-tab-education"
            >
              {education.map((edu, index) => (
                <TimelineCard
                  key={`${edu.institution}-${edu.date}`}
                  index={index}
                  title={edu.degree}
                  subtitle={`${edu.institution} | GPA: ${edu.gpa}`}
                  SubtitleIcon={LuGraduationCap}
                  meta={edu}
                >
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    {edu.description}
                  </p>
                  <SkillTags skills={edu.skills} />
                </TimelineCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
