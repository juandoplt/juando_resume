import {
  Row,
  Container,
  Col,
} from 'react-bootstrap';

import { Title, Paragraph } from '../../text/';
import styled from 'styled-components';

const Section = styled.div`
    padding-top:20%;
    padding-bottom:15%;
`

const Text = styled(Paragraph)`
  color:#3a3a3a;
  font-size:1.3rem;
  margin-top:1rem;
`

function HeroSection() {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <Title size="3rem">
              Hola, soy juando. Argentino, Diseñador UX/UI.
            </Title>
            <Text>
              En los últimos años me dedique al desarrollo de nuevos productos mobile, desde estrategias de marketing, branding, campañas de anuncios y diseño.
            </Text>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;



