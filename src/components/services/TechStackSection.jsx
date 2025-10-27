import React from "react";

const TechStackSection = () => {
  const techStack = [
    // Row 1
    [
      {
        name: "Shopify",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "Webflow",
        logo: "https://cdn.worldvectorlogo.com/logos/webflow-logo.svg",
      },
      {
        name: "WooCommerce",
        logo: "https://cdn.worldvectorlogo.com/logos/woocommerce-logo-1.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      },
      {
        name: "Nginx",
        logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg",
      },
      {
        name: "Strapi",
        logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
      },
      {
        name: "NestJS",
        logo: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
      },
      {
        name: "Vue.js",
        logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
      },
      {
        name: "React",
        logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
    ],
    // Row 2
    [
      {
        name: "Shopify",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "Shopify Plus",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      },
      {
        name: "Laravel",
        logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
      },
      {
        name: "Gatsby",
        logo: "https://cdn.worldvectorlogo.com/logos/gatsby.svg",
      },
      {
        name: "Webpack",
        logo: "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
    ],
  ];

  return (
    <div className="py-20 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-8">
          <p className="text-xs md:text-sm uppercase text-muted tracking-wider mb-6">
            TECH STACK
          </p>
          <p className="text-3xl md:text-4xl font-normal leading-tight text-black">
            Our cutting-edge tech stack is the secret weapon behind every bold idea.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex items-start md:items-center justify-end">
          <p className="text-sm text-gray-700">Yes, tech too.</p>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-12" />

      <div className="space-y-6 md:space-y-8">
        {techStack.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {row.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="flex-shrink-0 bg-white rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded"></div>
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-900 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
