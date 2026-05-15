import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import kiafImg from "../../assets/images/kiaf.png";

function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-16 py-24 dark:bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-[#023E8A] rounded-3xl"></div>

              <img
                src={kiafImg}
                alt="about"
                className="relative w-[500px] md:w-[580px] rounded-3xl object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >


            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-base md:text-lg">
              Lulusan Informatika dengan minat dan kemampuan di bidang desain grafis, frontend development, dan machine learning. Memiliki pemahaman dalam pembuatan desain visual untuk kebutuhan publikasi dan konten digital, pengembangan tampilan website yang responsif, serta pengolahan data dan penerapan model machine learning dasar. Mampu bekerja secara terstruktur, teliti, dan beradaptasi dalam menyelesaikan tugas maupun proyek secara individu maupun tim.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Nama
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Muhamad Rifqi Afriansyah
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  rifqiaf7@gmail.com
                </p>
              </div>

              <div>
  <h4 className="font-semibold text-gray-900 dark:text-white">
    Pendidikan S1 Informatika
  </h4>

  <div className="text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
    <p>Universitas Bengkulu (2021 - 2025)</p>
    <p>IPK: 3.79 / 4.00</p>
  </div>
</div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                 Ketersediaan
                </h4>
                <p className="text-green-600 mt-1">Siap untuk bekerja</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;