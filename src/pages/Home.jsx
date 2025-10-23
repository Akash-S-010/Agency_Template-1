import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import TextAnimeSection from "../components/home/TextAnimeSection";
import WorkWithUs from "../components/home/WorkWithUs";

const Home = () => {
  return (
    <div className="bg-black relative">
      <Hero />
      <AboutSection />
      <WorkWithUs />
      <TextAnimeSection />
    </div>
  );
};

export default Home;
