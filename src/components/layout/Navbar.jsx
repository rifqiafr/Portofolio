import { useContext, useEffect, useState } from "react";

import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experiences", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificate" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999999] w-full">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled || open
            ? "bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-md"
            : "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="shrink-0 text-2xl font-black text-[#023E8A] sm:text-3xl"
          >
            KIAF
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden xl:flex items-center gap-7 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className={`relative whitespace-nowrap text-sm transition ${
                    activeSection === item.id
                      ? "text-[#023E8A]"
                      : "text-black hover:text-[#023E8A] dark:text-white dark:hover:text-cyan-400"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-[#023E8A] transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* DARK MODE */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-lg text-gray-900 transition hover:text-[#023E8A] dark:bg-white/10 dark:text-white dark:hover:text-cyan-400"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-900 transition hover:text-[#023E8A] dark:bg-white/10 dark:text-white dark:hover:text-cyan-400 xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[80vh]" : "max-h-0"
          }`}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-[#0f172a] sm:mx-6">
            <div className="flex max-h-[65vh] flex-col gap-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition sm:text-base ${
                    activeSection === item.id
                      ? "bg-[#023E8A]/10 text-[#023E8A]"
                      : "text-black hover:bg-[#023E8A]/10 hover:text-[#023E8A] dark:text-white dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;