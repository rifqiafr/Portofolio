// src/components/sections/Certificates.jsx

import { useState } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  FaArrowLeft,
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus,
  FaRedo,
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

      {/* MODAL DI LUAR WRAPPER */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-5">
          {/* BACKDROP */}
          <div onClick={closeModal} className="absolute inset-0" />

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              z-[1000000]
              max-w-3xl
              w-full
              max-h-[90vh]
              bg-white
              dark:bg-[#111827]
              rounded-3xl
              overflow-y-auto
              shadow-2xl
              border
              border-gray-200
              dark:border-white/10
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
                cursor-pointer
                absolute
                top-4
                right-4
                z-[1000002]
                w-11
                h-11
                rounded-full
                bg-black/50
                backdrop-blur-md
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#023E8A]
                hover:scale-110
                transition
                duration-300
              "
            >
              ✕
            </button>

            {/* ZOOM BUTTONS */}
            <div className="absolute top-4 left-4 z-[1000002] flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="
                  cursor-pointer
                  w-10
                  h-10
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#023E8A]
                  transition
                "
              >
                <FaSearchMinus />
              </button>

              <button
                onClick={handleResetZoom}
                className="
                  cursor-pointer
                  w-10
                  h-10
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#023E8A]
                  transition
                "
              >
                <FaRedo />
              </button>

              <button
                onClick={handleZoomIn}
                className="
                  cursor-pointer
                  w-10
                  h-10
                  rounded-full
                  bg-black/50
                  backdrop-blur-md
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-[#023E8A]
                  transition
                "
              >
                <FaSearchPlus />
              </button>
            </div>

            {/* IMAGE SLIDER MODAL */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={selectedCertificate.images.length > 1 && zoom === 1}
              pagination={{
                clickable: true,
              }}
              autoplay={
                selectedCertificate.images.length > 1 && zoom === 1
                  ? {
                      delay: 3000,
                      disableOnInteraction: false,
                    }
                  : false
              }
              allowTouchMove={zoom === 1}
              observer={true}
              observeParents={true}
              loop={selectedCertificate.images.length > 2 && zoom === 1}
              onSlideChange={() => {
                setZoom(1);
                setPosition({
                  x: 0,
                  y: 0,
                });
                setIsDragging(false);
              }}
              className="rounded-t-3xl overflow-hidden"
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
                      bg-black
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      select-none
                      h-[65vh]
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

            {/* INFO */}
            <div className="p-6 md:p-8">
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                {selectedCertificate.title}
              </h2>

              {/* ISSUER */}
              <p className="mt-4 text-[#023E8A] font-semibold">
                {selectedCertificate.issuer}
              </p>

              {/* YEAR */}
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {selectedCertificate.year}
              </p>

              {/* DESCRIPTION */}
              {selectedCertificate.description && (
                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                  {selectedCertificate.description}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
