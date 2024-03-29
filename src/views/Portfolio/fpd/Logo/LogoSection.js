import { Container, Row, Col } from "react-bootstrap";


import {
  Section,
  AnimatedTitle,
  AnimatedContainer,
  AnimatedOldLogoContainer,
  AnimatedNewLogoContainer,
  AnimatedParagraph,
  AnimatedImage
} from "./LogoSection.styles";

import {
  fadeAndScaleOut,
  fadeAndScaleIn,
}
  from "./LogoSection.animations";


const LogoSection = () => {
  return (
    <>
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
                <AnimatedTitle>El logo</AnimatedTitle>
                <AnimatedOldLogoContainer
                  initial={fadeAndScaleOut}
                  whileInView={fadeAndScaleIn}
                  transition={{ duration: .5 }}
                  viewport={{ once: true }}
                >

                  <AnimatedImage
                    whileInView={{ scale: 1, opacity: 0 }}
                    transition={{ duration: .5, delay: 2 }}
                    viewport={{ once: true }}
                    src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/old_logo.png'}`}
                  />
                </AnimatedOldLogoContainer>
                <AnimatedNewLogoContainer
                  initial={fadeAndScaleOut}
                  whileInView={fadeAndScaleIn}
                  transition={{ duration: .5, delay: .2 }}
                  viewport={{ once: true }}
                >
                  <AnimatedImage
                    initial={fadeAndScaleOut}
                    whileInView={fadeAndScaleIn}
                    transition={{ duration: .5, delay: 1.5 }}
                    viewport={{ once: true }}
                    src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/logo.png'}`}
                  />
                </AnimatedNewLogoContainer>

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

export default LogoSection;
