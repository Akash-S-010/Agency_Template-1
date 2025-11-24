import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaThreads,
} from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on homepage (has hero section)
  const isHomepage = location.pathname === "/";

  const menuItems = [
    { id: 1, label: "Home", path: "/" },
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

  return (
    <>
      {/* ==== NAVBAR ==== */}
      <motion.header
        animate={{ y: isVisible ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[70] flex flex-col border border-b-primary md:border-b-white/20 ${
          isMenuOpen
            ? "bg-transparent"
            : hasScrolled
            ? "bg-white/95 shadow-md backdrop-blur"
            : "bg-transparent"
        }`}
        style={{
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* ==== TOP HEADER (Desktop Only) ==== */}
        <div className=" w-full hidden md:flex justify-center gap-20 items-center px-8 py-3 bg-blue-950 text-white text-sm font-medium tracking-wide">
          <div className="flex items-center gap-10">
            <a
              href="tel:+971563648546"
              className="hover:text-white/70 transition-colors flex items-center"
            >
              <FaPhone className="mr-2" />
              +971 56 364 8546
            </a>
            <a
              href="mailto:Connect@beyondagency.ae"
              className="hover:text-white/70 transition-colors flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Connect@beyondagency.ae
            </a>
            <span>Dubai, UAE</span>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/beyondae/"
                className="hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={17} />
              </a>
              <a
                href="https://www.instagram.com/beyondagency.ae/"
                className="hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/share/16ZFDmdHUi/?mibextid=wwXIfr"
                className="hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={17} />
              </a>
              <a
                href="https://www.threads.com/@beyondagency.ae?xmt=AQF0NY6sTklRatCHsXClxBBieagc8pE17lVq4L1ObWPVMCo"
                className="hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaThreads size={17} />
              </a>
              <a
                href="https://www.youtube.com/@beyondagency_ae/"
                className="hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* ==== MAIN HEADER CONTENT ==== */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Beyond"
              className="h-6 w-auto transition-opacity duration-300"
            />
            <span className="sr-only">Beyond</span>
          </Link>

          {/* ==== DESKTOP NAVIGATION ==== */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${
                  isHomepage && !hasScrolled
                    ? "text-white hover:text-white/70"
                    : "text-gray-900 hover:text-[#111dbf]"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* ==== HAMBURGER ICON (Mobile Only) ==== */}
          <div className="relative z-[80] md:hidden">
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
        </div>
      </motion.header>

      {/* ==== FULL-SCREEN MENU (Mobile Only) ==== */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] overflow-y-auto px-6 py-24 flex items-center justify-center md:hidden"
          style={{
            backgroundColor: "#111dbf",
          }}
        >
          <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-8">
            {/* Navigation */}
            <div className="flex flex-col items-center space-y-6 w-full">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full text-left"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-3xl font-normal text-white hover:text-white/70 transition duration-300"
                  >
                    <div className="text-5xl flex items-center gap-2">
                      <span className="text-sm text-slate-500">/---</span>
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-start space-y-6 pt-8 border-t border-white/20 w-full"
            >
              <div className="text-center">
                <a
                  href="tel:+971563648546"
                  className="block text-xl font-light text-white hover:text-white/70 transition-colors"
                >
                  +971 56 364 8546
                </a>
              </div>

              <div className="text-center">
                <a
                  href="mailto:Connect@beyondagency.ae"
                  className="block text-xl font-light text-white hover:text-white/70 transition-colors"
                >
                  Connect@beyondagency.ae
                </a>
              </div>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <FaTwitter className="text-2xl" />
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
