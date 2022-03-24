import { useEffect } from "react";
import {useLocation} from 'react-router-dom';

import Footer from "../../../components/general/Footer";
import RelatedWorks from "../../../components/general/RelatedWorks";
import Animation from "../../../utils/animation";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import SixthSection from "./SixthSection/SixthSection";

const FpdPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Animation transition={.45}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <FourthSection />
      <FifthSection />
      <SixthSection /> */}
      <RelatedWorks left="mastenis" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default FpdPage;
