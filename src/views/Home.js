import { Paragraph } from "../components/text";
import HeroSection from "../components/layout/hero/HeroSection";
import Animation from "../utils/animation";
import {
  Row,
  Container,
} from 'react-bootstrap';

const Home = () => {
  return (
    <Animation transition={.25}>
      <Container>
        <Row>
          <Paragraph>
            Home
          </Paragraph>
        </Row>
      </Container>
    </Animation>
  );
}

export default Home;
