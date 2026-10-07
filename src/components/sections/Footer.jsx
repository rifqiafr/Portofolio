function Footer({ onNavigate }) {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificate" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="w-full px-6 md:px-10 lg:px-16 py-8 border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-[#0b1329]/60 backdrop-blur-md transition-colors mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LOGO & TITLE */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate?.("home")}
            className="text-2xl font-black text-[#023E8A] dark:text-white cursor-pointer hover:opacity-80 transition"
          >
            <span>KI</span>
            <span className="text-cyan-500">AF</span>
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 ml-0.5" />
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Frontend & Machine Learning
          </span>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate?.(link.id)}
              className="text-slate-600 dark:text-slate-400 hover:text-[#023E8A] dark:hover:text-cyan-400 transition cursor-pointer font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          © {new Date().getFullYear()} Muhamad Rifqi Afriansyah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;