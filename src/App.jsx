import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* LOADING */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* WEBSITE */}
      {!loading && (
        <div className="bg-[#f5f5f5] dark:bg-[#0f172a] text-black dark:text-white min-h-screen transition-colors duration-300">
          <Navbar />

          <Hero />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Certificates />

          <Contact />

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;