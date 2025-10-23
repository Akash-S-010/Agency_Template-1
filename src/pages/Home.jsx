import Hero from "../components/home/Hero";
import TextAnimeSection from "../components/home/TextAnimeSection";
import WorkWithUs from "../components/home/WorkWithUs";

const Home = () => {
  return (
    <div className="bg-black relative">
      <Hero />
      <TextAnimeSection />
      <WorkWithUs />
    </div>
  );
};

export default Home;
