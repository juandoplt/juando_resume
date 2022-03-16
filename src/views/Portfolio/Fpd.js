import { Paragraph } from "../../components/text";
import Animation from "../../utils/animation";
import { Outlet } from "react-router-dom";

const FpdPage = () => {
  return (
    <Animation transition={.45}>
      <Paragraph>
        FpdPageasdasdasd
      </Paragraph>
      <Outlet />
    </Animation>
  );
}

export default FpdPage;
