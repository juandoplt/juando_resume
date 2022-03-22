import Footer from "../components/general/Footer";
import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const Contact = () => {
  return (
    <Animation transition={.45}>
      <Paragraph>
        Contact
      </Paragraph>
      <Footer />
    </Animation>
  );
}

export default Contact;
