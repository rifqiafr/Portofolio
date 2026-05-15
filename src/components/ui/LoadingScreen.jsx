import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-[#0f172a] flex items-center justify-center"
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center">
        {/* LOGO */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl md:text-7xl font-black text-[#023E8A]"
        >
          KIAF
        </motion.h1>

        {/* LOADING BAR */}
        <div className="w-[220px] h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-8">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full bg-[#023E8A]"
          ></motion.div>
        </div>

        {/* TEXT */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-5 text-gray-600 dark:text-gray-300"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;