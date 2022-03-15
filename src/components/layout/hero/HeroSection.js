import {
  Row,
  Container,
  Col,
} from 'react-bootstrap';

import { Title, Paragraph } from '../../text/';


function HeroSection() {
  return (
    <Container>
      <Row>
        <Col>
          <Title type="H1">
            Hola, soy juando. Argentino, Diseñador UX/UI.
          </Title>
          <Paragraph>
            En los últimos años me dedique al desarrollo de nuevos productos mobile, desde estrategias de marketing, branding, campañas de anuncios y diseño.
          </Paragraph>
        </Col>
      </Row>
    </Container>

  );
}

export default HeroSection;



