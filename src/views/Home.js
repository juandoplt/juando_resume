import Animation from "../utils/animation";
import HeroSection from "../components/layout/hero/HeroSection";
import HomePortfolioGrid from "../components/layout/portfolio/HomePortfolioGrid";
import LanguageSkill from "../components/layout/LanguageSkill";
import SecondarySkills from "../components/layout/SecondarySkills";
import Skills from "../components/layout/Skills";
import ContactMe from "../components/layout/ContactMe";
import Software from "../components/layout/Software";

const Home = () => {
  return (
    <Animation transition={.25}>
      <HeroSection />
      <HomePortfolioGrid />
      <LanguageSkill />
      <Skills />
      <SecondarySkills />
      <Software />
      <ContactMe />
    </Animation>
  );
}

export default Home;
