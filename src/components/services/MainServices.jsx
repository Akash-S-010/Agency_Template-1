import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const services = [
  {
    title: "SEO & Organic Growth",
    description:
      "Rank higher, get found faster. Our SEO programs blend technical audits, content strategy, and authority building to drive sustainable organic traffic.",
    category: "Growth Marketing",
    tools: ["Google Analytics", "Search Console", "Semrush", "Ahrefs"],
    features: [
      "Technical SEO Audits",
      "Content Roadmaps",
      "Link Building",
      "Local SEO Programs",
    ],
    metrics: { visibility: "+220%", keywords: "350+", roi: "4.5x" },
  },
  {
    title: "Social Media Marketing",
    description:
      "Turn followers into fans. We launch platform-native storytelling, paid campaigns, and community management that spark daily engagement.",
    category: "Social Platforms",
    tools: ["Meta Business Suite", "TikTok Ads", "Canva Pro", "Sprout Social"],
    features: [
      "Campaign Strategy",
      "Community Management",
      "Paid Social",
      "Performance Dashboards",
    ],
    metrics: { engagement: "+300%", reach: "2M+", campaigns: "60+" },
  },
  {
    title: "Performance Marketing",
    description:
      "Full-funnel paid media across search, social, and programmatic engineered to convert curiosity into revenue and repeat growth.",
    category: "Paid Media",
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4"],
    features: [
      "Media Planning",
      "Conversion Tracking",
      "Creative Experimentation",
      "Growth Automation",
    ],
    metrics: { roas: "5.2x", leads: "8K+", costEfficiency: "-32%" },
  },
  {
    title: "Branding & Identity",
    description:
      "Craft a brand that speaks before you do. We design visual languages, messaging systems, and launch playbooks that stay memorable.",
    category: "Brand Design",
    tools: ["Figma", "Adobe Illustrator", "Miro", "After Effects"],
    features: [
      "Brand Workshops",
      "Identity Systems",
      "Logo Development",
      "Messaging Frameworks",
    ],
    metrics: { recognition: "+400%", loyalty: "78%", recall: "92%" },
  },
  {
    title: "Talent Management",
    description:
      "Connect talent and opportunity. We manage creators, partnerships, and campaigns that align influence with measurable outcomes.",
    category: "Creator Economy",
    tools: ["LinkedIn", "Airtable", "Notion", "Calendly"],
    features: [
      "Talent Scouting",
      "Partnership Negotiation",
      "Campaign Stewardship",
      "Ongoing Coaching",
    ],
    metrics: { placements: "95%", retention: "88%", growth: "+180%" },
  },
  {
    title: "Digital PR",
    description:
      "Shape perception and stay visible. We secure coverage, manage reputation, and fuel conversations through always-on digital storytelling.",
    category: "Reputation",
    tools: ["Meltwater", "BuzzSumo", "Google Alerts", "Sheets"],
    features: [
      "Press Office",
      "Thought Leadership",
      "Influencer Alignment",
      "Crisis Playbooks",
    ],
    metrics: { mentions: "500+", shareOfVoice: "+65%", sentiment: "94%" },
  },
  {
    title: "Web Development",
    description:
      "From sleek design to powerful functionality, we build high-performing sites and apps optimized for speed, accessibility, and conversion.",
    category: "Digital Products",
    tools: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    features: [
      "Product Architecture",
      "API Integrations",
      "Performance Optimization",
      "Analytics Setup",
    ],
    metrics: { loadTime: "1.1s", uptime: "99.9%", csat: "4.8/5" },
  },
  {
    title: "Production",
    description:
      "Tell stories that stick. Our production team creates photo, film, and motion assets that elevate campaigns and product launches.",
    category: "Content Studio",
    tools: ["Adobe Premiere", "DaVinci Resolve", "Capture One", "After Effects"],
    features: [
      "Concept Development",
      "On-set Direction",
      "Post-Production",
      "Asset Delivery",
    ],
    metrics: { assets: "1K+", watchTime: "+280%", retention: "72%" },
  },
];

const IntroCard = memo(function IntroCard({ progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, willChange: "transform" }}
        className="w-full h-full overflow-hidden bg-white border border-gray-200 shadow-sm"
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary leading-tight mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl font-light text-slate-600 leading-relaxed max-w-3xl mb-8">
            Comprehensive digital solutions tailored to elevate your brand and drive business growth through innovative design and technology.
          </p>

          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-light border border-blue-600/20 text-primary">
            <Award size={16} className="text-primary" />
            Professional Services
          </div>
        </div>
      </motion.div>
    </div>
  );
});
IntroCard.displayName = "IntroCard";

const ServiceCard = memo(function ServiceCard({
  i,
  title,
  description,
  category,
  tools,
  features,
  metrics,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          willChange: "transform",
        }}
        className={`w-full h-full border border-gray-200 overflow-hidden shadow-sm ${
          i % 2 === 0 ? 'bg-white' : 'bg-white'
        }`}
      >
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 xl:p-16 min-h-full">
          <div className="flex flex-col justify-center max-w-2xl">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-light border border-primary/20 text-primary">
                <Award size={16} className="text-primary" />
                {category}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary leading-tight">
                {title}
              </h2>

              <p className="text-base md:text-lg lg:text-xl font-light text-slate-600 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-xl md:text-2xl lg:text-3xl font-light text-primary">{value}</div>
                    <div className="text-sm text-slate-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 md:pt-6">
                <p className="text-sm text-slate-500 mb-3 font-medium">Tools & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-[1.02] mt-4">
                Learn More
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="group flex flex-col">
                    <span className="text-2xl md:text-3xl lg:text-[2.6rem] font-normal text-black group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                    <span className="mt-2 h-px w-full bg-gray-300 group-hover:bg-blue-600 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
ServiceCard.displayName = "ServiceCard";

const MainServices = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const introRange = [0, 1];
  const introScale = 1;

  return (
    <main ref={containerRef} className="relative bg-gray-50">
      <IntroCard
        progress={scrollYProgress}
        range={introRange}
        targetScale={introScale}
      />

      {services.map((service, i) => {
        const idx = i + 1;
        const targetScale = 1 - (services.length - idx) * 0.005;
        const range = [idx / (services.length + 1), 1];

        return (
          <ServiceCard
            key={idx}
            i={idx}
            title={service.title}
            description={service.description}
            category={service.category}
            tools={service.tools}
            features={service.features}
            metrics={service.metrics}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default MainServices;