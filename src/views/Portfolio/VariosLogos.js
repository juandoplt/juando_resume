import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Paragraph, Title } from "../../components/text";
import Animation from "../../utils/animation";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import AnimatedListItem from "../../components/portfolio/AnimatedListItem";
import { motion } from "framer-motion"
import Parallax from "../../components/general/ParrallaxImages";
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


const VariosLogosPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
            <Title size="4rem" fontWeight="bold" letterSpacing="-3px" textAlign="center">Logos Varios</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/logos/logo-oready.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "300px", display: "block", margin: "4% auto" }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/logos/logo-1block.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "300px", display: "block", margin: "4% auto" }}
              />
            </Parallax>
          </Col>
          <Col>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/logos/logo-laddercup.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "300px", display: "block", margin: "4% auto" }}
              />
            </Parallax>
          </Col>


      </Row>
      <Row>
          <Col>
            <Title size="1rem" fontWeight="700" letterSpacing="1px" textAlign="center">Próximamente más desarrollo...</Title>
          </Col>
      </Row>
    </Section>
    </Animation >
  );
}

export default VariosLogosPage;
