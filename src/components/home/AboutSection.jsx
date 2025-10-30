import React from "react";
import CardSwap, { Card } from "../ui/StackCardAnime";
import Button from "../ui/Button";
import video from "../../assets/marketing_video.mp4";

const AboutSection = () => {
  return (
    <div className="text-black">
      {/* First Section - Cards and Text */}
      <div className="min-h-[95vh] px-4 md:px-20 flex flex-col justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2">
            <h1
              className="text-3xl md:text-7xl font-normal mb-8 md:mb-12 text-primary"
              id="why-us-section"
            >
              Who We Are.
            </h1>
            <p className="text-lg md:text-2xl leading-snug tracking-tight font-light text-muted">
              <span className="text-black font-normal">Beyond Agency</span> stands as the{" "}
              <span className="text-black font-normal">best digital marketing agency in Dubai</span>, 
              helping brands transform their online presence through innovative strategies and measurable results.
            </p>
            <p className="text-lg md:text-2xl leading-snug tracking-tight font-light text-muted mt-4">
              Recognized for creativity, precision, and performance, we craft solutions 
              from SEO and social media to paid advertising and branding that connect 
              audiences, drive engagement, and accelerate growth.
            </p>

            <div className="mt-8">
              <Button text="Learn More About Us">Learn More About Us</Button>
            </div>
          </div>

          {/* Right Animated Cards */}
          <div
            style={{ height: "600px", position: "relative" }}
            className="w-full md:w-1/2"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={true}
            >
              {/* SEO Services */}
              <Card
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/ad/be/be/adbebe4152ab0f5627895a39e9d4b625.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid gray",
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/70"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 px-8 py-14 text-left">
                  <h3 className="text-3xl text-gray-200 font-normal mb-2">
                    SEO Services
                  </h3>
                  <p className="text-lg text-gray-300">
                    Boost your visibility with proven SEO strategies that attract
                    the right audience and drive organic growth.
                  </p>
                </div>
              </Card>

              {/* Social Media Marketing */}
              <Card
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/1200x/fe/e4/29/fee4296f057a5d5b17bd5ca60dba08a5.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid gray",
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/60"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 px-8 py-14 text-left">
                  <h3 className="text-3xl text-gray-200 font-normal mb-2">
                    Social Media Marketing
                  </h3>
                  <p className="text-lg text-gray-300">
                    Build strong social media identities that connect with your
                    audience and drive measurable results.
                  </p>
                </div>
              </Card>

              {/* Performance Marketing */}
              <Card
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/d5/6f/52/d56f524554f367bb81ec84024bf1817b.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid gray",
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/60"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 px-8 py-14 text-left">
                  <h3 className="text-3xl text-gray-200 font-normal mb-2">
                    Performance Marketing
                  </h3>
                  <p className="text-lg text-gray-300">
                    Get measurable outcomes with data-driven campaigns designed to
                    maximize ROI and business growth.
                  </p>
                </div>
              </Card>

              {/* Branding */}
              <Card
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/1c/cc/8e/1ccc8ee0099b762c69330108410d6ab7.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid gray",
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/60"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 px-8 py-14 text-left">
                  <h3 className="text-3xl text-gray-200 font-normal mb-2">
                    Branding
                  </h3>
                  <p className="text-lg text-gray-300">
                    Building strong, consistent brand identities that resonate and
                    inspire trust.
                  </p>
                </div>
              </Card>

              {/* Web Development */}
              <Card
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/01/a5/6f/01a56feb9677a51b84f25a99762e9bdb.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "2px solid gray",
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/60"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 px-8 py-14 text-left">
                  <h3 className="text-3xl text-gray-200 font-normal mb-2">
                    Web Development
                  </h3>
                  <p className="text-lg text-gray-300">
                    From sleek design to powerful functionality, we create
                    websites that perform and convert.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>

      {/* Second Section - Video Left, Content Right (Balanced) */}
      <div className="min-h-[90vh] px-4 md:px-20 flex items-center mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left - Video (Equal Width) */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right - Content (Equal Width) */}
          <div className="w-full md:w-1/2">
            {/* <h2 className="text-3xl md:text-5xl font-normal mb-6 text-primary">
              Excellence in Action.
            </h2> */}
            <p className="text-lg md:text-2xl leading-relaxed tracking-tight font-light text-muted">
              As the <span className="text-black font-normal">best marketing agency in Dubai</span>, 
              our digital experts blend data, design, and strategy to deliver campaigns that convert. 
              With our <span className="text-black font-normal">top marketing services in Dubai</span>, 
              we empower businesses to reach the right audience, strengthen visibility, and scale with confidence.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed tracking-tight font-light text-muted mt-6">
              Going beyond ordinary marketing, we focus on building meaningful connections and lasting impact. 
              Every project is powered by insight, innovation, and a clear goal to take your brand 
              <span className="text-black font-normal"> further, faster, and beyond expectations.</span>
            </p>

            <div className="mt-8">
              <Button text="Discover Our Approach">Discover Our Approach</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Why Beyond Header */}
      <div className="px-4 md:px-20 mt-20 mb-12">
        <h2 className="text-3xl md:text-6xl font-normal mb-6 text-primary text-center">
          Why Beyond?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light text-muted text-center max-w-4xl mx-auto">
          Choosing the right marketing partner can make all the difference and Beyond Agency is built to help brands go further, faster. What sets us apart is not just what we do, but how we do it with creativity, precision, and passion driving every campaign.
        </p>
      </div>

      {/* Creative-First Approach - Image Right, Content Left */}
      <div className="min-h-[70vh] px-4 md:px-20 flex items-center py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-normal mb-6 text-black">
              Creative-First Approach
            </h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light text-muted">
              Every strategy begins with creativity. We design bold ideas that capture attention, connect emotionally, and inspire action ensuring your brand stands out in a crowded digital world.
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                alt="Creative design workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data-Driven Strategies - Image Left, Content Right */}
      <div className="min-h-[70vh] px-4 md:px-20 flex items-center py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          {/* Right - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-normal mb-6 text-black">
              Data-Driven Strategies
            </h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light text-muted">
              We do not guess we analyze. Every decision is backed by real data, helping you invest smarter and achieve measurable results that matter to your business.
            </p>
          </div>

          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Remote-First Culture - Image Right, Content Left */}
      <div className="min-h-[70vh] px-4 md:px-20 flex items-center py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-normal mb-6 text-black">
              Remote-First Culture
            </h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light text-muted">
              Our remote-first structure allows us to bring together top marketing minds from around the world. This flexibility fuels innovation, efficiency, and round-the-clock collaboration.
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Remote team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Passionate Team - Image Left, Content Right */}
      <div className="min-h-[70vh] px-4 md:px-20 flex items-center py-16 bg-gray-50 mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          {/* Right - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-normal mb-6 text-black">
              Passionate Team of Specialists
            </h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight font-light text-muted">
              From strategists and designers to SEO and social media experts, our team lives and breathes digital marketing. Passion drives us, results define us.
            </p>
          </div>

          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Passionate marketing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;