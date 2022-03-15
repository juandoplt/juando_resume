import { Paragraph } from "../components/text";
import Animation from "../utils/animation";

const NotFound = () => {
  return (
    <Animation transition={.25}>
      <Paragraph>
        Not Found
      </Paragraph>
    </Animation>
  );
}

export default NotFound;
