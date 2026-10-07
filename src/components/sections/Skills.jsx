import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-10 lg:py-0 overflow-y-auto lg:overflow-hidden bg-[#f8fafc] dark:bg-[#111827] transition-colors"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-[#023E8A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        {/* TITLE */}
        <SectionTitle
          title="My"
          highlight="Skills"
        />

        {/* SKILL GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 lg:gap-4 mt-6 lg:mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                cursor-pointer
                rounded-2xl
                border
                border-gray-200/80
                dark:border-white/10
                bg-white/80
                dark:bg-white/5
                backdrop-blur-md
                p-4 sm:p-5
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-sm
                hover:shadow-xl
                hover:shadow-[#023E8A]/15
                transition-all
                duration-300
              "
            >
              {/* HOVER GRADIENT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#023E8A]/10 to-cyan-400/10 pointer-events-none" />

              {/* ICON */}
              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.08,
                }}
                className="
                  relative
                  z-10
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-2xl
                  bg-gray-50
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
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                />
              </motion.div>

              {/* NAME */}
              <h3 className="relative z-10 mt-3 text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug truncate w-full">
                {skill.name}
              </h3>

              {/* BOTTOM ACCENT BAR */}
              <div className="relative z-10 mt-2.5 w-6 h-1 rounded-full bg-gradient-to-r from-[#023E8A] to-cyan-400 group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;