import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const StickyContact = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-3">
      <a
        href="tel:+971563648546"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <IoCall className="text-primary text-2xl" />
      </a>
      <a
        href="https://wa.me/971563648546"
        target="_blank"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaWhatsapp className="text-primary text-2xl" />
      </a>
    </div>
  );
};

export default StickyContact;
