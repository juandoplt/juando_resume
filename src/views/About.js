import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const About = () => {
  return (
    <Animation transition={.25}>
      <Paragraph>
        About
      </Paragraph>
    </Animation>
  );
}

export default About;
