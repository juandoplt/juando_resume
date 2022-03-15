import Animation from "../utils/animation";
import HeroSection from "../components/layout/hero/HeroSection";
import HomePortfolioGrid from "../components/layout/portfolio/HomePortfolioGrid";

const Home = () => {
  return (
    <Animation transition={.25}>
      <HeroSection />
      <HomePortfolioGrid />
    </Animation>
  );
}

export default Home;
