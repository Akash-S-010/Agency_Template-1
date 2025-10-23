import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({ text, onClick, type, width, className }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`group flex ${
        width === "full" ? "w-full" : ""
      } items-center justify-center px-6 py-3 text-md hover:px-8 transition-all duration-300 cursor-pointer
        border border-white text-white hover:bg-white hover:text-black ${className}`}
    >
      {text}
      <span className="inline-block ml-4 group-hover:translate-x-1 transition">
        <MoveRight size={22} className="text-primary" />
      </span>
    </button>
  );
};

export default Button;
