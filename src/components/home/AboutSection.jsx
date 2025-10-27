import React from "react";
import CardSwap, { Card } from "../ui/StackCardAnime";
import Button from "../ui/Button";

const AboutSection = () => {
  return (
    <div className="h-[95vh] text-black px-4 md:px-20 flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-5xl">
          <h1 className="text-3xl md:text-7xl font-normal mb-8 md:mb-12 text-primary">
            Who We Are.
          </h1>
          <p className="text-lg md:text-3xl leading-snug tracking-tight font-light text-muted">
            <span className="text-black font-normal">Velvetbyte</span>{" "}
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
                  "url('https://i.pinimg.com/736x/ad/be/be/adbebe4152ab0f5627895a39e9d4b625.jpg')",
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
                <h3 className="text-3xl text-gray-200 font-normal mb-2">Web Development</h3>
                <p className="text-lg text-gray-300">
                  Modern, responsive, and scalable websites built for
                  performance and growth.
                </p>
              </div>
            </Card>

            {/* App Development */}
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
                <h3 className="text-3xl text-gray-200 font-normal mb-2">App Development</h3>
                <p className="text-lg text-gray-300">
                  Crafting seamless mobile experiences that engage and convert
                  on every device.
                </p>
              </div>
            </Card>

            {/* Digital Marketing */}
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
                  Digital Marketing
                </h3>
                <p className="text-lg text-gray-300">
                  Data-driven campaigns and SEO strategies that amplify your
                  brand visibility.
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
                <h3 className="text-3xl text-gray-200 font-normal mb-2">Branding</h3>
                <p className="text-lg text-gray-300">
                  Building strong, consistent brand identities that resonate and
                  inspire trust.
                </p>
              </div>
            </Card>

            {/* Graphic Design */}
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
                <h3 className="text-3xl text-gray-200 font-normal mb-2">Graphic Design</h3>
                <p className="text-lg text-gray-300">
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
