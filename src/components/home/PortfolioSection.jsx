// src/components/home/PortfolioSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { ExternalLink, Award } from "lucide-react";
import Button from "../ui/Button";

/* ------------------------------------------------------------------ */
/*  DATA – Portfolio Projects (4:3 images)                            */
/* ------------------------------------------------------------------ */
const projects = [
  {
    title: "FinTech Dashboard Redesign",
    description:
      "Redesigned a complex financial dashboard for 50K+ users, improving task completion rates by 47% and reducing support tickets.",
    category: "Web Application",
    tools: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: { completion: "+47%", satisfaction: "4.8/5", users: "50K+" },
    images: [
      "https://i.pinimg.com/1200x/f6/c0/85/f6c085bbe773a14afea28a03307f9160.jpg",
      "https://i.pinimg.com/1200x/95/42/dd/9542ddcc8d14fb92148084b5dcbfe894.jpg",
      "https://i.pinimg.com/1200x/bd/5c/45/bd5c45d4f65ec7e6e8a09d7aee2f1f01.jpg",
      "https://i.pinimg.com/1200x/9c/24/65/9c2465aa945b9c07e5542e213bfe18c4.jpg",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a high-conversion e-commerce platform with advanced filtering, personalized recommendations, and seamless checkout flow.",
    category: "E-Commerce",
    tools: ["Next.js", "Shopify", "Stripe", "PostgreSQL", "Redis"],
    metrics: { conversion: "+34%", revenue: "$2.1M", speed: "0.8s" },
    images: [
      "https://i.pinimg.com/1200x/a5/9f/77/a59f7703faef0d07c99b89909b5343c7.jpg",
      "https://i.pinimg.com/736x/bd/cb/59/bdcb59330b04884ed3a141d517443c39.jpg",
      "https://i.pinimg.com/1200x/18/87/ac/1887acda47f5d02d2d7f87d1a2030d32.jpg",
      "https://i.pinimg.com/736x/2d/f5/8a/2df58a6fd1aeac33a1b828e2c3f5d05d.jpg",
    ],
  },
  {
    title: "Healthcare Mobile App",
    description:
      "Designed and developed a HIPAA-compliant telehealth app connecting patients with doctors for virtual consultations.",
    category: "Mobile App",
    tools: ["React Native", "Node.js", "WebRTC", "AWS", "MongoDB"],
    metrics: { appointments: "10K+", rating: "4.9/5", uptime: "99.9%" },
    images: [
      "https://i.pinimg.com/736x/20/0e/69/200e69b73ee0c8d1cb0779f3b38fbecf.jpg",
      "https://i.pinimg.com/1200x/12/ec/b7/12ecb7fdb10c9a0fa3476e52f39466f7.jpg",
      "https://i.pinimg.com/1200x/16/2c/13/162c1308f21c5fc2142c389c19bd04a6.jpg",
      "https://i.pinimg.com/736x/48/5d/87/485d87631bced669ecf444e6ab968a24.jpg",
    ],
  },
  {
    title: "SaaS Analytics Platform",
    description:
      "Created a real-time analytics dashboard for marketing teams to track campaigns, visualize data, and generate automated reports.",
    category: "SaaS Product",
    tools: ["Vue.js", "Python", "D3.js", "Docker", "Kubernetes"],
    metrics: { customers: "500+", queries: "1M/day", retention: "92%" },
    images: [
      "https://i.pinimg.com/736x/b6/19/f9/b619f93df0ec6b70f5f0a16ad8bde795.jpg",
      "https://i.pinimg.com/1200x/fc/a9/b6/fca9b63eb1e7d9dc13eb36bcd5f67632.jpg",
      "https://i.pinimg.com/736x/00/38/53/00385325edb5535fb1918a34ec6a4650.jpg",
      "https://i.pinimg.com/736x/96/99/73/96997380afba9be1d72818367e717790.jpg",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  INTRO CARD – First sticky card (no images)                        */
/* ------------------------------------------------------------------ */
const IntroCard = memo(function IntroCard({ progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, willChange: "transform" }}
        className="relative w-full h-full overflow-hidden bg-white [transform:translateZ(0)] border-t border-b border-gray-300"
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16 text-center max-w-4xl mx-auto">
          <h1 className="font-title text-3xl md:text-7xl font-bold text-primary mb-6">
            What We've Done
          </h1>

          <p className="text-lg md:text-3xl font-light text-muted leading-relaxed max-w-3xl mb-8">
            A curated selection of projects where I turned complex problems into intuitive,
            high-impact digital experiences. Scroll down to explore the case studies.
          </p>

          <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-6 py-2 rounded-full text-sm font-light border border-gray-300 text-gray-500">
            <Award size={16} className="text-primary" />
            Featured Work
          </div>
        </div>
      </motion.div>
    </div>
  );
});
IntroCard.displayName = "IntroCard";

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function PortfolioSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Intro card: stays full size (no parallax shrink)
  const introRange = [0, 1];
  const introScale = 1;

  return (
    <main ref={containerRef} className="relative bg-white">
      {/* 1. Intro Card */}
      <IntroCard
        progress={scrollYProgress}
        range={introRange}
        targetScale={introScale}
      />

      {/* 2. Project Cards */}
      {projects.map((project, i) => {
        const idx = i + 1; // Start projects at index 1
        const targetScale = 1 - (projects.length - idx) * 0.02;
        const range = [idx * 0.25, 1];

        return (
          <Card
            key={idx}
            i={idx}
            title={project.title}
            description={project.description}
            category={project.category}
            tools={project.tools}
            metrics={project.metrics}
            images={project.images}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD – Project Card (unchanged)                                   */
/* ------------------------------------------------------------------ */
const Card = memo(function Card({
  i,
  title,
  description,
  category,
  tools,
  metrics,
  images,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const bgColor = i % 2 === 0 ? "bg-blue-50" : "bg-white";

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          willChange: "transform",
        }}
        className={`relative w-full h-full overflow-hidden ${bgColor} [transform:translateZ(0)] border-t border-b border-gray-300`}
      >
        {/* Content Grid */}
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 xl:p-16">
          {/* LEFT: Text */}
          <div className="flex flex-col max-w-2xl justify-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="hidden sm:inline-flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-light border border-gray-400 text-black">
                <Award size={16} className="text-primary" />
                {category}
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
                {title}
              </h2>

              <p className="text-lg md:text-xl font-normal text-muted leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-light text-black">{value}</div>
                    <div className="text-sm text-muted capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm text-muted mb-3 font-medium">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 border border-black rounded-lg text-sm text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <Button text="View Project" onClick={() => window.open("/portfolio")} />
            </div>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-6 max-w-lg w-full">
              {images.map((src, idx) => {
                return (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl border border-black/10 aspect-[4/3] shadow-2xl ${
                      idx === 1 ? "translate-y-4" : idx === 2 ? "-translate-y-4" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-50" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
Card.displayName = "PortfolioCard";