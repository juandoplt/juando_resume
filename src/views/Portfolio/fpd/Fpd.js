import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Footer from "../../../components/general/Footer";
import RelatedWorks from "../../../components/general/RelatedWorks";
import Animation from "../../../utils/animation";
import Hero from "./Hero/HeroSection";
import ProductDescription from "./ProductDescription/ProductDescriptionSection";
import Logo from "./Logo/LogoSection";
import Wireframe from "./Wireframe/WireframeSection";
import Mindmap from "./Mindmap/MindmapSection";
import App from "./App/AppSection";
import Keypoints from "./Keypoints/KeypointsSection";
import Show from "./Show/ShowSection";
import ShowsDescription from "./ShowsDescription/ShowsDescriptionSection";

const FpdPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Animation transition={.45}>
      <Hero />
      <ProductDescription />
      <Logo />
      <Wireframe />
      <Mindmap />
      <App />
      <Keypoints />
      <ShowsDescription />
      <Show />
      <RelatedWorks left="mastenis" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default FpdPage;
