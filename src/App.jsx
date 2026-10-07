import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";

// Lazy-loaded sections with code splitting
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Certificates = lazy(() => import("./components/sections/Certificates"));
const Contact = lazy(() => import("./components/sections/Contact"));

import LoadingScreen from "./components/ui/LoadingScreen";

function SectionLoader() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-3 border-cyan-500/20 border-t-cyan-500 animate-spin" />
        <div className="absolute h-6 w-6 rounded-full bg-cyan-400/20 animate-ping" />
      </div>
      <p className="mt-4 text-xs font-medium text-slate-400 dark:text-slate-500 animate-pulse tracking-wide">
        Memuat konten...
      </p>
    </div>
  );
}

const VALID_SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certificate",
  "contact",
];

function App() {
  const [loading, setLoading] = useState(true);

  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_SECTIONS.includes(hash)) {
        return hash;
      }
    }
    return "home";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Listen to hash changes (browser back/forward button support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_SECTIONS.includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (sectionId) => {
    if (VALID_SECTIONS.includes(sectionId)) {
      setActiveSection(sectionId);
      if (window.location.hash !== `#${sectionId}`) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero onNavigate={handleNavigate} />;
      case "about":
        return <About onNavigate={handleNavigate} />;
      case "skills":
        return <Skills onNavigate={handleNavigate} />;
      case "experience":
        return <Experience onNavigate={handleNavigate} />;
      case "projects":
        return <Projects onNavigate={handleNavigate} />;
      case "certificate":
        return <Certificates onNavigate={handleNavigate} />;
      case "contact":
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {/* LOADING SCREEN */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* WEBSITE WITH SIDEBAR LAYOUT */}
      {!loading && (
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 flex flex-col lg:flex-row relative">
          {/* SIDEBAR NAVIGATION (LEFT ON DESKTOP, TOP ON MOBILE) */}
          <Sidebar
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          {/* MAIN CONTENT AREA (RIGHT) */}
          <div className="flex-1 min-w-0 flex flex-col min-h-screen pt-16 lg:pt-0 lg:pl-72 xl:pl-80">
            <main className="flex-1 min-w-0 flex flex-col justify-start" id="main-content" tabIndex="-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full flex-1 flex flex-col"
                >
                  <Suspense fallback={<SectionLoader />}>
                    {renderActiveSection()}
                  </Suspense>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      )}

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
}

export default App;