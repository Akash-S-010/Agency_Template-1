import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Homepage", path: "/" },
    { id: 2, label: "About Us", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Portfolio", path: "/portfolio" },
    { id: 5, label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent text-white z-[60] flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-36" />
      </Link>

      {/* Menu Toggle - Hamburger */}
      <div className="relative z-30">
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
                  "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
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
                  "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </svg>
        </label>
      </div>

      {/* Menu Items - Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-20 flex flex-col justify-center items-start px-18 space-y-6"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center group"
              >
                <span className="text-gray-500 text-sm font-medium">
                  0{item.id} ----
                </span>
                <div className="text-4xl md:text-6xl font-normal ml-4 relative hover:text-primary hover:scale-105 transition duration-300 ease-in-out">
                  {item.label}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
