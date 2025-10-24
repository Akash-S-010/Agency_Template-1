import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import TextAnimeSection from "../components/home/TextAnimeSection";
import WorkWithUs from "../components/home/WorkWithUs";
import ServiceSection from "../components/home/ServiceSection";
import PortfolioSection from "../components/home/PortfolioSection";

const Home = () => {
  return (
    <div className="bg-black relative">
      <Hero />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <WorkWithUs />
      <TextAnimeSection />
    </div>
  );
};

export default Home;
