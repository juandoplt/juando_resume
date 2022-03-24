import { Container, Row, Col } from "react-bootstrap";
import { motion, useViewportScroll, useTransform } from 'framer-motion';


import {
  Section,
  AnimatedTitle,
  AnimatedContainer,
  AnimatedOldLogoContainer,
  AnimatedNewLogoContainer,
  AnimatedParagraph,
  AnimatedImage
} from "./ThirdSection.styles";

import {
  fadeAndScaleOut,
  fadeAndScaleIn,
}
  from "./ThirdSection.animations";



const Box = ({ speed }) => {
  const { scrollYProgress } = useViewportScroll();
  const yValue = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100 * speed]
  );
  console.log(yValue)
  return (
    <motion.div
      initial={{ opacity: 0,y:yValue }}
      animate={{ opacity: 1, y: yValue }}
      transition={{ duration: 1 }}
    >
      <img src="https://i.picsum.photos/id/302/200/300.jpg?hmac=b5e6gUSooYpWB3rLAPrDpnm8PsPb84p_NXRwD-DK-1I" />
    </motion.div>
  )
}


const ThirdSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box speed={0} />
              <Box speed={0.4} />
              <Box speed={-2} />
              <Box speed={4} />
            </div>
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

export default ThirdSection;
