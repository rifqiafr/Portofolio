import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import kii from "../../assets/images/kiaf4.webp";

function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-[#f8fafc] dark:bg-[#020617]"
    >
      {/* OPTIMIZED GPU-FRIENDLY AURORA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Base background color */}
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#020617] transition-colors" />

        {/* Primary Aurora Glow (Top Left - Cyan) */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.65, 0.9, 0.65],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 sm:-top-40 sm:-left-28 w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.2)_0%,rgba(34,211,238,0.06)_45%,transparent_70%)] will-change-transform"
        />

        {/* Secondary Aurora Glow (Bottom Right - Deep Navy Blue) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.55, 0.8, 0.55],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-36 -right-36 sm:-bottom-48 sm:-right-40 w-[420px] h-[420px] sm:w-[700px] sm:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(2,62,138,0.25)_0%,rgba(2,62,138,0.08)_50%,transparent_75%)] will-change-transform"
        />

        {/* Center Subtle Highlight */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(34,211,238,0.04)_40%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(34,211,238,0.06)_0%,transparent_70%)]" />

        {/* Grid Overlay */}
        <div
          className="
            absolute inset-0
            opacity-[0.05]
            dark:opacity-[0.06]
            bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:48px_48px]
            sm:bg-[size:72px_72px]
          "
        />

        {/* Vignette mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#f8fafc_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_25%,#020617_90%)]" />

        {/* Floating accent particles */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[14%] h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] sm:right-[18%] sm:top-[18%] sm:h-5 sm:w-5 will-change-transform"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.75, 0.3],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] left-[8%] h-3 w-3 rounded-full bg-[#023E8A] shadow-[0_0_20px_rgba(2,62,138,0.8)] sm:bottom-[20%] sm:left-[14%] sm:h-4 sm:w-4 will-change-transform"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen lg:min-h-0 w-full max-w-7xl items-center px-4 py-20 lg:py-6 sm:px-6 md:px-10 lg:px-16 my-auto">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="order-1 min-w-0"
          >
            <div
              className="
    mb-4
    inline-flex
    max-w-full
    items-center
    gap-2
    rounded-xl
    bg-[#023E8A]/10
    px-3
    py-2
    font-mono
    text-[11px]
    text-[#023E8A]
    shadow-lg
    border
    border-[#023E8A]/10
    sm:px-4
    sm:text-sm

    dark:bg-gray-900
    dark:text-gray-100
    dark:border-white/10
  "
            >
              <span className="shrink-0 text-[#023E8A] dark:text-cyan-400">
                ➜
              </span>

              <span className="truncate">Selamat Datang di Portofolio</span>
            </div>

            {/* MOBILE IMAGE */}
            <div className="mb-10 flex w-full justify-center overflow-hidden lg:hidden">
              <div className="relative group max-w-[280px] min-[390px]:max-w-[310px] sm:max-w-[340px]">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-gradient-to-br from-[#023E8A]/30 to-cyan-400/30 blur-xl opacity-70" />

                <div className="absolute inset-0 rotate-3 rounded-[28px] border border-white/20 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]" />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1 top-10 z-30 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#1e293b] min-[390px]:-left-2 sm:-left-4 sm:top-16 sm:rounded-2xl sm:px-4 sm:py-3"
                >
                  <h3 className="text-[11px] font-bold text-gray-900 dark:text-white sm:text-sm">
                    Programmer
                  </h3>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-7 right-1 z-30 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#1e293b] min-[390px]:-right-2 sm:-right-4 sm:bottom-8 sm:rounded-2xl sm:px-4 sm:py-3"
                >
                  <h3 className="text-[11px] font-bold text-gray-900 dark:text-white sm:text-sm">
                    Design Grafis
                  </h3>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="relative rounded-[28px] border border-white/40 bg-white/70 p-2.5 shadow-xl shadow-[#023E8A]/15 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] sm:rounded-[32px] sm:p-3"
                >
                  <div className="flex items-center gap-2 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <div className="relative overflow-hidden rounded-[22px] sm:rounded-[24px]">
                    <img
                      src={kii}
                      alt="profile"
                      loading="eager"
                      decoding="async"
                      className="w-full rounded-[22px] object-cover transition duration-700 group-hover:scale-105 sm:rounded-[24px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="min-w-0"
            >
              <h1 className="max-w-full text-[clamp(2.25rem,12vw,4.5rem)] font-black leading-[1.08] text-gray-900 dark:text-white lg:text-7xl">
                Halo, Saya{" "}
                <span className="relative inline-block pb-3">
                  <span className="bg-gradient-to-r from-[#023E8A] via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Rifqi
                  </span>

                  {/* Garis bawah */}
                  <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-gray-200 dark:bg-white/10" />

                  {/* Dot berjalan */}
                  <motion.span
                    animate={{ x: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[-2px] left-0 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-full overflow-hidden sm:mt-8 sm:max-w-2xl"
            >
              <p className="mb-5 text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-9 md:text-xl">
                Berfokus pada pengembangan digital melalui:
              </p>

              <div className="relative w-full overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max gap-3 sm:gap-4"
                >
                  {[
                    "Frontend Development",
                    "Machine Learning",
                    "Desain Grafis",
                    "Frontend Development",
                    "Machine Learning",
                    "Desain Grafis",
                  ].map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="whitespace-nowrap rounded-full bg-[#023E8A]/10 px-4 py-2 text-sm font-medium text-[#023E8A] dark:bg-cyan-400/10 dark:text-cyan-400 sm:px-5 sm:text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

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
                delay: 0.5,
              }}
              className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-5"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("contact");
                  }
                }}
                className="w-full cursor-pointer rounded-2xl bg-[#023E8A] px-8 py-4 text-center font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#023E8A]/30 sm:w-auto"
              >
                Contact Me
              </a>

              <a
                href="/cv/CV-MuhamadRifqiAfriansyah-07.pdf"
                download
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 sm:w-auto"
              >
                <HiDownload />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* DESKTOP IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative order-2 hidden min-w-0 justify-end lg:flex"
          >
            <div className="relative group">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40px] bg-gradient-to-br from-[#023E8A]/30 to-cyan-400/30 blur-xl opacity-70 transition duration-500 group-hover:translate-x-8 group-hover:translate-y-8" />

              <div className="absolute inset-0 rotate-3 rounded-[40px] border border-white/20 bg-white/20 backdrop-blur-xl transition duration-500 group-hover:rotate-6 dark:border-white/10 dark:bg-white/[0.03]" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 top-24 z-30 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#1e293b] xl:-left-14"
              >
                <h3 className="text-base font-bold text-gray-900 dark:text-white xl:text-lg">
                  Programmer
                </h3>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 bottom-16 z-30 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#1e293b] xl:-right-14"
              >
                <h3 className="text-base font-bold text-gray-900 dark:text-white xl:text-lg">
                  Design Grafis
                </h3>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -10,
                }}
                className="relative rounded-[40px] border border-white/40 bg-white/70 p-4 shadow-xl shadow-[#023E8A]/15 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]"
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src={kii}
                    alt="profile"
                    loading="eager"
                    decoding="async"
                    className="w-[340px] rounded-[28px] object-cover transition duration-700 group-hover:scale-105 xl:w-[420px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL DOWN */}
      <motion.a
        href="#about"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate("about");
          }
        }}
        aria-label="Buka bagian Tentang Saya"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gray-300 bg-white/50 text-base text-gray-700 backdrop-blur-md transition duration-300 hover:scale-110 dark:border-white/10 dark:bg-white/5 dark:text-white sm:bottom-10 sm:h-14 sm:w-14 sm:text-xl"
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;
