import { MoveRight, Loader2 } from "lucide-react";
import React from "react";

const Button = ({
  text,
  onClick,
  type,
  width,
  className,
  variant = "primary",
  isLoading = false,
  disabled = false,
}) => {
  const baseStyles =
    "group flex items-center justify-center px-6 py-3 text-md transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed";
  const widthStyles = width === "full" ? "w-full" : "";
  const variants = {
    primary:
      "bg-primary text-white border-primary hover:bg-blue-700 hover:border-blue-600 hover:px-8 disabled:hover:px-6 disabled:hover:bg-primary",
    inverted:
      "bg-white text-primary border border-white hover:bg-primary hover:text-white hover:px-8 disabled:hover:px-6 disabled:hover:bg-white disabled:hover:text-primary",
  };
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${widthStyles} ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {isLoading ? (
        <Loader2 size={22} className="animate-spin text-white" />
      ) : (
        <>
          {text}
          <span className="inline-block ml-4 group-hover:translate-x-1 transition">
            <MoveRight
              size={22}
              className={`${
                variant === "inverted"
                  ? "text-primary group-hover:text-white"
                  : "text-white"
              } transition-colors duration-300`}
            />
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
