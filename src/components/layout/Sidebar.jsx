import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaCertificate,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

function Sidebar({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navItems = [
    { id: "home", label: "Home", icon: FaHome, subtitle: "Beranda" },
    { id: "about", label: "About Me", icon: FaUser, subtitle: "Profil & Latar Belakang" },
    { id: "skills", label: "Skills", icon: FaCode, subtitle: "Teknologi & Keahlian" },
    { id: "experience", label: "Experience", icon: FaBriefcase, subtitle: "Pengalaman & Riwayat" },
    { id: "projects", label: "Projects", icon: FaLaptopCode, subtitle: "Karya & Portofolio" },
    { id: "certificate", label: "Certificates", icon: FaCertificate, subtitle: "Sertifikasi & Prestasi" },
    { id: "contact", label: "Contact", icon: FaEnvelope, subtitle: "Hubungi Saya" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rifqiafr",
      icon: FaGithub,
      hoverClass: "hover:text-black dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mrifqiaf",
      icon: FaLinkedin,
      hoverClass: "hover:text-[#0077b5]",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rifqiafrnsyah",
      icon: FaInstagram,
      hoverClass: "hover:text-pink-500",
    },
    {
      name: "Email",
      url: "mailto:rifqiaf7@gmail.com",
      icon: FaEnvelope,
      hoverClass: "hover:text-cyan-500",
    },
  ];

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleItemClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const currentNav = navItems.find((item) => item.id === activeSection) || navItems[0];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-white/90 dark:bg-[#0b1329]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 flex items-center justify-between lg:hidden transition-colors duration-300">
        <button
          type="button"
          onClick={() => handleItemClick("home")}
          className="flex items-center gap-1.5 font-black text-xl text-[#023E8A] dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          aria-label="Kembali ke Beranda"
        >
          <span>KI</span>
          <span className="text-cyan-500">AF</span>
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
        </button>

        {/* Current Active Badge in Mobile Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-cyan-300">
          <currentNav.icon className="text-cyan-500 text-xs" />
          <span>{currentNav.label}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Dark Mode Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700/70 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:text-[#023E8A] dark:hover:text-cyan-400 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={darkMode ? "Ganti ke Tema Terang" : "Ganti ke Tema Gelap"}
          >
            {darkMode ? <FaSun className="text-amber-400" /> : <FaMoon />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700/70 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 hover:text-[#023E8A] dark:hover:text-cyan-400 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER BACKDROP & OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-4/5 max-w-xs h-full bg-white dark:bg-[#0b1329] border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Menu Navigasi Mobile"
            >
              {/* Top Header Drawer */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 font-black text-2xl text-[#023E8A] dark:text-white">
                    <span>KI</span>
                    <span className="text-cyan-500">AF</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    aria-label="Tutup menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="py-3">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Navigasi Portofolio
                  </p>
                  <nav className="flex flex-col gap-1.5">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleItemClick(item.id)}
                          className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-left text-sm font-medium transition cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${isActive
                            ? "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/25 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-400/30"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                            }`}
                        >
                          <Icon className={`text-base shrink-0 ${isActive ? "text-cyan-300" : "text-slate-500 dark:text-slate-400"}`} />
                          <div className="flex flex-col">
                            <span className="font-semibold">{item.label}</span>
                            <span className={`text-[11px] ${isActive ? "text-cyan-100 dark:text-cyan-400/80" : "text-slate-400 dark:text-slate-500"}`}>
                              {item.subtitle}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Bottom Drawer Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-xs font-medium text-slate-700 dark:text-slate-300 min-h-[44px] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {darkMode ? <FaSun className="text-amber-400 text-sm" /> : <FaMoon className="text-slate-600 text-sm" />}
                    <span>{darkMode ? "Mode Terang" : "Mode Gelap"}</span>
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700">
                    Ganti
                  </span>
                </button>

                <div className="flex items-center justify-around text-slate-500 dark:text-slate-400">
                  {socialLinks.map((s) => {
                    const SIcon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition ${s.hoverClass} min-h-[44px] min-w-[44px] flex items-center justify-center`}
                        aria-label={s.name}
                      >
                        <SIcon className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* DESKTOP FIXED SIDEBAR */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 xl:w-80 z-30 bg-white/90 dark:bg-[#0b1329]/95 backdrop-blur-xl border-r border-slate-200/80 dark:border-slate-800/80 flex-col justify-between p-6 transition-colors duration-300 select-none"
        aria-label="Navigasi Utama Sidebar"
      >
        {/* Brand & Profile Section */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 dark:border-slate-800/80">
            <button
              type="button"
              onClick={() => handleItemClick("home")}
              className="group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1 cursor-pointer"
            >
              <div className="flex items-center gap-1 text-2xl xl:text-3xl font-black text-[#023E8A] dark:text-white transition duration-300 group-hover:scale-[1.02]">
                <span>Portfolio</span>
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 ml-0.5 group-hover:scale-125 transition" />
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide mt-0.5">
                Muhamad Rifqi Afriansyah
              </span>
            </button>

            {/* Status Dot */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400"
              title="Tersedia untuk proyek & kolaborasi"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 flex flex-col gap-1.5" aria-label="Menu Bagian Portofolio">
            <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Navigasi Halaman
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition duration-200 cursor-pointer min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${isActive
                    ? "bg-[#023E8A] text-white shadow-md shadow-[#023E8A]/25 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-blue-600/20 dark:text-cyan-300 dark:border dark:border-cyan-500/30"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/90 dark:hover:bg-slate-800/60 hover:text-[#023E8A] dark:hover:text-cyan-300"
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition duration-200 ${isActive
                        ? "bg-white/20 text-white dark:bg-cyan-500/30 dark:text-cyan-200"
                        : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#023E8A] dark:bg-slate-800/80 dark:text-slate-400 dark:group-hover:bg-slate-700 dark:group-hover:text-cyan-400"
                        }`}
                    >
                      <Icon className="text-sm" />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold truncate">{item.label}</span>
                      <span
                        className={`text-[10px] truncate ${isActive
                          ? "text-cyan-100/90 dark:text-cyan-300/80 font-normal"
                          : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400"
                          }`}
                      >
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.span
                      layoutId="sidebarActivePill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Area with Theme Toggle and Social Links */}
        <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-col gap-3">
          {/* Dark Mode Switch Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={darkMode ? "Ganti ke Tema Terang" : "Ganti ke Tema Gelap"}
          >
            <span className="flex items-center gap-2.5">
              {darkMode ? (
                <FaSun className="text-amber-400 text-sm" />
              ) : (
                <FaMoon className="text-[#023E8A] text-sm" />
              )}
              <span>{darkMode ? "Mode Terang" : "Mode Gelap"}</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>

          {/* Social Links Row */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              Sosial Media
            </span>
            <div className="flex items-center gap-1">
              {socialLinks.map((s) => {
                const SIcon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-8 w-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${s.hoverClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500`}
                    aria-label={`Kunjungi profil ${s.name}`}
                  >
                    <SIcon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
