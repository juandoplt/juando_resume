import Animation from "../utils/animation";
import HeroSection from "../components/layout/hero/HeroSection";
import HomePortfolioGrid from "../components/layout/portfolio/HomePortfolioGrid";
import LanguageSkill from "../components/layout/LanguageSkill";
import SecondarySkills from "../components/layout/SecondarySkills";
import Skills from "../components/layout/Skills";
import ContactMe from "../components/layout/ContactMe";
import Software from "../components/layout/Software";
import Footer from "../components/general/Footer";

const Home = () => {
  return (
    <Animation transition={.45}>
      <HeroSection />
      <HomePortfolioGrid />
      <LanguageSkill />
      <Skills />
      <SecondarySkills />
      <Software />
      <ContactMe />
      <Footer />
    </Animation>
  );
}

export default Home;
