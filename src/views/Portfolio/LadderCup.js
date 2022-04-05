import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Paragraph, Title } from "../../components/text";
import Animation from "../../utils/animation";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import AnimatedListItem from "../../components/portfolio/AnimatedListItem";
import { Plock } from "react-plock";
import { motion } from "framer-motion"
import Parallax from "../../components/general/ParrallaxImages";
import RelatedWorks from "../../components/general/RelatedWorks";
import Footer from "../../components/general/Footer";

const Section = styled(Container)`
    padding-top:5rem;
    color:#3a3a3a
`

const ToolsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 5rem;
  margin-left: -10px;
  flex-wrap: wrap;
`

const ElementsList = styled.ul`
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom:2rem;
`


const LadderCupPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 768, columns: 2 },
    { size: 1024, columns: 3 },
  ];

  const imageVariants = {
    hover: {
      scale: 1.1,
      filter: "grayscale(70%) blur(4px)",
    }
  };

  const transition = {
    delay: 0.2
  }

  return (
    <Animation transition={.45}>
      <Section>
        <Row>
          <Col>
            <Title size="4rem" fontWeight="bold" letterSpacing="-3px">Ladder Cup '21</Title>
            <Title size="2rem" fontWeight="500">Copa de esports para Paraguay</Title>
            <Title color="#000" size="1.5rem" fontWeight="500">Descripción de trabajo</Title>
            <Paragraph color="#000" size="1rem">
              Próximamente más desarrollo...
            </Paragraph>

          </Col>
          <Col>
            <Title>Elementos</Title>
            <ElementsList>
              <li>
                • Desarrollo de identidad
              </li>
              <li>
                • Desarrollo sitio web.
              </li>
              <li>
                • Producción Audiovisual
              </li>
            </ElementsList>
          </Col>
        </Row>
        <Row>
          <Col>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen0.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen1.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen2.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen3.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen4.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen5.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen6.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen7.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen8.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen9.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen10.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen11.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen12.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen13.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen14.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen15.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen16.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen17.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>
          <Parallax>
                <motion.img
                  src={`${process.env.PUBLIC_URL + '/img/portfolio/laddercup/screen18.jpg'}`}
                  alt="Portfolio"
                  variants={imageVariants}
                  transition={transition}
                  style={{ width: "80%",margin:"2% auto",display:"block" }}
                />
          </Parallax>

          </Col>
        </Row>
      </Section>
      <RelatedWorks left="arrimate" right="logos" />
      <Footer />
    </Animation>
  );
}

export default LadderCupPage;
