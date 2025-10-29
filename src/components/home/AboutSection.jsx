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
          <div className="w-full md:w-5xl">
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

      {/* Second Section - Image/Video Left, Content Right */}
      <div className="min-h-[90vh] px-4 md:px-20 flex items-center mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left - Video */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2">
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
    </div>
  );
};

export default AboutSection;