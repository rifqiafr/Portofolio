import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import projects from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web", "Machine Learning", "Design"];

  // FILTER PROJECT
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // PAGINATION
  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-[#0f172a] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* BLUR TOP */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#023E8A]/10 rounded-full blur-3xl"
        />

        {/* BLUR BOTTOM */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-3xl"
        />

        {/* GRID */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            dark:opacity-[0.05]
            bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* CENTER LIGHT */}
        <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/5 rounded-full blur-[120px]" />

        {/* SMALL GLOW */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[18%] w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)]"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full bg-[#023E8A] shadow-[0_0_25px_rgba(2,62,138,0.8)]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <SectionTitle title="My" highlight="Projects" />

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer px-6 py-3 rounded-2xl font-medium transition duration-300 ${
                activeCategory === category
                  ? "bg-[#023E8A] text-white shadow-lg shadow-[#023E8A]/30"
                  : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-[#023E8A] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* NAVIGATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between gap-4 mt-14 mb-10">
            {/* PAGE INFO */}
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
              Page{" "}
              <span className="text-[#023E8A] font-bold">
                {currentPage}
              </span>{" "}
              of {totalPages}
            </div>

            <div className="flex items-center gap-4">
              {/* PREV */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`
                  cursor-pointer
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  dark:bg-white/5
                  border
                  border-gray-200
                  dark:border-white/10
                  flex
                  items-center
                  justify-center
                  text-xl
                  shadow-lg
                  transition-all
                  duration-300
                  ${
                    currentPage === 1
                      ? "text-gray-400 opacity-50 cursor-not-allowed"
                      : "text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#023E8A]/30"
                  }
                `}
              >
                <FaArrowLeft />
              </button>

              {/* NEXT */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`
                  cursor-pointer
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  dark:bg-white/5
                  border
                  border-gray-200
                  dark:border-white/10
                  flex
                  items-center
                  justify-center
                  text-xl
                  shadow-lg
                  transition-all
                  duration-300
                  ${
                    currentPage === totalPages
                      ? "text-gray-400 opacity-50 cursor-not-allowed"
                      : "text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#023E8A]/30"
                  }
                `}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {currentProjects.map((project, index) => (
            <motion.div
              key={`${activeCategory}-${currentPage}-${index}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                relative
                bg-white/80
                dark:bg-white/[0.04]
                backdrop-blur-xl
                border
                border-gray-200
                dark:border-white/10
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-cyan-500/10
                transition
                duration-500
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-[#023E8A]/10 pointer-events-none" />

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* GITHUB */}
                {project.github && project.category !== "Design" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6 h-60 flex flex-col">
                {/* CATEGORY */}
                <span className="w-fit text-sm px-4 py-1 rounded-full bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-300">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white line-clamp-2 leading-snug">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-6 line-clamp-2">
                  {project.Description || project.description}
                </p>

                {/* TECH */}
                <div className="mt-auto h-[44px] overflow-hidden">
                  <div className="flex flex-nowrap gap-2 overflow-hidden">
                    {project.tech?.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="
                          shrink-0
                          px-4
                          py-2
                          rounded-full
                          bg-gray-100
                          dark:bg-white/5
                          text-sm
                          text-gray-700
                          dark:text-gray-300
                          whitespace-nowrap
                        "
                      >
                        {tech}
                      </span>
                    ))}

                    {project.tech?.length > 2 && (
                      <span className="shrink-0 px-4 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-semibold whitespace-nowrap">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DI LUAR WRAPPER z-10 */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          {/* BACKDROP */}
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0"
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              z-[1000000]
              bg-white
              dark:bg-[#111827]
              rounded-3xl
              max-w-4xl
              w-full
              overflow-y-auto
              max-h-[85vh]
              border
              border-gray-200
              dark:border-white/10
              shadow-2xl
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="
                cursor-pointer
                absolute
                top-7
                right-7
                z-[1000001]
                w-11
                h-11
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                text-xl
                hover:bg-[#023E8A]
                hover:scale-110
                transition
              "
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative p-4 md:p-5 bg-gray-50 dark:bg-white/[0.03]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100 dark:bg-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-[16/9] object-cover"
                />

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 md:p-8">
              <span className="px-4 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-semibold">
                {selectedProject.category}
              </span>

              <h2 className="text-3xl md:text-4xl font-black mt-6 text-gray-900 dark:text-white leading-tight">
                {selectedProject.title}
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-base md:text-lg">
                {selectedProject.description || selectedProject.Description}
              </p>

              {/* TECH MODAL */}
              {selectedProject.tech?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* BUTTON */}
              <div className="flex flex-wrap gap-5 mt-10">
                {selectedProject.github &&
                  selectedProject.category !== "Design" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-4 rounded-2xl bg-[#023E8A] text-white font-semibold hover:scale-105 transition"
                    >
                      <FaGithub className="inline mr-2" />
                      View Github
                    </a>
                  )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;