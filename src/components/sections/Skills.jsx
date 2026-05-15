// src/components/sections/Skills.jsx

import { motion } from "framer-motion";

import {
  FaCode,
  FaPalette,
  FaBrain,
} from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 px-6 md:px-10 lg:px-16 bg-[#f8fafc] dark:bg-[#111827]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-[#023E8A]/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TITLE */}
        <SectionTitle
          title="My"
          highlight="Skills"
        />

        {/* SUBTITLE
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-8 text-lg"
        >
    
        </motion.p> */}

        {/* CATEGORY BADGES
        <div className="flex flex-wrap justify-center gap-5 mt-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg">
            <FaCode className="text-[#023E8A]" />

            <span className="font-medium">
              Development
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg">
            <FaPalette className="text-pink-500" />

            <span className="font-medium">
              Design
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg">
            <FaBrain className="text-cyan-500" />

            <span className="font-medium">
              AI & ML
            </span>
          </div>
        </div> */}

        {/* SKILL GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 mt-20">
          {skills.map(
            (skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  cursor-pointer
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/80
                  dark:bg-white/5
                  backdrop-blur-xl
                  p-7
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-lg
                  hover:shadow-2xl
                  hover:shadow-[#023E8A]/20
                  transition-all
                  duration-500
                "
              >
                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#023E8A]/10 to-cyan-400/10" />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                  }}
                  className="
                    relative
                    z-10
                    w-24
                    h-24
                    rounded-3xl
                    bg-gray-100
                    dark:bg-white/5
                    flex
                    items-center
                    justify-center
                    shadow-inner
                  "
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>

                {/* NAME */}
                <h3 className="relative z-10 mt-6 text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {skill.name}
                </h3>

                {/* BOTTOM LINE */}
                <div className="relative z-10 mt-5 w-10 h-1 rounded-full bg-gradient-to-r from-[#023E8A] to-cyan-400 group-hover:w-20 transition-all duration-500" />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;