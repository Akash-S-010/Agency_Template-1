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

const narrativeSections = [
  {
    id: "strategic-growth",
    eyebrow: "Strategic Growth Partners",
    body:
      "Recognized as one of Dubai’s leading advertising companies, we craft strategies that connect with audiences, boost visibility, and drive conversions. From SEO and social to paid media and branding, every engagement is tailored to each client’s goals.",
    aside: "Measured growth",
  },
  {
    id: "beyond-campaigns",
    eyebrow: "Experiences Beyond Campaigns",
    body:
      "Our strategists, designers, and digital experts go beyond ordinary marketing. We build experiences, tell compelling brand stories, and deliver measurable results rooted in innovation, precision, and excellence.",
    aside: "Specialist craft",
  },
  {
    id: "momentum-brands",
    eyebrow: "Momentum for Modern Brands",
    body:
      "With a fresh perspective and a dynamic, client-first approach, Beyond Agency continually redefines what a modern marketing partner can achieve — helping brands outpace competitors and hit ambitious growth goals.",
    aside: "Lasting momentum",
  },
];

const CompanyData = () => {
  return (
    <div className="bg-white">
      <div className="pb-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <section className="border-t border-gray-200 pt-12 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-8">
                <p className="text-xs md:text-sm uppercase text-muted tracking-wider mb-6">
                  In a nutshell
                </p>
                <p className="text-3xl md:text-4xl font-normal leading-snug text-black">
                  Our remote-first culture unites specialists across time zones, keeping collaboration sharp and execution agile so the right minds are always pushing your brand forward.
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 flex items-start md:items-center justify-end">
                <p className="text-sm text-muted md:text-right">Going Beyond Expectations.</p>
              </div>
            </div>
          </section>

          {narrativeSections.map((section) => (
            <section
              key={section.id}
              className="border-t border-gray-200 pt-12 md:pt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="col-span-12 md:col-span-8 space-y-4">
                  <p className="text-xs md:text-sm uppercase text-muted tracking-wider mb-6">
                    {section.eyebrow}
                  </p>
                  <p className="text-3xl md:text-4xl font-normal leading-snug text-black">
                    {section.body}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-start md:items-center justify-end">
                  <p className="text-sm text-muted md:text-right md:max-w-xs">
                    {section.aside}
                  </p>
                </div>
              </div>
            </section>
          ))}

          <hr className="border-t border-gray-200" />

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div className="text-left">
              <div className="text-5xl md:text-6xl font-light">1+</div>
              <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
                Year of Excellence
              </div>
            </div>

            <div className="text-left">
              <div className="text-5xl md:text-6xl font-light">100+</div>
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

            <div className="text-left">
              <div className="text-5xl md:text-6xl font-light">200+</div>
              <div className="text-xs tracking-widest text-gray-500 uppercase mt-2">
                Successful Campaigns
              </div>
            </div>
          </div>

          <div className="pb-6">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
