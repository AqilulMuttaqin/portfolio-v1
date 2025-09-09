import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);

  const projects = [
    {
      id: 1,
      title: "Aqiels Portfolio",
      category: "Web Application",
      period: "Aug 2025 - Present",
      description:
        "Personal portfolio website showcasing my projects, skills, and experience as a web developer. Built with modern React.js and Tailwind CSS.",
      features: ["Responsive Design", "Modern UI/UX", "Project Showcase"],
      image: "../projects/aqiels-portfolio.png",
      technologies: ["JavaScript", "React Js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "https://github.com/AqilulMuttaqin/portfolio-v1.git",
      confidential: false,
    },
    {
      id: 2,
      title: "SPK-MBG",
      category: "Web Application",
      period: "Feb 2025 - Jun 2025",
      description:
        "Decision Support System for selection process using ELECTRE method. Helps organizations make data-driven decisions efficiently.",
      features: ["Multi-criteria Analysis", "Data Visualization"],
      image: "../projects/spk-mbg.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/AqilulMuttaqin/spk-mbg.git",
      confidential: false,
    },
    {
      id: 3,
      title: "Downtime Analysis",
      category: "Web Application",
      period: "May 2024 - Jun 2024",
      description:
        "Manufacturing downtime tracking and analysis system to identify production bottlenecks and improve operational efficiency.",
      features: [
        "Real-time Monitoring",
        "Performance Analytics",
        "Graph Visualization",
      ],
      image: "../projects/downtime-analysis.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      confidential: true,
    },
    {
      id: 4,
      title: "Meeting Tracker",
      category: "Web Application",
      period: "Apr 2024 - May 2024",
      description:
        "Corporate meeting management system for scheduling, attendance using scanner, and documenting meetings with minutes.",
      features: ["Attendance Tracking", "Document Management"],
      image: "../projects/meeting-tracker.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      confidential: true,
    },
    {
      id: 5,
      title: "Parcel Tracker",
      category: "Web Application",
      period: "Apr 2024",
      description:
        "Logistics parcel distribution system to monitor participant pickup status using scanner.",
      features: ["Participant Tracking", "Calculation Optimization"],
      image: "../projects/parcel-tracker.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      confidential: true,
    },
    {
      id: 6,
      title: "Inventory Management",
      category: "Web Application",
      period: "Feb 2024 - Mar 2024",
      description:
        "Comprehensive inventory control system for tracking stock, orders, warehouse deliveries, and item quantities across areas.",
      features: [
        "Stock Monitoring",
        "Automated Reordering",
        "Multi-location Support",
      ],
      image: "../projects/inventory-management.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      confidential: true,
    },
    {
      id: 7,
      title: "Scrap Record",
      category: "Web Application",
      period: "Jan 2024 - Feb 2024",
      description:
        "Visualization and recording system for production scrap materials to monitor, analyze, and reduce production waste.",
      features: [
        "Trend Analysis",
        "Automated Recording",
        "Graph Visualization",
      ],
      image: "../projects/scrap-record.png",
      technologies: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      confidential: true,
    },
    {
      id: 8,
      title: "OCR Scanner",
      category: "Mobile Application",
      period: "Nov 2023 - Dec 2023",
      description:
        "Mobile OCR application for scanning and extracting text from images and real-world objects using the camera.",
      features: ["Text Recognition", "Image Processing"],
      image: "../projects/ocr-scanner.png",
      technologies: ["Flutter", "Python Flask"],
      liveLink: "#",
      githubLink:
        "https://github.com/AqilulMuttaqin/project_scan_food_content.git",
      confidential: false,
    },
    {
      id: 9,
      title: "Butak-Panderman",
      category: "Web Application",
      period: "Mar 2023 - May 2023",
      description:
        "Tourism information system for Butak-Panderman hiking trails, providing route information and online ticket booking.",
      features: ["Trail Information", "Online Booking"],
      image: "../projects/butak-panderman.png",
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/AqilulMuttaqin/proyek1.git",
      confidential: false,
    },
  ];

  // Update display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2); // Tablet
      } else {
        setDisplayCount(3); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, displayCount);

  return (
    <div id="project" className="flex justify-center min-h-svh bg-white py-16">
      <div className="flex flex-col items-center justify-center text-center max-w-screen-lg mx-auto px-4 w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-900 to-cyan-800 bg-clip-text text-transparent">
            Projects
          </p>
          <div className="mt-1 flex flex-col items-center space-y-1">
            <div className="w-15 h-1 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-800 my-4">
          Projects I've built throughout my learning journey. Each project
          represents a unique challenge and an opportunity to grow my skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
            >
              {/* Confidential Badge - hanya badge tanpa overlay */}
              {project.confidential && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full flex items-center shadow-md">
                    <FaLock className="mr-1 text-xs" /> Confidential
                  </span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-cyan-800 text-white text-xs font-medium rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg text-start font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-start text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4 text-start">
                  <h4 className="text-xs font-semibold text-gray-700 mb-1">
                    Key Features:
                  </h4>
                  <ul className="text-xs text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-1">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded shadow text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status Confidential - tambahan teks informasi */}
                {/* {project.confidential && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center text-red-700">
                      <FaLock className="mr-2 text-sm" />
                      <span className="text-xs font-medium">
                        Confidential Project
                      </span>
                    </div>
                    <p className="text-xs text-red-600 mt-1">
                      Details cannot be publicly shared due to NDA
                    </p>
                  </div>
                )} */}

                {/* Bagian tombol yang selalu rata di bawah */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    {project.confidential ? (
                      <>
                        <span className="flex items-center text-gray-400 text-sm cursor-not-allowed">
                          <FaExternalLinkAlt className="mr-1 text-xs" /> Live
                          Demo
                        </span>
                        <span className="flex items-center text-gray-400 text-sm cursor-not-allowed">
                          <FaGithub className="mr-1 text-xs" /> Code
                        </span>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-800 hover:text-cyan-900 text-sm font-medium transition-colors"
                        >
                          <FaExternalLinkAlt className="mr-1 text-xs" /> Live
                          Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-gray-900 text-sm transition-colors"
                        >
                          <FaGithub className="mr-1 text-xs" /> Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > displayCount && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center mt-10 px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 cursor-pointer"
          >
            Show More (+{projects.length - displayCount}){" "}
            <IoIosArrowDown className="inline-block ml-1" />
          </button>
        )}

        {showAll && projects.length > displayCount && (
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center mt-10 px-3 py-1.5 bg-gradient-to-r from-cyan-900 to-cyan-800 text-white text-sm font-normal rounded-lg shadow-md hover:from-cyan-950 hover:to-cyan-900 transition-colors duration-300 cursor-pointer"
          >
            Show Less <IoIosArrowUp className="inline-block ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
