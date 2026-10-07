import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FiCode, FiCpu, FiLayout, FiMail } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

import kii from "../../assets/images/kiaf4.webp";

function Hero({ onNavigate }) {
  const focusAreas = [
    { label: "Frontend Development", icon: FiCode },
    { label: "Machine Learning", icon: FiCpu },
    { label: "Desain Grafis", icon: FiLayout },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-[#f8fafc] dark:bg-[#020617] transition-colors"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Subtle Top-Left Ambient Glow */}
        <div className="absolute -top-32 -left-28 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12)_0%,rgba(34,211,238,0.02)_50%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(34,211,238,0.15)_0%,transparent_65%)]" />

        {/* Subtle Bottom-Right Ambient Glow */}
        <div className="absolute -bottom-36 -right-28 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(2,62,138,0.14)_0%,rgba(2,62,138,0.03)_55%,transparent_75%)] dark:bg-[radial-gradient(circle,rgba(2,62,138,0.22)_0%,transparent_70%)]" />

        {/* Crisp Geometric Grid Texture */}
        <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]" />

        {/* Soft Vignette Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#f8fafc_95%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,#020617_95%)]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen lg:min-h-0 w-full max-w-7xl items-center px-5 py-20 lg:py-4 sm:px-8 md:px-12 lg:px-16 my-auto">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN: HERO COPY & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 min-w-0 lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status / Role Tag */}
            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Informatika &bull; Web &amp; Machine Learning
              </span>
            </div>

            {/* MOBILE PORTRAIT IMAGE (visible only on mobile/tablet) */}
            <div className="mb-10 flex w-full justify-center lg:hidden">
              <div className="relative w-full max-w-[270px] min-[390px]:max-w-[290px] sm:max-w-[320px]">
                {/* Layered aura glow */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-gradient-to-br from-[#023E8A]/25 to-cyan-400/25 blur-xl opacity-70" />

                {/* Secondary rotated glass backing */}
                <div className="absolute inset-0 rotate-2 rounded-[28px] border border-slate-200/60 bg-white/40 dark:border-white/10 dark:bg-white/[0.03] backdrop-blur-md" />

                {/* Status Badge Top-Left */}
                <div className="absolute -left-2 top-4 z-20 sm:-left-4 sm:top-6">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/90 bg-white/95 px-2.5 py-1.5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 sm:px-3 sm:py-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#023E8A]/10 text-[#023E8A] dark:bg-cyan-500/15 dark:text-cyan-400">
                      <FiCode className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800 dark:text-white sm:text-xs">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Badge Bottom-Right */}
                <div className="absolute -right-2 bottom-4 z-20 sm:-right-4 sm:bottom-6">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/90 bg-white/95 px-2.5 py-1.5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 sm:px-3 sm:py-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-600 dark:bg-[#023E8A]/25 dark:text-cyan-300">
                      <FiCpu className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800 dark:text-white sm:text-xs">
                        Machine Learning
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Photo Card */}
                <div className="relative rounded-[28px] border border-white/80 bg-white/70 p-2 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
                  <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                    <img
                      src={kii}
                      alt="Muhamad Rifqi Afriansyah"
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.12]">
              Halo, Saya{" "}
              <span className="bg-gradient-to-r from-[#023E8A] via-[#0077b6] to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400">
                Rifqi
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-relaxed">
              Lulusan Informatika yang berfokus pada pengembangan antarmuka web modern, eksplorasi machine learning, dan perancangan desain visual yang fungsional.
            </p>

            {/* Focus Area Badges (Clean static pill list, anti-slop) */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                Fokus Keahlian
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:border-[#023E8A]/40 hover:text-[#023E8A] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300 sm:text-sm"
                  >
                    <Icon className="text-sm text-[#023E8A] dark:text-cyan-400 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("contact");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#023E8A] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-md shadow-[#023E8A]/20 transition duration-200 hover:bg-[#0077b6] hover:shadow-lg hover:shadow-[#023E8A]/30 active:scale-[0.98]"
              >
                <FiMail className="text-base" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href="/cv/CV-MuhamadRifqiAfriansyah-07.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/80 active:scale-[0.98]"
              >
                <HiDownload className="text-base text-cyan-600 dark:text-cyan-400" />
                <span>Unduh CV</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DESKTOP EDITORIAL PORTRAIT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="order-2 hidden min-w-0 lg:col-span-5 lg:flex justify-end"
          >
            <div className="relative w-full max-w-[340px] xl:max-w-[380px]">
              {/* Layered aura glow */}
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[36px] bg-gradient-to-br from-[#023E8A]/25 to-cyan-400/25 blur-2xl opacity-70" />

              {/* Secondary rotated glass backing */}
              <div className="absolute inset-0 rotate-3 rounded-[36px] border border-slate-200/60 bg-white/40 dark:border-white/10 dark:bg-white/[0.03] backdrop-blur-md transition duration-500 hover:rotate-2" />

              {/* Floating Badge Top-Left */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-7 top-10 z-20 cursor-default"
              >
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/90 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#023E8A]/10 text-[#023E8A] dark:bg-cyan-500/15 dark:text-cyan-400">
                    <FiCode className="text-xl" />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                      Web Developer
                    </p>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      Modern Frontend
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Bottom-Right */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="absolute -right-7 bottom-10 z-20 cursor-default"
              >
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/90 bg-white/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:bg-[#023E8A]/25 dark:text-cyan-300">
                    <FiCpu className="text-xl" />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-sm font-bold text-slate-800 dark:text-white">
                      Machine Learning
                    </p>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      AI &amp; Data Models
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main Photo Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[36px] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="relative overflow-hidden rounded-[28px] aspect-[4/5] bg-slate-100 dark:bg-slate-800">
                  <img
                    src={kii}
                    alt="Muhamad Rifqi Afriansyah"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <a
        href="#about"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate("about");
          }
        }}
        aria-label="Gulir ke bagian Tentang Saya"
        className="absolute bottom-5 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-sm text-slate-600 shadow-sm backdrop-blur-sm transition duration-200 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white sm:bottom-8 sm:h-11 sm:w-11"
      >
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Hero;
