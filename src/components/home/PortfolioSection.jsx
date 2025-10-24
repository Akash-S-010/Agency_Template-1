// src/components/home/PortfolioSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { ExternalLink, Award } from "lucide-react";

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
      "https://i.pinimg.com/736x/3a/cd/fe/3acdfe44f29d72b6748e4cdca7b6d57c.jpg",
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
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function PortfolioSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative bg-[#0a0a0a]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - 1 - i) * 0.02;
        const range = [i * 0.25, 1];

        return (
          <Card
            key={i}
            i={i}
            {...project}  // FIXED: This was missing!
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
/*  CARD – NO GRADIENT, TOP & BOTTOM BORDER (gray-600)                */
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
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        ref={cardRef}
        style={{
          scale,
          willChange: "transform",
        }}
        className="relative w-full h-full overflow-hidden bg-[#0a0a0a] [transform:translateZ(0)] border-t border-b border-gray-600"
      >
        {/* Content Grid */}
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 xl:p-16">
          {/* LEFT: Text */}
          <div className="flex flex-col max-w-2xl justify-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-light border border-white/10 text-gray-400">
                <Award size={16} className="text-purple-400" />
                {category}
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                {title}
              </h2>

              <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-light text-white">{value}</div>
                    <div className="text-sm text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-3 font-medium">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base bg-white text-black hover:bg-gray-100 transition-all hover:scale-[1.02]">
                View Case Study
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* RIGHT: Larger Image Grid with Full Gaps */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-6 max-w-lg w-full">
              {images.map((src, idx) => {
                const lowRes = src.replace("500/375", "20/15");
                return (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] shadow-2xl ${
                      idx === 1 ? "translate-y-4" : idx === 2 ? "-translate-y-4" : ""
                    }`}
                  >
                    <img
                      src={src}
                      srcSet={`${lowRes} 20w, ${src} 500w`}
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