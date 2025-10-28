import React from "react";

const PortfolioFilter = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`px-2 py-2 transition-all duration-300 text-sm uppercase tracking-wide md:text-base cursor-pointer ${
              isActive
                ? " text-primary border-b border-primary"
                : "bg-white text-gray-500 border-gray-200 hover:text-primary"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default PortfolioFilter;
