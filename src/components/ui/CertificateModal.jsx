import { motion, AnimatePresence } from "framer-motion";

function CertificateModal({
  certificate,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrev,
}) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-[#0f172a] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* IMAGE */}
            <img
              src={certificate?.image}
              alt={certificate?.title}
              className="w-full max-h-[420px] object-contain bg-black"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {certificate?.title}
              </h2>

              <p className="text-gray-500">
                {certificate?.issuer}
              </p>

              <p className="text-sm mt-2">
                Year: {certificate?.year}
              </p>

              <button
                onClick={onClose}
                className="mt-5 px-5 py-2 bg-red-500 text-white rounded-lg"
              >
                Close
              </button>
            </div>

            {/* NAV MODAL */}
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-10 h-10 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2
              bg-black/60 text-white w-10 h-10 rounded-full"
            >
              ›
            </button>

            {/* COUNTER */}
            <div className="absolute top-3 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              {currentIndex + 1} / {total}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;