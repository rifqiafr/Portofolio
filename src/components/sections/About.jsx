import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import kiafImg from "../../assets/images/kiaf.png";

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden dark:bg-[#0f172a] transition-colors"
    >
      <div className="max-w-6xl mx-auto w-full my-auto">
        <SectionTitle title="About" highlight="Me" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6 lg:mt-8">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#023E8A] rounded-3xl" />

              <img
                src={kiafImg}
                alt="about"
                loading="eager"
                decoding="async"
                className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] max-h-[380px] rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              Lulusan Informatika dengan minat dan kemampuan di bidang desain grafis, frontend development, dan machine learning. Memiliki pemahaman dalam pembuatan desain visual untuk kebutuhan publikasi dan konten digital, pengembangan tampilan website yang responsif, serta pengolahan data dan penerapan model machine learning dasar. Mampu bekerja secara terstruktur, teliti, dan beradaptasi dalam menyelesaikan tugas maupun proyek secara individu maupun tim.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Nama
                </h4>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">
                  Muhamad Rifqi Afriansyah
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email
                </h4>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">
                  rifqiaf7@gmail.com
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Pendidikan
                </h4>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mt-1 leading-snug">
                  <p>S1 Informatika, Univ. Bengkulu</p>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">IPK: 3.79 / 4.00</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Ketersediaan
                </h4>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Siap untuk bekerja
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;