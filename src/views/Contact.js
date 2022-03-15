import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const Contact = () => {
  return (
    <Animation transition={.25}>
      <Paragraph>
        Contact
      </Paragraph>
    </Animation>
  );
}

export default Contact;
