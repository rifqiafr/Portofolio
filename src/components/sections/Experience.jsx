// src/components/sections/Experience.jsx

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  FaBriefcase,
  FaUsers,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import experiences from "../../data/experiences";
import SectionTitle from "../ui/SectionTitle";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeTab, setActiveTab] = useState("work");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filteredExperiences = experiences.filter(
    (item) => item.category === activeTab
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsBeginning(true);
    setIsEnd(false);
  };

  const handleSwiperState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-8 lg:py-0 overflow-y-auto lg:overflow-hidden bg-white dark:bg-[#0f172a] transition-colors"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        {/* HEADER ROW WITH TITLE, TABS & NAV CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 lg:mb-6">
          <SectionTitle title="My" highlight="Experience" />

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* TAB BUTTON */}
            <div className="flex items-center p-1 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
              <button
                onClick={() => handleTabChange("work")}
                className={`cursor-pointer flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeTab === "work"
                    ? "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/25"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#023E8A]"
                }`}
              >
                <FaBriefcase className="text-xs" />
                <span>Kerja</span>
              </button>

              <button
                onClick={() => handleTabChange("organization")}
                className={`cursor-pointer flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeTab === "organization"
                    ? "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/25"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#023E8A]"
                }`}
              >
                <FaUsers className="text-xs" />
                <span>Organisasi</span>
              </button>
            </div>

            {/* NAVIGATION ARROWS */}
            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                disabled={isBeginning || filteredExperiences.length <= 1}
                className={`
                  w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-sm shadow-sm transition
                  ${
                    isBeginning || filteredExperiences.length <= 1
                      ? "text-gray-400 opacity-40 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white"
                  }
                `}
                aria-label="Slide sebelumnya"
              >
                <FaArrowLeft />
              </button>

              <button
                ref={nextRef}
                disabled={isEnd || filteredExperiences.length <= 1}
                className={`
                  w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-sm shadow-sm transition
                  ${
                    isEnd || filteredExperiences.length <= 1
                      ? "text-gray-400 opacity-40 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white"
                  }
                `}
                aria-label="Slide berikutnya"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SLIDER */}
        <div className="w-full overflow-hidden">
          <Swiper
            key={activeTab}
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={false}
            speed={1000}
            spaceBetween={20}
            onInit={handleSwiperState}
            onSlideChange={handleSwiperState}
            onReachBeginning={(swiper) => handleSwiperState(swiper)}
            onReachEnd={(swiper) => handleSwiperState(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="pb-2 overflow-hidden"
          >
            {filteredExperiences.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200/80
                    dark:border-white/10
                    bg-white
                    dark:bg-white/5
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1.5
                    transition-all
                    duration-300
                    flex
                    flex-col
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[16/9] max-h-[175px]">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={item.images?.length > 1}
                      speed={1000}
                      slidesPerView={1}
                      className="h-full"
                    >
                      {item.images?.map((image, imageIndex) => (
                        <SwiperSlide key={imageIndex} className="h-full">
                          <img
                            src={image}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="w-fit px-3 py-0.5 rounded-full bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-400 text-xs font-semibold">
                        {item.year}
                      </span>

                      <h3 className="text-base font-bold mt-2.5 text-gray-900 dark:text-white leading-snug line-clamp-1">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#023E8A] dark:text-cyan-300 font-semibold truncate">
                        {item.company}
                      </p>

                      <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3">
                      <div className="flex flex-nowrap gap-1.5 overflow-hidden">
                        {item.tech?.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="
                              shrink-0
                              px-2.5
                              py-1
                              rounded-lg
                              bg-gray-100
                              dark:bg-white/5
                              text-[11px]
                              text-gray-700
                              dark:text-gray-300
                              whitespace-nowrap
                            "
                          >
                            {tech}
                          </span>
                        ))}

                        {item.tech?.length > 2 && (
                          <span className="shrink-0 px-2.5 py-1 rounded-lg bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-300 text-[11px] font-semibold whitespace-nowrap">
                            +{item.tech.length - 2}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedExperience(item)}
                        className="
                          cursor-pointer
                          mt-3.5
                          w-full
                          py-2.5
                          rounded-xl
                          bg-[#023E8A]
                          text-white
                          text-xs
                          font-semibold
                          transition-all
                          duration-200
                          hover:bg-[#0353a4]
                          active:scale-95
                        "
                      >
                        View Details
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
      {selectedExperience && (
        <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          <div
            onClick={() => setSelectedExperience(null)}
            className="absolute inset-0"
          />

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
              max-h-[85vh]
              overflow-y-auto
              border
              border-gray-200
              dark:border-white/10
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedExperience(null)}
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
                text-2xl
                hover:bg-[#023E8A]
                transition
              "
            >
              ×
            </button>

            <div className="relative p-4 md:p-5 bg-gray-50 dark:bg-white/[0.03]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100 dark:bg-white/5">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={selectedExperience.images?.length > 1}
                  speed={900}
                  slidesPerView={1}
                  className="rounded-2xl"
                >
                  {selectedExperience.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={selectedExperience.title}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="p-7 md:p-8">
              <span className="inline-block px-5 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-semibold">
                {selectedExperience.year}
              </span>

              <h2 className="mt-5 text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                {selectedExperience.title}
              </h2>

              <p className="mt-3 text-[#023E8A] font-bold text-lg">
                {selectedExperience.company}
              </p>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8 text-base md:text-lg">
                {selectedExperience.description}
              </p>

              {selectedExperience.tech?.length > 0 && (
                <div className="mt-7">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Skills / Tools
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedExperience.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Experience;