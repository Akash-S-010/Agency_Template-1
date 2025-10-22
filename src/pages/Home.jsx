import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../components/ui/Preloader";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WorkWithUs from "../components/home/WorkWithUs";

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    // Simulate Hero content loading (adjust based on actual iframe load)
    const heroLoad = setTimeout(() => {
      setIsHeroLoaded(true);
    }, 2500); // Adjust this delay to match your iframe load time

    return () => {
      clearTimeout(timer);
      clearTimeout(heroLoad);
    };
  }, []);

  return (
    <div className="bg-black relative">
      <AnimatePresence mode="wait">
        {showPreloader || !isHeroLoaded ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <WorkWithUs />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;