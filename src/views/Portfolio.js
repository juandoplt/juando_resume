import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const Portfolio = () => {
  return (
    <Animation transition={.25}>
      <Paragraph>
        Portfolio
      </Paragraph>
    </Animation>
  );
}

export default Portfolio;
