import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on homepage (has hero section)
  const isHomepage = location.pathname === "/";

  const menuItems = [
    { id: 1, label: "Homepage", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Portfolio", path: "/portfolio" },
    { id: 5, label: "Careers", path: "/careers" },
    { id: 6, label: "Contact Us", path: "/contact" },
  ];

  const useWhiteLogo = isMenuOpen || (isHomepage && !hasScrolled);
  const logoSrc = useWhiteLogo ? "/logo_white.png" : "/logo_primary.png";

  /* ---------- HEADER HIDE / SHOW ON SCROLL ---------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
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

  /* ---------- WHITE BG AFTER HERO ---------- */
  useEffect(() => {
    const handle = () => setHasScrolled(window.scrollY > 100);
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
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-4 md:px-8 py-4 ${
          isMenuOpen
            ? "bg-transparent"
            : hasScrolled
              ? "bg-white/95 shadow-md backdrop-blur"
              : "bg-transparent"
        }`}
        style={{
          transition: "background-color 0.4s ease, box-shadow 0.4s ease"
        }}
      >
        <Link to="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="Beyond"
            className="h-6 w-auto transition-opacity duration-300"
          />
          <span className="sr-only">Beyond</span>
        </Link>

        {/* ==== HAMBURGER ICON (Light Theme Version) ==== */}
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
                  stroke: isMenuOpen 
                    ? "white" 
                    : isHomepage && !hasScrolled 
                      ? "white" 
                      : "#111dbf",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                  strokeDasharray: isMenuOpen ? "20 300" : "12 63",
                  strokeDashoffset: isMenuOpen ? "-32.42" : "0",
                  transition:
                    "stroke-dasharray 600ms cubic-bezier(0.4,0,0.2,1), stroke-dashoffset 600ms cubic-bezier(0.4,0,0.2,1), stroke 300ms ease",
                }}
              />
              {/* Middle Line → Disappears */}
              <path
                className="line"
                d="M7 16 27 16"
                style={{
                  fill: "none",
                  stroke: isMenuOpen 
                    ? "white" 
                    : isHomepage && !hasScrolled 
                      ? "white" 
                      : "#111dbf",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                  transition:
                    "stroke-dasharray 600ms cubic-bezier(0.4,0,0.2,1), stroke-dashoffset 600ms cubic-bezier(0.4,0,0.2,1), stroke 300ms ease",
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
          className="fixed inset-0 z-[60] flex items-center justify-center px-6 md:px-20"
          style={{
            backgroundColor: "#111dbf",
          }}
        >
          <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full lg:h-auto">
            {/* Left: Navigation */}
            <div className="flex flex-col justify-center items-start space-y-6">
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
                    <span className="text-white/70 text-sm font-medium">
                      0{item.id} ----
                    </span>
                    <div className="text-4xl md:text-6xl font-normal ml-4 text-white hover:text-white/80 hover:scale-105 transition duration-300 ease-in-out">
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:flex flex-col space-y-12 pl-12 border-l border-white/10 py-12"
            >
              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-[0.2em]">Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+971501234567" 
                    className="block text-3xl font-light text-white hover:text-white/80 transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                  
                </div>
              </div>

              <div >
                <h3 className="text-white/60 text-sm uppercase tracking-[0.2em]">Address</h3>
                <span
                  className="block text-3xl font-light text-white hover:text-white/80 transition-colors"
                >
                  Dubai, UAE
                </span>
              </div>

              <div>
                <h3 className="text-white/60 text-sm uppercase tracking-[0.2em]">Email</h3>
                <a 
                  href="mailto:hello@beyond.agency" 
                  className="block text-3xl font-light text-white hover:text-white/80 transition-colors"
                >
                  hello@beyond.agency
                </a>
              </div>
            </motion.div>
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