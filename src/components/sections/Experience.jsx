// src/components/sections/Experience.jsx

import { useState } from "react";

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

  // FILTER
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
      className="relative overflow-hidden py-32 px-6 md:px-10 lg:px-16 bg-white dark:bg-[#0f172a]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <SectionTitle title="My" highlight="Experience" />

        {/* TAB BUTTON */}
        <div className="flex items-center justify-center gap-5 mt-14 flex-wrap">
          {/* WORK */}
          <button
            onClick={() => handleTabChange("work")}
            className={`cursor-pointer flex items-center gap-3 px-7 py-3 rounded-2xl transition duration-300 ${
              activeTab === "work"
                ? "bg-[#023E8A] text-white shadow-lg shadow-[#023E8A]/30"
                : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
            }`}
          >
            <FaBriefcase />
            Pengalaman Kerja
          </button>

          {/* ORGANIZATION */}
          <button
            onClick={() => handleTabChange("organization")}
            className={`cursor-pointer flex items-center gap-3 px-7 py-3 rounded-2xl transition duration-300 ${
              activeTab === "organization"
                ? "bg-[#023E8A] text-white shadow-lg shadow-[#023E8A]/30"
                : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
            }`}
          >
            <FaUsers />
            Organisasi
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-end gap-4 mt-14 mb-10">
          <div className="flex items-center gap-4">
            {/* PREV */}
            <button
              disabled={isBeginning}
              className={`
                experience-prev
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
                  isBeginning
                    ? "text-gray-400 opacity-50 cursor-not-allowed"
                    : "text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#023E8A]/30"
                }
              `}
            >
              <FaArrowLeft />
            </button>

            {/* NEXT */}
            <button
              disabled={isEnd}
              className={`
                experience-next
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
                  isEnd
                    ? "text-gray-400 opacity-50 cursor-not-allowed"
                    : "text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#023E8A]/30"
                }
              `}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* EXPERIENCE SLIDER */}
        <div>
          <Swiper
            key={activeTab}
            modules={[Navigation]}
            navigation={{
              nextEl: ".experience-next",
              prevEl: ".experience-prev",
            }}
            loop={false}
            speed={1000}
            spaceBetween={30}
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
            className="pb-10"
          >
            {filteredExperiences.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-white/5
                    shadow-lg
                    hover:-translate-y-3
                    transition-all
                    duration-500
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={item.images?.length > 1}
                      speed={1000}
                      slidesPerView={1}
                    >
                      {item.images?.map((image, imageIndex) => (
                        <SwiperSlide key={imageIndex}>
                          <img
                            src={image}
                            alt={item.title}
                            className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition duration-700"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 h-[470px] flex flex-col">
                    {/* YEAR */}
                    <span className="w-fit px-4 py-1 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-medium">
                      {item.year}
                    </span>

                    {/* TITLE */}
                    <h3
                      className="text-2xl font-black mt-5 text-gray-900 dark:text-white leading-snug overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* COMPANY */}
                    <p className="mt-2 text-[#023E8A] font-semibold truncate">
                      {item.company}
                    </p>

                    {/* DESC */}
                    <div className="mt-5 mb-6 h-[112px] overflow-hidden">
                      <p
                        className="text-gray-600 dark:text-gray-300 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          lineHeight: "1.9rem",
                          paddingBottom: "8px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* SPACER */}
                    <div className="flex-1" />

                    {/* TECH */}
                    <div className="pt-3 h-[58px] overflow-hidden">
                      <div className="flex flex-nowrap gap-2 overflow-hidden">
                        {item.tech?.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
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

                        {item.tech?.length > 2 && (
                          <span className="shrink-0 px-4 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-semibold whitespace-nowrap">
                            +{item.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => setSelectedExperience(item)}
                      className="cursor-pointer mt-6 w-full py-4 rounded-2xl bg-[#023E8A] text-white font-semibold hover:scale-[1.02] transition duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL DI LUAR WRAPPER z-10 */}
      {selectedExperience && (
        <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
          {/* BACKDROP */}
          <div
            onClick={() => setSelectedExperience(null)}
            className="absolute inset-0"
          />

          {/* MODAL CONTENT */}
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
            {/* CLOSE BUTTON */}
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

            {/* IMAGE SLIDER */}
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

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="p-7 md:p-8">
              {/* YEAR */}
              <span className="inline-block px-5 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-semibold">
                {selectedExperience.year}
              </span>

              {/* TITLE */}
              <h2 className="mt-5 text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                {selectedExperience.title}
              </h2>

              {/* COMPANY */}
              <p className="mt-3 text-[#023E8A] font-bold text-lg">
                {selectedExperience.company}
              </p>

              {/* DESCRIPTION FULL */}
              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8 text-base md:text-lg">
                {selectedExperience.description}
              </p>

              {/* TECH MODAL */}
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