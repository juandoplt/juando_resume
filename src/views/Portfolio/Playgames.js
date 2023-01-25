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
import ProductDescriptionSection from "./playgames/ProductDescription/ProductDescriptionSection";
import AppSection from "./playgames/App/AppSection";
import HeroSection from "./playgames/Hero/HeroSection";
import Separator from "../../components/general/Separator";

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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

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
      <HeroSection />
      <ProductDescriptionSection />
      <AppSection />
      <div style={{ backgroundColor: "#000", display: "flex", height: 400, justifyContent: "center", alignItems: "center" }}>
        
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-1.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-2.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-3.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-1.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-2.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-3.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-1.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-2.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-3.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-1.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-2.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={-20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-3.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>
        <Parallax offset={20}>
          <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/ghost-1.png'}`}
            alt="Portfolio"
            variants={imageVariants}
            transition={transition}
            style={{ width: "auto", height: "100px", margin: "5%", padding: "10%" }}
          />
        </Parallax>

      </div>
        <Separator fill="#000" backgroundColor="#fff" />
      <Section>
        <Row>
          <div style={{ marginBottom: "5%" }}>
            <Title size="3rem" textAlign="center" fontWeight="bold" letterSpacing="-3px">DESARROLLO SITIO WEB</Title>
          </div>
        </Row>
        <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-10.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", margin: "5% auto" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-11.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", margin: "5% auto" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-12.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", margin: "5% auto" }}
              />
            </Parallax>
          </Col>
        </Row>
        <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-13.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-14.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-15.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
              />
            </Parallax>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-16.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-17.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
              />
            </Parallax>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Parallax>
              <motion.img
                src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/screen-18.png'}`}
                alt="Portfolio"
                variants={imageVariants}
                transition={transition}
                style={{ width: "auto", height: "700px", marginBottom: "5%" }}
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
