import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      <motion.div
        className="relative flex items-center justify-center mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeOut", loop: Infinity }}
      >
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <motion.div
          className="absolute w-12 h-12 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Design Beyond Ordinary
      </motion.h1>

      <motion.p
        className="mt-6 text-gray-300 text-sm md:text-base uppercase tracking-widest font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
      >
        Crafting Your Experience...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;