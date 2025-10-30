import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 px-2 md:px-12 lg:px-20 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tagline */}
          <div>
            <img src='./logo.png' alt="logo" className="w-42" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Legal Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors duration-200">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@Beyond.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  support@Beyond.com
                </a>
              </li>
              <li>
                <a href="tel:+91 8304826261" className="hover:text-primary transition-colors duration-200">
                  +91 8304826261
                </a>
              </li>
              <li>Kochi, Kerala, India</li>
            </ul>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center mt-12 py-8 md:py-18 border-t border-b border-gray-200">
          <h1 className="text-2xl md:text-7xl font-semibold text-gray-800">
            Unlock Your <span className="text-primary">Success</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Notice */}
          <div className="text-center md:text-left mt-8 text-sm text-gray-500">
            <p>&copy; Copyright 2025, Beyond</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-2 md:gap-4 mt-8">
            <a 
              href="https://www.instagram.com/velvet_byte?igsh=MWFlZXZlMnlnaXM4bw==" 
              className="hover:text-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61570463492944" 
              className="hover:text-primary transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/Beyond/posts/?feedView=all"
              className="hover:text-primary transition-colors duration-200"
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