import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaGithub, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* MODAL WINDOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative
                z-10
                bg-white/95
                dark:bg-[#0b1120]/95
                backdrop-blur-2xl
                rounded-3xl
                max-w-5xl
                w-full
                max-h-[90vh]
                overflow-hidden
                border
                border-slate-200/80
                dark:border-white/10
                shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]
                dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]
                flex
                flex-col
              "
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-300 text-xs font-semibold tracking-wide uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-500">
                    Project Details
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="
                    cursor-pointer
                    w-8 h-8 sm:w-9 sm:h-9
                    rounded-full
                    bg-slate-100
                    dark:bg-white/10
                    text-slate-600
                    dark:text-slate-300
                    hover:bg-red-500
                    hover:text-white
                    dark:hover:bg-red-500
                    dark:hover:text-white
                    flex
                    items-center
                    justify-center
                    text-sm
                    transition-all
                    duration-200
                    active:scale-90
                  "
                >
                  <FaTimes />
                </button>
              </div>

              {/* 2-COLUMN SPLIT CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto max-h-[calc(90vh-65px)]">
                {/* LEFT: MEDIA SHOWCASE (5 COLS) */}
                <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/80 dark:bg-black/20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5">
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-md bg-slate-900 aspect-[16/10] sm:aspect-[16/11]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {selectedProject.github && selectedProject.category !== "Design" && (
                    <div className="mt-5 hidden lg:block">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2.5
                          w-full
                          py-3
                          px-5
                          rounded-xl
                          bg-[#023E8A]
                          text-white
                          text-sm
                          font-semibold
                          shadow-lg
                          shadow-[#023E8A]/25
                          hover:bg-[#0353a4]
                          hover:scale-[1.02]
                          active:scale-[0.98]
                          transition
                          duration-200
                        "
                      >
                        <FaGithub className="text-base" />
                        <span>Source Code Repository</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* RIGHT: DETAILS & STACK (7 COLS) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h2>

                    <div className="mt-4">
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        {selectedProject.description || selectedProject.Description}
                      </p>
                    </div>

                    {selectedProject.tech?.length > 0 && (
                      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                          Teknologi & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="
                                px-3
                                py-1.5
                                rounded-lg
                                bg-slate-100
                                dark:bg-white/5
                                border
                                border-slate-200/60
                                dark:border-white/10
                                text-xs
                                font-medium
                                text-slate-700
                                dark:text-slate-300
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MOBILE GITHUB ACTION IF AVAILABLE */}
                  {selectedProject.github && selectedProject.category !== "Design" && (
                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-end lg:hidden">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          py-2.5
                          px-4
                          rounded-xl
                          bg-[#023E8A]
                          text-white
                          text-xs
                          font-semibold
                          shadow-md
                          hover:bg-[#0353a4]
                          active:scale-95
                          transition
                        "
                      >
                        <FaGithub />
                        <span>Github</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;