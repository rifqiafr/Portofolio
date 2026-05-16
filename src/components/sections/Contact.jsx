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
      className="px-6 md:px-10 lg:px-16 py-24 dark:bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact" highlight="Me" />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold leading-snug text-gray-900 dark:text-white">
              Siap untuk Bekerja Sama
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-6">
              Jangan ragu untuk menghubungi saya untuk kolaborasi, proyek
              freelance, atau sekadar menyapa.
            </p>

            <div className="flex flex-col gap-6 mt-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#023E8A] text-white flex items-center justify-center shadow-lg">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    rifqiaf7@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#023E8A] text-white flex items-center justify-center shadow-lg">
                  <FaPhone />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    +62 82374233385
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-5 flex-wrap">
              <a
                href="https://github.com/rifqiafr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-2xl hover:bg-[#023E8A] hover:text-white hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/mrifqiaf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-2xl hover:bg-[#0077B5] hover:text-white hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/rifqiafrnsyah"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white text-2xl hover:bg-pink-500 hover:text-white hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-lg"
          >
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Nama"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-2xl px-5 py-4 outline-none focus:border-[#023E8A] text-gray-900 dark:text-white"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-2xl px-5 py-4 outline-none focus:border-[#023E8A] text-gray-900 dark:text-white"
              />

              <input
                type="text"
                name="title"
                placeholder="Judul Pesan"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-2xl px-5 py-4 outline-none focus:border-[#023E8A] text-gray-900 dark:text-white"
              />

              <input type="hidden" name="time" />

              <textarea
                name="message"
                rows="6"
                placeholder="Pesan"
                required
                className="border border-gray-200 dark:border-white/10 bg-transparent rounded-2xl px-5 py-4 outline-none focus:border-[#023E8A] resize-none text-gray-900 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer mt-8 bg-[#023E8A] text-white px-8 py-4 rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-lg disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="mt-5 text-green-600 font-semibold">
                Pesan Anda berhasil dikirim.
              </p>
            )}

            {error && (
              <p className="mt-5 text-red-500 font-semibold">
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