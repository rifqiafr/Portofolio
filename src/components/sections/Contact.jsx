import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const now = new Date();

    const formattedTime = now.toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const timeInput = formRef.current.querySelector('input[name="time"]');

    if (timeInput) {
      timeInput.value = formattedTime;
    }

    emailjs
      .sendForm("service_ulq0nvr", "template_34rlvaq", formRef.current, {
        publicKey: "3FpDRNrpAzF3MqxS8",
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((err) => {
        setLoading(false);
        setError(true);

        console.log("EMAILJS ERROR:", err);
        console.log("STATUS:", err.status);
        console.log("TEXT:", err.text);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-8 lg:py-4 overflow-y-auto lg:overflow-hidden bg-white dark:bg-[#0f172a] transition-colors"
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle title="Contact" highlight="Me" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-6 lg:mt-8 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Siap untuk Bekerja Sama
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
              Jangan ragu untuk menghubungi saya untuk kolaborasi, proyek
              freelance, atau sekadar menyapa.
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shadow-md">
                  <FaEnvelope className="text-sm" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Email
                  </h4>

                  <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                    rifqiaf7@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#023E8A] text-white flex items-center justify-center shadow-md">
                  <FaPhone className="text-sm" />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Phone
                  </h4>

                  <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                    +62 82374233385
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/rifqiafr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="cursor-pointer w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-lg hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A] transition-all duration-200 shadow-sm active:scale-95"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/mrifqiaf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="cursor-pointer w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-lg hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200 shadow-sm active:scale-95"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/rifqiafrnsyah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="cursor-pointer w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-lg hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-200 shadow-sm active:scale-95"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="user_name"
                placeholder="Nama"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-xl px-4 py-2.5 sm:py-3 outline-none focus:border-[#023E8A] dark:focus:border-cyan-400 text-sm text-gray-900 dark:text-white transition-colors"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-xl px-4 py-2.5 sm:py-3 outline-none focus:border-[#023E8A] dark:focus:border-cyan-400 text-sm text-gray-900 dark:text-white transition-colors"
              />

              <input
                type="text"
                name="title"
                placeholder="Judul Pesan"
                required
                className="sm:col-span-2 border border-gray-200 dark:border-white/10 bg-transparent rounded-xl px-4 py-2.5 sm:py-3 outline-none focus:border-[#023E8A] dark:focus:border-cyan-400 text-sm text-gray-900 dark:text-white transition-colors"
              />

              <input type="hidden" name="time" />

              <textarea
                name="message"
                rows="3"
                placeholder="Pesan"
                required
                className="sm:col-span-2 border border-gray-200 dark:border-white/10 bg-transparent rounded-xl px-4 py-2.5 sm:py-3 outline-none focus:border-[#023E8A] dark:focus:border-cyan-400 resize-none text-sm text-gray-900 dark:text-white transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer mt-4 bg-[#023E8A] text-white px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#023E8A]/90 active:scale-95 text-sm font-semibold transition duration-200 shadow-md disabled:opacity-60"
            >
              {loading ? "Sending..." : "Kirim Pesan"}
            </button>

            {success && (
              <p className="mt-3 text-sm text-green-600 font-semibold">
                Pesan Anda berhasil dikirim.
              </p>
            )}

            {error && (
              <p className="mt-3 text-sm text-red-500 font-semibold">
                Gagal mengirim pesan. Silakan coba lagi.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;