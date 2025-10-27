import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import TextAnimeSection from "../components/home/TextAnimeSection";
import WorkWithUs from "../components/home/WorkWithUs";
import ServiceSection from "../components/home/ServiceSection";
import PortfolioSection from "../components/home/PortfolioSection";
import FaqSection from "../components/home/FaqSection";
import StackingCardSection from "../components/home/StackingCardSection";
import ParallaxImage from "../components/ui/ParallaxImage";

const Home = () => {
  return (
    <div className="bg-white relative">
      <Hero />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <WorkWithUs />
      <TextAnimeSection />
      <ParallaxImage />
      <StackingCardSection />
      <FaqSection />
    </div>
  );
};

export default Home;
