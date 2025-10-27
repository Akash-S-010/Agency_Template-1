import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    description: "Transform your brand with our social media experts. We craft captivating content and strategic campaigns that engage your audience and drive results. Let's turn your social media into a powerful engine for growth and loyalty.",
    category: "Digital Marketing",
    tools: ["Meta Business Suite", "TikTok Ads Manager", "Canva Pro", "Hootsuite"],
    features: [
      "Social Content Strategy",
      "Community Management",
      "Paid Social Campaigns",
      "Performance Reporting",
    ],
    metrics: { engagement: "+300%", reach: "2M+", campaigns: "50+" },
  },
  {
    title: "Digital Marketing",
    description: "Our data-driven strategy guarantees your brand connects with the right audience at the perfect moment. With services ranging from SEO optimization to targeted advertising and impactful email campaigns, we empower you to dominate the digital landscape and amplify your online impact.",
    category: "Marketing Solutions",
    tools: ["Google Analytics", "Google Ads", "Semrush", "HubSpot"],
    features: [
      "Performance Marketing",
      "SEO Programs",
      "Email Automation",
      "Conversion Optimization",
    ],
    metrics: { roi: "+250%", leads: "5K+", conversions: "35%" },
  },
  {
    title: "Talent Management",
    description: "Elevate your personal brand with our expert partnership. Our team offers tailored guidance, mentorship, and strategic support to help you achieve your career goals and enhance your industry presence. Let's nurture your journey to success together.",
    category: "Professional Development",
    tools: ["LinkedIn", "Calendly", "Notion", "Canva"],
    features: [
      "Personal Brand Strategy",
      "Mentorship Programs",
      "Industry Networking",
      "Career Roadmaps",
    ],
    metrics: { placements: "95%", satisfaction: "4.9/5", growth: "+180%" },
  },
  {
    title: "Branding & Identity",
    description: "Bring your vision to life with a distinctive brand identity. Our creative team crafts unique logos, taglines, and visual assets that resonate with your target audience, helping you stand out in a competitive marketplace.",
    category: "Brand Design",
    tools: ["Adobe Illustrator", "Figma", "Miro", "After Effects"],
    features: [
      "Brand Workshops",
      "Visual Language Systems",
      "Logo Development",
      "Messaging Frameworks",
    ],
    metrics: { recognition: "+400%", loyalty: "78%", market: "25%" },
  },
  {
    title: "Content Creation",
    description: "From captivating blog posts to stunning videos, our production team delivers high-quality content that tells your brand's story. We create engaging narratives that not only draw your audience in but also foster lasting connections and keep them coming back for more.",
    category: "Content Production",
    tools: ["Adobe Creative Cloud", "Final Cut Pro", "Notion", "Canva"],
    features: [
      "Editorial Planning",
      "Copywriting",
      "Video Production",
      "Design Assets",
    ],
    metrics: { engagement: "+500%", shares: "10K+", views: "2M+" },
  },
  {
    title: "Influencer Marketing",
    description: "We create authentic influencer partnerships that spark conversations, build trust, and grow audiences. From strategy to campaign management, we connect you with the right voices to amplify your story and drive real results.",
    category: "Influencer Solutions",
    tools: ["Upfluence", "CreatorIQ", "Google Analytics", "Airtable"],
    features: [
      "Influencer Outreach",
      "Campaign Management",
      "Contract Negotiation",
      "Performance Analytics",
    ],
    metrics: { reach: "5M+", engagement: "+350%", conversions: "42%" },
  },
  {
    title: "Web App Development",
    description: "Our talented developers will design a stunning, user-friendly website that captures your brand's essence and boosts conversions. We emphasize intuitive user experiences to keep visitors engaged and motivated to take action.",
    category: "Web Development",
    tools: ["React", "Next.js", "Node.js", "MongoDB"],
    features: [
      "Product Architecture",
      "API Integrations",
      "Responsive UI",
      "Performance Optimization",
    ],
    metrics: { performance: "99%", users: "100K+", satisfaction: "4.8/5" },
  },
  {
    title: "MVP Development Expertise",
    description: "At Beyond, we specialize in crafting Minimum Viable Products (MVPs) that empower businesses to validate ideas, gather user feedback, and confidently enter the market. With a dedicated team of experts, we offer custom software, app, and web development, rapid prototyping, intuitive MVP design, strategic consulting, and rigorous testing to ensure your MVP is market-ready.",
    category: "Product Development",
    tools: ["Figma", "TypeScript", "Firebase", "Jira"],
    features: [
      "Rapid Prototyping",
      "User Testing",
      "Roadmap Planning",
      "Investor Deck Support",
    ],
    metrics: { launch: "60 days", validation: "95%", funding: "$2M+" },
  },
  {
    title: "Website Development",
    description: "Our talented developers will design a stunning, user-friendly website that captures your brand's essence and boosts conversions. We emphasize intuitive user experiences to keep visitors engaged and motivated to take action.",
    category: "Web Solutions",
    tools: ["WordPress", "Webflow", "Tailwind CSS", "GSAP"],
    features: [
      "UX Audits",
      "CMS Implementation",
      "Accessibility Compliance",
      "SEO Optimization",
    ],
    metrics: { traffic: "+200%", conversion: "45%", loading: "1.2s" },
  },
];

const IntroCard = memo(function IntroCard({ progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, willChange: "transform" }}
        className="w-full h-full overflow-hidden bg-white shadow-lg"
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary leading-tight mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed max-w-3xl mb-8">
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
        className={`w-full h-full border-t border-primary/40 overflow-hidden shadow-lg ${
          i % 2 === 0 ? 'bg-white' : 'bg-blue-50'
        }`}
      >
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 xl:p-16 min-h-full">
          <div className="flex flex-col justify-center max-w-2xl">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-light border border-blue-600/20 text-primary">
                <Award size={16} className="text-primary" />
                {category}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary leading-tight">
                {title}
              </h2>

              <p className="text-base md:text-lg lg:text-xl font-light text-gray-700 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-xl md:text-2xl lg:text-3xl font-light text-primary">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 md:pt-6">
                <p className="text-sm text-gray-600 mb-3 font-medium">Tools & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 border border-blue-600/20 rounded-lg text-sm text-primary"
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