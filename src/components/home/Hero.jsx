import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://my.spline.design/3dglassherobg-LeGQVHqrhtEagS0kt0piWIp4/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-[calc(100%+100px)]"
          title="3D Background Animation"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute backdrop-blur inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
        <div className="text-left font-heading text-white">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-9xl font-semibold leading-tight mb-8">
            Digital
            <br />
            <span className="ml-0 md:ml-20">Brilliance.</span>
          </h1>
        </div>
          {/* Subtitle - aligned to the container's left padding like the screenshot */}
          <p className="text-sm text-gray-300 font-body md:text-base tracking-wider font-normal absolute bottom-10 z-30 left-6 md:left-12 lg:left-20 uppercase">
            WEBSITES • DIGITAL MARKETING • DESIGN
          </p>
      </div>
    </section>
  );
};

export default Hero;
