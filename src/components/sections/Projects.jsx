import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import projects from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const categories = ["All", "Web", "Machine Learning", "Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const totalSlides = filteredProjects.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsBeginning(true);
    setIsEnd(false);
  };

  const handleSwiperState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-8 lg:py-4 overflow-y-auto lg:overflow-hidden bg-white dark:bg-[#0f172a] transition-colors"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#023E8A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-3xl" />
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* COMPACT INTEGRATED HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 lg:mb-6">
          <SectionTitle title="My" highlight="Projects" />

          <div className="flex items-center gap-3 flex-wrap">
            {/* FILTER BUTTONS */}
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200/60 dark:border-white/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition duration-200 ${
                    activeCategory === category
                      ? "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="flex items-center gap-2">
              <button
                disabled={isBeginning || totalSlides <= 1}
                aria-label="Previous project"
                className={`
                  project-prev
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-xl
                  border border-gray-200 dark:border-white/10
                  flex items-center justify-center
                  text-sm
                  transition-all duration-200
                  ${
                    isBeginning || totalSlides <= 1
                      ? "bg-gray-100 dark:bg-white/5 text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer bg-white dark:bg-white/5 text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A] shadow-sm active:scale-95"
                  }
                `}
              >
                <FaArrowLeft />
              </button>

              <button
                disabled={isEnd || totalSlides <= 1}
                aria-label="Next project"
                className={`
                  project-next
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-xl
                  border border-gray-200 dark:border-white/10
                  flex items-center justify-center
                  text-sm
                  transition-all duration-200
                  ${
                    isEnd || totalSlides <= 1
                      ? "bg-gray-100 dark:bg-white/5 text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer bg-white dark:bg-white/5 text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A] shadow-sm active:scale-95"
                  }
                `}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT SWIPER */}
        <div className="w-full">
          <Swiper
            key={activeCategory}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".project-next",
              prevEl: ".project-prev",
            }}
            loop={false}
            speed={600}
            onInit={handleSwiperState}
            onSlideChange={handleSwiperState}
            onReachBeginning={(swiper) => handleSwiperState(swiper)}
            onReachEnd={(swiper) => handleSwiperState(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-2 overflow-hidden"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={`${project.title}-${index}`} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    h-full
                    flex
                    flex-col
                    bg-white/80
                    dark:bg-white/[0.04]
                    backdrop-blur-xl
                    border
                    border-gray-200
                    dark:border-white/10
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    hover:border-[#023E8A]/40
                    transition
                    duration-300
                  "
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-400/10 via-transparent to-[#023E8A]/10 pointer-events-none" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 dark:bg-black/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* GITHUB */}
                    {project.github && project.category !== "Design" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Github Repository"
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 active:scale-95 transition"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:scale-105 active:scale-95 transition"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-300 font-medium">
                        {project.category}
                      </span>

                      <h3 className="text-base sm:text-lg font-bold mt-2 text-gray-900 dark:text-white line-clamp-1 group-hover:text-[#023E8A] dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                        {project.Description || project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech?.slice(0, 2).map((tech, i) => (
                          <span
                            key={i}
                            className="
                              px-2.5
                              py-1
                              rounded-lg
                              bg-gray-100
                              dark:bg-white/5
                              text-[11px]
                              text-gray-700
                              dark:text-gray-300
                            "
                          >
                            {tech}
                          </span>
                        ))}

                        {project.tech?.length > 2 && (
                          <span className="px-2 py-1 rounded-lg bg-[#023E8A]/10 text-[#023E8A] text-[11px] font-semibold">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-medium text-[#023E8A] dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        Detail &rarr;
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
                active:scale-95
                transition
              "
            >
              ✕
            </button>

            <div className="relative p-4 md:p-5 bg-gray-50 dark:bg-white/[0.03]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100 dark:bg-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-[16/9] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

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

              <div className="flex flex-wrap gap-5 mt-10">
                {selectedProject.github &&
                  selectedProject.category !== "Design" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-4 rounded-2xl bg-[#023E8A] text-white font-semibold hover:scale-105 active:scale-95 transition"
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