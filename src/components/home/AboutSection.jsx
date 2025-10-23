import React from "react";
import CardSwap, { Card } from "../ui/StackCardAnime";
import Button from "../ui/Button";

const AboutSection = () => {
  return (
    <div className="h-[95vh] bg-black text-white px-4 md:px-20 flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-5xl">
          <h1 className="text-3xl md:text-7xl font-light mb-8 md:mb-12">
            Who We Are.
          </h1>
          <p className="text-lg md:text-3xl leading-snug tracking-tight font-light text-gray-200">
            <span className="text-primary font-semibold">Velvetbyte</span>{" "}
            empowers startups and enterprises with smart, future-ready IT
            solutions—driving innovation, scalability, and success in a rapidly
            evolving digital world.
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
            {/* Web Development */}
            <Card
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay + Top Gradient */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="text-3xl font-semibold mb-2">Web Development</h3>
                <p className="text-lg text-gray-200">
                  Modern, responsive, and scalable websites built for
                  performance and growth.
                </p>
              </div>
            </Card>

            {/* App Development */}
            <Card
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="text-3xl font-semibold mb-2">App Development</h3>
                <p className="text-lg text-gray-200">
                  Crafting seamless mobile experiences that engage and convert
                  on every device.
                </p>
              </div>
            </Card>

            {/* Digital Marketing */}
            <Card
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="text-3xl font-semibold mb-2">
                  Digital Marketing
                </h3>
                <p className="text-lg text-gray-200">
                  Data-driven campaigns and SEO strategies that amplify your
                  brand visibility.
                </p>
              </div>
            </Card>

            {/* Branding */}
            <Card
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="text-3xl font-semibold mb-2">Branding</h3>
                <p className="text-lg text-gray-200">
                  Building strong, consistent brand identities that resonate and
                  inspire trust.
                </p>
              </div>
            </Card>

            {/* Graphic Design */}
            <Card
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 text-left">
                <h3 className="text-3xl font-semibold mb-2">Graphic Design</h3>
                <p className="text-lg text-gray-200">
                  Creative visuals and designs that elevate your brand presence
                  across platforms.
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
