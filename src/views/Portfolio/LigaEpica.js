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


const LigaEpicaPage = () => {
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
            <Title size="4rem" fontWeight="bold" letterSpacing="-3px">Liga Épica</Title>
            <Title size="2rem" fontWeight="500">Aplicación de Prode sobre fútbol</Title>
            <Title color="#000" size="1.5rem" fontWeight="500">Descripción de trabajo</Title>
            <Paragraph color="#000" size="1rem">
              Próximamente más desarrollo...
            </Paragraph>

          </Col>
          <Col>
            <Title>Elementos</Title>
            <ElementsList>
              <li>
                • Diseño UX/UI.
              </li>
              <li>
                • Desarrollo sitio web y App.
              </li>
              <li>
                • Diseño de logo.
              </li>
            </ElementsList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen0.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "800px",marginBottom:"2%" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen1.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "800px",marginBottom:"2%" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen2.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "800px",marginBottom:"2%" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen3.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "500px" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen4.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "500px" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen5.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "500px" }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/ligaepica/screen6.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "500px" }}
              />
            </Parallax>

          </Col>
        </Row>
      </Section>
      <RelatedWorks left="fpd" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default LigaEpicaPage;
