import { useEffect } from "react";
import Footer from "../../../components/general/Footer";
import RelatedWorks from "../../../components/general/RelatedWorks";
import Animation from "../../../utils/animation";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import SixthSection from "./SixthSection";
import ThirdSection from "./ThirdSection";

const FpdPage = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <Animation transition={.45}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <RelatedWorks left="mastenis" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default FpdPage;
