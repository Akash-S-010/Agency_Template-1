import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA – Portfolio Projects                                         */
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
      "https://picsum.photos/400/500?random=1",
      "https://picsum.photos/400/500?random=2",
      "https://picsum.photos/400/500?random=3",
      "https://picsum.photos/400/500?random=4",
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
      "https://picsum.photos/400/500?random=5",
      "https://picsum.photos/400/500?random=6",
      "https://picsum.photos/400/500?random=7",
      "https://picsum.photos/400/500?random=8",
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
      "https://picsum.photos/400/500?random=9",
      "https://picsum.photos/400/500?random=10",
      "https://picsum.photos/400/500?random=11",
      "https://picsum.photos/400/500?random=12",
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
      "https://picsum.photos/400/500?random=13",
      "https://picsum.photos/400/500?random=14",
      "https://picsum.photos/400/500?random=15",
      "https://picsum.photos/400/500?random=16",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function PortfolioSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative bg-[#0a0a0a]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - 1 - i) * 0.02;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD COMPONENT – Consistent sizing and solid backgrounds          */
/* ------------------------------------------------------------------ */
const Card = ({
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
}) => {
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        ref={cardRef}
        style={{
          scale,
          top: `calc(${i * 25}px)`,
        }}
        className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a1a]"
      >
        {/* Accent gradient overlays */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 xl:p-16">
          {/* LEFT: Project Info */}
          {/* LEFT: Project Info */}
          <div className="flex flex-col h-full max-w-2xl">
            {/* Top Section: Badge, Title, Description, Metrics, Tools */}
            <div className="space-y-6 lg:space-y-8">
              {/* Category Badge */}
              <div className="inline-flex text-gray-400 items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-light border border-white/10">
                <Award size={16} className="text-primary" />
                {category}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                {description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-light text-white">
                      {value}
                    </div>
                    <div className="text-sm text-gray-500 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  Technologies Used
                </p>
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

              {/* CTA Button – NOW directly below tools */}
              <div className="mt-6">
                <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base bg-white text-black hover:bg-gray-100 transition-all hover:scale-[1.02]">
                  View Case Study
                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Optional: Spacer to push content up if needed on tall screens */}
            <div className="flex-1" />
          </div>

          {/* RIGHT: Image Grid */}
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-2 gap-3 max-w-[520px] w-full">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-xl border border-white/10 aspect-[4/5] ${
                    idx === 1
                      ? "translate-y-8"
                      : idx === 2
                      ? "-translate-y-8"
                      : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`${title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-40"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
