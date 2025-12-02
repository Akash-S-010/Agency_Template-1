import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const StickyContact = () => {
  return (
    <div className="fixed bottom-5 md:bottom-10 right-2 md:right-10 z-50 flex md:space-x-2">
      <a
        href="tel:+971563648546"
        className="bg-white size-10 md:size-12 flex items-center justify-center rounded-full drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <IoCall size={23} className="text-primary" />
      </a>
      <a
        href="https://wa.me/971563648546"
        target="_blank"
        className="bg-white size-10 md:size-12 flex items-center justify-center rounded-full drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaWhatsapp size={25} className="text-primary" />
      </a>
    </div>
  );
};

export default StickyContact;
