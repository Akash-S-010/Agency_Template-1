import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-2 md:px-12 lg:px-20 border-t border-primary/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tagline */}
          <div>
            <img src="../logo_white.png" alt="logo" className="h-10 w-auto"/>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/Careers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Legal Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@Beyond.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  support@Beyond.com
                </a>
              </li>
              <li>
                <a href="tel:+91 8304826261" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 8304826261
                </a>
              </li>
              <li className="text-gray-300">Dubai</li>
            </ul>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center mt-12 py-8 md:py-18 border-t border-b border-white/30">
          <h1 className="font-title text-2xl md:text-7xl font-bold text-white">
            Unlock Your <span className="text-white">Success</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Notice */}
          <div className="text-center md:text-left mt-8 text-sm text-gray-300">
            <p>&copy; Copyright 2025, Beyond</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-2 md:gap-4 mt-8">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;