import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center transition-colors"
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center">
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-6xl md:text-7xl font-black text-[#023E8A] dark:text-white tracking-tight flex items-center"
        >
          <span>KI</span>
          <span className="text-cyan-500">AF</span>
          <span className="inline-block h-3 w-3 rounded-full bg-cyan-400 ml-1 animate-pulse" />
        </motion.h1>

        {/* LOADING BAR */}
        <div className="w-[200px] h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.65,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-[#023E8A] to-cyan-500"
          />
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide"
        >
          Memuat Portofolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;