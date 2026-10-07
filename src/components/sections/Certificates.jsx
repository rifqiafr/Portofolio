import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  FaArrowLeft,
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus,
  FaRedo,
  FaTimes,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import certificates from "../../data/certificates";

import SectionTitle from "../ui/SectionTitle";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [zoom, setZoom] = useState(1);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const [dragStart, setDragStart] = useState({
    x: 0,
    y: 0,
  });

  const totalSlides = Math.ceil(certificates.length / 8);

  const handleSwiperState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setZoom(1);
    setPosition({
      x: 0,
      y: 0,
    });
    setIsDragging(false);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setZoom(1);
    setPosition({
      x: 0,
      y: 0,
    });
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.2, 1);

      if (newZoom === 1) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return newZoom;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPosition({
      x: 0,
      y: 0,
    });
    setIsDragging(false);
  };

  const handlePointerDown = (e) => {
    if (zoom <= 1) return;

    e.preventDefault();
    e.stopPropagation();

    e.currentTarget.setPointerCapture(e.pointerId);

    setIsDragging(true);

    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging || zoom <= 1) return;

    e.preventDefault();
    e.stopPropagation();

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section
      id="certificate"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center px-6 md:px-10 lg:px-12 xl:px-16 py-8 lg:py-4 overflow-y-auto lg:overflow-hidden bg-[#f8fafc] dark:bg-[#111827] transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* COMPACT INTEGRATED HEADER */}
        <div className="flex items-center justify-between gap-4 mb-4 lg:mb-5">
          <SectionTitle title="My" highlight="Certificates" />

          {/* NAVIGATION */}
          <div className="flex items-center gap-2">
            {/* PREV */}
            <button
              disabled={isBeginning || totalSlides <= 1}
              aria-label="Previous certificate"
              className={`
                certificate-prev
                w-9 h-9 sm:w-10 sm:h-10
                rounded-xl
                border border-gray-200 dark:border-white/10
                flex items-center justify-center
                text-sm
                transition-all duration-200
                ${
                  isBeginning || totalSlides <= 1
                    ? "bg-gray-100 dark:bg-white/5 text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
                    : "cursor-pointer bg-white dark:bg-white/5 text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A] shadow-sm active:scale-95"
                }
              `}
            >
              <FaArrowLeft />
            </button>

            {/* NEXT */}
            <button
              disabled={isEnd || totalSlides <= 1}
              aria-label="Next certificate"
              className={`
                certificate-next
                w-9 h-9 sm:w-10 sm:h-10
                rounded-xl
                border border-gray-200 dark:border-white/10
                flex items-center justify-center
                text-sm
                transition-all duration-200
                ${
                  isEnd || totalSlides <= 1
                    ? "bg-gray-100 dark:bg-white/5 text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
                    : "cursor-pointer bg-white dark:bg-white/5 text-gray-700 dark:text-white hover:bg-[#023E8A] hover:text-white hover:border-[#023E8A] shadow-sm active:scale-95"
                }
              `}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* CERTIFICATES SWIPER */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".certificate-next",
              prevEl: ".certificate-prev",
            }}
            loop={false}
            speed={600}
            spaceBetween={20}
            onInit={handleSwiperState}
            onSlideChange={handleSwiperState}
            onReachBeginning={(swiper) => handleSwiperState(swiper)}
            onReachEnd={(swiper) => handleSwiperState(swiper)}
            className="pb-2"
          >
            {Array.from({
              length: totalSlides,
            }).map((_, groupIndex) => {
              const group = certificates.slice(
                groupIndex * 8,
                groupIndex * 8 + 8,
              );

              return (
                <SwiperSlide key={groupIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
                    {group.map((certificate, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.04,
                        }}
                        viewport={{
                          once: true,
                        }}
                        onClick={() => openModal(certificate)}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          cursor-pointer
                          bg-white
                          dark:bg-white/5
                          border
                          border-gray-200
                          dark:border-white/10
                          shadow-sm
                          hover:shadow-lg
                          hover:border-[#023E8A]/40
                          transition
                          duration-300
                        "
                      >
                        {/* IMAGE */}
                        <div className="overflow-hidden aspect-[16/11] bg-gray-100 dark:bg-black/30">
                          <img
                            src={certificate.images[0]}
                            alt={certificate.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-3">
                          <h3 className="text-white font-bold text-xs sm:text-sm line-clamp-2">
                            {certificate.title}
                          </h3>

                          <p className="text-white/80 text-[11px] sm:text-xs mt-1 line-clamp-1">
                            {certificate.issuer}
                          </p>

                          <div className="mt-2.5 px-3 py-1 rounded-full bg-white text-black text-[11px] font-semibold hover:scale-105 transition">
                            View
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* MODAL WINDOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative
                z-10
                bg-white/95
                dark:bg-[#0b1120]/95
                backdrop-blur-2xl
                rounded-3xl
                max-w-5xl
                w-full
                max-h-[90vh]
                overflow-hidden
                border
                border-slate-200/80
                dark:border-white/10
                shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]
                dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]
                flex
                flex-col
              "
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#023E8A]/10 text-[#023E8A] dark:text-cyan-300 text-xs font-semibold tracking-wide uppercase">
                    Certificate
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    {selectedCertificate.issuer}
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="
                    cursor-pointer
                    w-8 h-8 sm:w-9 sm:h-9
                    rounded-full
                    bg-slate-100
                    dark:bg-white/10
                    text-slate-600
                    dark:text-slate-300
                    hover:bg-red-500
                    hover:text-white
                    dark:hover:bg-red-500
                    dark:hover:text-white
                    flex
                    items-center
                    justify-center
                    text-sm
                    transition-all
                    duration-200
                    active:scale-90
                  "
                >
                  <FaTimes />
                </button>
              </div>

              {/* 2-COLUMN SPLIT CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto max-h-[calc(90vh-65px)]">
                {/* LEFT: CERTIFICATE VIEWER (7 COLS) */}
                <div className="lg:col-span-7 p-4 sm:p-5 bg-slate-950 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5 min-h-[350px] sm:min-h-[420px]">
                  {/* FLOATING ZOOM TOOLBAR */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/15 shadow-xl">
                    <button
                      onClick={handleZoomOut}
                      aria-label="Zoom out"
                      className="cursor-pointer w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center text-xs transition"
                    >
                      <FaSearchMinus />
                    </button>

                    <button
                      onClick={handleResetZoom}
                      aria-label="Reset zoom"
                      className="cursor-pointer px-2.5 h-8 rounded-full text-white/90 hover:text-white hover:bg-white/10 flex items-center gap-1 text-[11px] font-mono transition"
                    >
                      <FaRedo className="text-[10px]" />
                      <span>{Math.round(zoom * 100)}%</span>
                    </button>

                    <button
                      onClick={handleZoomIn}
                      aria-label="Zoom in"
                      className="cursor-pointer w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center text-xs transition"
                    >
                      <FaSearchPlus />
                    </button>
                  </div>

                  {/* IMAGE SLIDER */}
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={selectedCertificate.images.length > 1 && zoom === 1}
                    pagination={{ clickable: true }}
                    autoplay={
                      selectedCertificate.images.length > 1 && zoom === 1
                        ? { delay: 3500, disableOnInteraction: false }
                        : false
                    }
                    allowTouchMove={zoom === 1}
                    loop={selectedCertificate.images.length > 2 && zoom === 1}
                    onSlideChange={() => {
                      setZoom(1);
                      setPosition({ x: 0, y: 0 });
                      setIsDragging(false);
                    }}
                    className="w-full h-full rounded-2xl overflow-hidden"
                  >
                    {selectedCertificate.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div
                          onPointerDown={handlePointerDown}
                          onPointerMove={handlePointerMove}
                          onPointerUp={handlePointerUp}
                          onPointerCancel={handlePointerUp}
                          className={`
                            relative
                            w-full
                            h-[320px]
                            sm:h-[400px]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            select-none
                            touch-none
                            ${
                              zoom > 1
                                ? "cursor-grab active:cursor-grabbing"
                                : "cursor-default"
                            }
                          `}
                        >
                          <img
                            src={image}
                            alt="certificate"
                            draggable={false}
                            className="w-full h-full object-contain will-change-transform"
                            style={{
                              transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`,
                              transformOrigin: "center center",
                              transition: isDragging ? "none" : "transform 0.2s ease",
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* RIGHT: DETAILS (5 COLS) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {selectedCertificate.title}
                    </h2>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-sm font-bold text-[#023E8A] dark:text-cyan-400">
                        {selectedCertificate.issuer}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {selectedCertificate.year}
                      </span>
                    </div>

                    {selectedCertificate.description && (
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedCertificate.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;
