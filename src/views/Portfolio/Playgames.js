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


const PlaygamesPage = () => {
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
            <Title size="4rem" fontWeight="bold" letterSpacing="-3px">Playgames</Title>
            <Title size="2rem" fontWeight="500">Portal de noticias gamer y juegos</Title>
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
                • Desarrollo sitio web.
              </li>
              <li>
                • Rediseño de logo.
              </li>
            </ElementsList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/001.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
            </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/02.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>

            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen0.jpg'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen1.jpg'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen2.jpg'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen3.jpg'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen4.jpg'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen5.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen6.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen7.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen8.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen9.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen10.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen11.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{width: "auto", height: "500px",marginBottom:"5%"  }}
              />
            </Parallax>
          </Col>
        </Row>
      </Section>
      <RelatedWorks left="fpd" right="mastenis" />
      <Footer />
    </Animation>
  );
}

export default PlaygamesPage;
