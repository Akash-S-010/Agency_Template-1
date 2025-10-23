import React from 'react';

const Button = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = 'py-2 px-6 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const widthClass = fullWidth ? 'w-full flex justify-center' : 'w-auto';
  const disabledClass = disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${disabledClass} group relative overflow-hidden pr-6 ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative">
        {loading ? 'Loading...' : children}
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
          →
        </span>
      </span>
    </button>
  );
};

export default Button;