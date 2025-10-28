import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid gray",
      }}
    >
      {/* Dark Overlay + Top Gradient */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-8 py-14 text-left">
        <h3 className="text-3xl text-gray-200 font-normal mb-2">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
