import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const Contact = () => {
  return (
    <Animation transition={.45}>
      <Paragraph>
        Contact
      </Paragraph>
    </Animation>
  );
}

export default Contact;
