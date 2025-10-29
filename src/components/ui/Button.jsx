import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({ text, onClick, type, width, className, variant = "primary" }) => {
  const baseStyles =
    "group flex items-center justify-center px-6 py-3 text-md transition-all duration-300 cursor-pointer";
  const widthStyles = width === "full" ? "w-full" : "";
  const variants = {
    primary:
      "bg-primary text-white border-primary hover:bg-blue-600 hover:border-blue-600 hover:px-8",
    inverted:
      "bg-white text-primary border-white hover:bg-gray-100 hover:text-blue-600 hover:px-8",
  };
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${baseStyles} ${widthStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {text}
      <span className="inline-block ml-4 group-hover:translate-x-1 transition">
        <MoveRight
          size={22}
          className={`${
            variant === "inverted" ? "text-white group-hover:text-primary" : "text-primary group-hover:text-white"
          } transition-colors duration-300`}
        />
      </span>
    </button>
  );
};

export default Button;
