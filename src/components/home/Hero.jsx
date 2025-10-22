import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Loading Fallback while iframe loads */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }} // Sync with Hero load
      >
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </motion.div>

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
          onLoad={() => {
            // Optional: You can trigger a state update here if needed
            console.log("Iframe loaded");
          }}
          loading="eager" // Preload the iframe
        />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute backdrop-blur inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/20 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }} // Sync with load
      >
        <div className="text-left font-heading text-white">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-9xl font-semibold leading-tight mb-8">
            Digital
            <br />
            <span className="ml-0 md:ml-20">Brilliance.</span>
          </h1>
        </div>
        {/* Subtitle - aligned to the container's left padding */}
        <p className="text-sm text-gray-500 font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 left-6 md:left-12 lg:left-20 uppercase">
          WEBSITES <span className="text-primary">•</span> Mobile App <span className="text-primary">•</span> Development
        </p>
        <p className="text-sm text-gray-500 font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 right-6 md:right-12 lg:right-20 uppercase">
          DIGITAL MARKETING <span className="text-primary">•</span> DESIGNING
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
