import { useState, useEffect } from "react";
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



const Box = ({ speed,top,left,right }) => {
  const [hookedYPostion, setHookedYPosition] = useState(0);
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange(v => setHookedYPosition(v));



  }, [scrollYProgress]);

  // const yValue = useTransform(
  //   hookedYPostion,
  //   [0, 1],
  //   [0, 100 * speed]
  // );
  // const hookedYPostionTemp = hookedYPostion.toString();
  const hookedYPostionTemp = Math.round(hookedYPostion * 100) / 100;
  const hookedYPostionDecimals = String(hookedYPostionTemp).split('.');
  // const YPostion = hookedYPostionDecimals.substring(0, 2)
  let pepe = hookedYPostionDecimals[1] * speed
  const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);
  console.log(y1.current * speed)

  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,y:y1 }}
      transition={{ duration: 1 }}
      style={{ 
        position:"absolute",
        // transform: 'translateY(' +  Math.round(hookedYPostion * 100)  + 'px',
        y:y1.current*speed,
        top:top,
        left:left,
        right:right,
       }}
    >
      <img src="https://i.picsum.photos/id/302/200/300.jpg?hmac=b5e6gUSooYpWB3rLAPrDpnm8PsPb84p_NXRwD-DK-1I" />
      </motion.div>
    </>
  )
}


const ThirdSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Row style={{position:"relative"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box speed={-1000} left="auto" top={-300} right={-168}/>
              <Box speed={-200} left={-100} top={85} right="auto"/>
              <Box speed={-500} left={55} top={53} right="auto"/>
              <Box speed={400} left="auto" top={124} right={124}/>
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
