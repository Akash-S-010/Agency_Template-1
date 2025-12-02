import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const StickyContact = () => {
  return (
    <div className="fixed bottom-5 md:bottom-10 right-2 md:right-10 z-50 flex-col space-y-2">
      <a
        href="tel:+971563648546"
        className="bg-white size-10 md:size-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <IoCall size={22} className="text-primary"/>
      </a>
      <a
        href="https://wa.me/971563648546"
        target="_blank"
        className="bg-white size-10 md:size-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaWhatsapp size={24} className="text-primary" />
      </a>
    </div>
  );
};

export default StickyContact;
