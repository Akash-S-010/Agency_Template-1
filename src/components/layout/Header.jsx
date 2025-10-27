// src/components/layout/Header.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import headerBg from "../../assets/bgimg.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Homepage", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Portfolio", path: "/portfolio" },
    { id: 5, label: "Contact Us", path: "/contact" },
  ];

  /* ---------- HEADER HIDE / SHOW ON SCROLL ---------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {  // ← FIXED: was "()y" → now "()"
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    if (isMenuOpen) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    } else {
      setIsVisible(window.scrollY <= 0);
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  /* ---------- DARK BG AFTER HERO ---------- */
  useEffect(() => {
    const handle = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* ---------- LOCK BODY SCROLL WHEN MENU OPEN ---------- */
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isMenuOpen]);

  /* ---------- CLOSE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => setIsMenuOpen(false), [location]);

  /* ---------- ESC KEY CLOSE ---------- */
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isMenuOpen]);

  return (
    <>
      {/* ==== NAVBAR ==== */}
      <motion.header
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-2 md:px-6 py-4 transition-all duration-300 ${
          hasScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-36" />
        </Link>

        {/* ==== HAMBURGER ICON (100% ORIGINAL ANIMATION) ==== */}
        <div className="relative z-[80]">
          <label className="hamburger cursor-pointer block">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden"
            />
            <svg
              viewBox="0 0 32 32"
              className="h-12 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: isMenuOpen ? "rotate(-45deg)" : "none" }}
            >
              {/* Top & Bottom Lines → X */}
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                style={{
                  fill: "none",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                  strokeDasharray: isMenuOpen ? "20 300" : "12 63",
                  strokeDashoffset: isMenuOpen ? "-32.42" : "0",
                  transition:
                    "stroke-dasharray 600ms cubic-bezier(0.4,0,0.2,1), stroke-dashoffset 600ms cubic-bezier(0.4,0,0.2,1)",
                }}
              />
              {/* Middle Line → Disappears */}
              <path
                className="line"
                d="M7 16 27 16"
                style={{
                  fill: "none",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                  transition:
                    "stroke-dasharray 600ms cubic-bezier(0.4,0,0.2,1), stroke-dashoffset 600ms cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </svg>
          </label>
        </div>
      </motion.header>

      {/* ==== FULL-SCREEN MENU ==== */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-start px-6 md:px-18"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${headerBg})` }}
            aria-hidden="true"
          />

          {/* Menu Links */}
          <div className="relative z-10 flex flex-col justify-center items-start space-y-6 max-w-4xl w-full">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center group"
                >
                  <span className="text-gray-400 text-sm font-medium">
                    0{item.id} ----
                  </span>
                  <div className="text-4xl md:text-6xl font-normal ml-4 text-white hover:text-primary hover:scale-105 transition duration-300 ease-in-out">
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Click Outside to Close */}
          <div
            className="absolute inset-0 z-0"
            onClick={() => setIsMenuOpen(false)}
          />
        </motion.div>
      )}
    </>
  );
};

export default Header;