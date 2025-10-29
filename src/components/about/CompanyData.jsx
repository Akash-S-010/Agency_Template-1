import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    alt: "Team collaboration 1",
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    alt: "Office workspace 1",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    alt: "Professional at work",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    alt: "Team meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    alt: "Office collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    alt: "Team workspace",
  },
];

const CompanyData = () => {
  return (
    <div className="py-20 border-t border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-8">
          <p className="text-xs md:text-sm uppercase text-muted tracking-wider mb-6">
            In a nutshell
          </p>
          <p className="text-3xl md:text-4xl font-normal leading-tight text-black">
            Our remote-first culture is at the heart of what makes us different.
            By bringing together passionate specialists from around the globe,
            we foster an environment of collaboration, creativity, and agility —
            ensuring the best minds are working on your brand, no matter where
            they are.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex items-start md:items-center justify-end">
          <p className="text-sm text-gray-700">Going Beyond Expectations.</p>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-12" />

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start py-8">
        <div className="text-left">
          <div className="text-5xl md:text-6xl font-light">1+</div>
          <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
            Year of Excellence
          </div>
        </div>

        <div className="text-left">
          <div className="text-5xl md:text-6xl font-light">50+</div>
          <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
            Happy Clients
          </div>
        </div>

        <div className="text-left">
          <div className="text-5xl md:text-6xl font-light">100%</div>
          <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
            Client Satisfaction
          </div>
        </div>

        <div className="text-left mb-12">
          <div className="text-5xl md:text-6xl font-light">200+</div>
          <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
            Successful Campaigns
          </div>
        </div>
      </div>
      <ImageSlider images={images} />
    </div>
  );
};

export default CompanyData;
