import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

function ExperienceModal({
  experience,
  setSelectedExperience,
}) {
  return (
    <div className="fixed inset-0 z-99999 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 md:px-6 py-6 md:py-10">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.3,
        }}
        className="bg-white dark:bg-[#1e293b] max-w-5xl w-full rounded-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() =>
            setSelectedExperience(null)
          }
          className="absolute top-4 right-4 z-30 bg-white/80 dark:bg-black/50 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaTimes className="text-black dark:text-white" />
        </button>

        {/* IMAGE SLIDER */}
        <div className="bg-black">
          <Swiper
            // modules={[Autoplay]}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            observer={true}
            observeParents={true}
            loop={true}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
          >
            {experience.images.map(
              (image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={experience.title}
                    className="w-full aspect-video object-cover object-center"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-10">
          {/* YEAR */}
          <span className="text-sm bg-[#023E8A]/10 text-[#023E8A] px-4 py-1 rounded-full">
            {experience.year}
          </span>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-black mt-5 leading-tight">
            {experience.title}
          </h2>

          {/* COMPANY */}
          <p className="text-[#023E8A] font-semibold mt-3 text-lg">
            {experience.company}
          </p>

          {/* LOCATION */}
          <p className="text-gray-500 mt-1">
            {experience.location}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 leading-8 mt-6">
            {experience.fullDesc}
          </p>

          {/* RESPONSIBILITIES */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-5">
              Responsibilities
            </h3>

            <ul className="space-y-4">
              {experience.responsibilities.map(
                (
                  responsibility,
                  index
                ) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-600 dark:text-gray-300 leading-7"
                  >
                    <span className="text-[#023E8A] mt-1">
                      •
                    </span>

                    <span>
                      {responsibility}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* TECH STACK */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-5">
              Skills & Tools
            </h3>

            <div className="flex flex-wrap gap-3">
              {experience.tech.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#023E8A]/10 text-[#023E8A] text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceModal;