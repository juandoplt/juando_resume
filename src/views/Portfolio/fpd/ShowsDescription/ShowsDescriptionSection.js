import { Container, Row, Col } from "react-bootstrap";


import {
  Section,
  AnimatedTitle,
  AnimatedContainer,
  AnimatedParagraph,
} from "./ShowsDescriptionSection.styles";

import Separator from "../../../../components/general/Separator";


const ShowsDescriptionSection = () => {
  return (
    <>
    <Separator backgroundColor="#efefef" fill="white"/>
      <Section>
        <Container>
          <Row style={{position:"relative"}}>
            <Col>
              <AnimatedContainer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
              >
                <AnimatedTitle>Producción audiovisual</AnimatedTitle>
                <AnimatedParagraph>El antiguo logotipo de FPD no gritaba lo suficiente "fútbol". </AnimatedParagraph>
                <AnimatedParagraph>Para el rediseño decidí ir por algo más obvio y que a su vez muestre una visión más premium.</AnimatedParagraph>
              </AnimatedContainer>
            </Col>
          </Row>
        </Container>
      </Section>
      {/* <Separator backgroundColor="#FFFFFF" fill="#efefef" /> */}
    </>
  );
}

export default ShowsDescriptionSection;
