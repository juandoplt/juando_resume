import {
  Row,
  Container,
  Col,
} from 'react-bootstrap';

import { Title, Paragraph } from '../../text/';
import Section from '../../general/Section';
import Separator from '../../general/Separator';

function HeroSection() {
  return (
    <Section paddingTop="20%" paddingBottom="15%">
      <Container>
        <Row>
          <Col>
            <Title size="3rem" fontWeight="bold">
              Hola, soy juando. Argentino, Diseñador UX/UI.
            </Title>
            <Paragraph color="#3a3a3a" fontSize="1.3rem" marginTop="1rem">
              En los últimos años me dedique al desarrollo de nuevos productos mobile, desde estrategias de marketing, branding, campañas de anuncios y diseño.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;



