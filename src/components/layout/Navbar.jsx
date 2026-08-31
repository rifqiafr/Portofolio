import { useContext, useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    {
      name: "Experiences",
      id: "experience",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Certificates",
      id: "certificate",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop =
          section.offsetTop - 180;

        const sectionHeight =
          section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          mx-auto
          mt-3
          w-[calc(100%-1.5rem)]
          max-w-7xl
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            scrolled || open
              ? `
                bg-white/75
                dark:bg-[#0f172a]/75
                border-white/50
                dark:border-white/10
                backdrop-blur-2xl
                shadow-xl
                shadow-black/10
              `
              : `
                bg-white/45
                dark:bg-[#020617]/45
                border-white/40
                dark:border-white/10
                backdrop-blur-xl
                shadow-lg
                shadow-black/5
              `
          }
        `}
      >
        {/* NAVBAR CONTENT */}
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group shrink-0 text-2xl font-black tracking-tight text-[#023E8A] transition duration-300 hover:scale-105 sm:text-3xl"
          >
            KI
            <span className="text-cyan-500">
              AF
            </span>

            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 ml-1 group-hover:scale-125 transition">
            </span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden xl:flex items-center gap-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] p-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`
                    relative
                    block
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? `
                          bg-white/80
                          text-[#023E8A]
                          shadow-sm
                          dark:bg-white/10
                          dark:text-cyan-400
                        `
                        : `
                          text-gray-700
                          hover:bg-white/60
                          hover:text-[#023E8A]
                          dark:text-gray-200
                          dark:hover:bg-white/10
                          dark:hover:text-cyan-400
                        `
                    }
                  `}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-500" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* DARK MODE */}
            <button
              type="button"
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="
                group
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-white/40
                bg-white/50
                text-lg
                text-gray-800
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:text-[#023E8A]
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
                dark:hover:bg-white/10
                dark:hover:text-cyan-400
              "
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="transition-transform duration-500 group-hover:rotate-90" />
              ) : (
                <FaMoon className="transition-transform duration-500 group-hover:-rotate-12" />
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() =>
                setOpen(!open)
              }
              className="
                group
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-white/40
                bg-white/50
                text-xl
                text-gray-900
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:text-[#023E8A]
                dark:border-white/10
                dark:bg-white/5
                dark:text-white
                dark:hover:bg-white/10
                dark:hover:text-cyan-400
                xl:hidden
              "
              aria-label="Toggle menu"
            >
              {open ? (
                <FaTimes className="transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            xl:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              open
                ? "max-h-[80vh] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-3 mb-3 border-t border-gray-200/60 pt-3 dark:border-white/10">
            
            <div
              className="
                max-h-[65vh]
                overflow-y-auto
                rounded-2xl
                border
                border-white/40
                bg-white/60
                p-2
                shadow-xl
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-[#0f172a]/60
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={`
                    mb-1
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    sm:text-base
                    ${
                      activeSection === item.id
                        ? `
                          bg-[#023E8A]
                          text-white
                          shadow-lg
                          shadow-[#023E8A]/20
                        `
                        : `
                          text-gray-700
                          hover:bg-white/70
                          hover:text-[#023E8A]
                          dark:text-gray-200
                          dark:hover:bg-white/10
                          dark:hover:text-cyan-400
                        `
                    }
                  `}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  )}
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