import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { Paragraph, Title } from "../../components/text";
import Animation from "../../utils/animation";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import AnimatedListItem from "../../components/portfolio/AnimatedListItem";
import { motion, useViewportScroll, useTransform, motionValue, AnimatePresence } from "framer-motion";
import RelatedWorks from "../../components/general/RelatedWorks";
import Footer from "../../components/general/Footer";
import Separator from "../../components/general/Separator";
import useWindowSize from "../../utils/useWindowSize";
import { images } from "../../data/imagesData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";


const Section = styled(Container)`
    padding-top:5rem;
    color:#3a3a3a;
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

const Titular = styled(Title)`
  text-align: left;
  font-weight: 700;
  color: #fff;
  font-size: 4rem;
  text-align:center;
  @media (min-width: 576px) { 
    text-align:left;
  }
`

const Subtitle = styled(Title)`
  text-align: left;
  font-weight: 500;
  font-Size: 1.6rem;
  color: #fff;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align:center;
  @media (min-width: 576px) { 
    text-align:left;
  }
`

const Description = styled(Paragraph)`
  text-align: left;
  color: #fff;
  font-size: .9rem;
  max-width: none;
  text-align:center;
  @media (min-width: 576px) { 
    max-width: 50%;
    text-align:left;
  }
`

const Hero = styled.div`
  background-color: #000;
  position: relative;
  overflow: hidden;
  align-items: flex-start;
  display: flex;
  @media (min-width: 576px) { 
    align-items:center;
  }
`

const HeroDescription = styled(Row)`
  height: 90vh;
  align-items: flex-start;
  @media (min-width: 576px) { 
    align-items:center;
  }
`


const FpdPage = () => {
  const { width } = useWindowSize();

  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(scrollYProgress, ["#000", "#000"], ["#fff", "#fff"]);

  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  const firstPhone = {
    x: width > 500 ? [1000, -350] : [0, -90],
    y: width > 500 ? [50, 10] : [1000, 220],
    rotate: [5, 0],
    scale: width > 500 ? [.7, .7] : [.4, .4]
  }

  const secondPhone = {
    x: width > 500 ? [1000, -200] : [0, 0],
    y: width > 500 ? [70, -20] : [1000, 200],
    rotate: [5, 0],
    scale: width > 500 ? [.7, .8] : [.4, .4]
  }

  const thirdPhone = {
    x: width > 500 ? [1000, -50] : [0, 110],
    y: width > 500 ? [50, 10] : [1000, 220],
    rotate: [5, 0],
    scale: width > 500 ? [.7, .7] : [.4, .4]
  }

  const transitionMobilePhone = {
    type: "spring",
    stiffness: 0,
    duration: 3,
    delay: .2
  }

  const transition = {
    delay: 0.2
  }
  return (

    <Animation transition={.45}>
      <Hero>
        <motion.div
          animate={firstPhone}
          transition={transitionMobilePhone}
          style={{ position: "absolute", right: 0, zIndex: 3 }}
        >
          <img src={require('../../assets/images/fpd/phone_01.png')}
          />
        </motion.div>
        <motion.div
          animate={secondPhone}
          transition={transitionMobilePhone}
          style={{ position: "absolute", right: 0, zIndex: 4 }}
        >
          <img src={require('../../assets/images/fpd/phone_03.png')}
          />
        </motion.div>
        <motion.div
          animate={thirdPhone}
          transition={transitionMobilePhone}
          style={{ position: "absolute", right: 0, zIndex: 3 }}
        >
          <img src={require('../../assets/images/fpd/phone_04.png')}
          />
        </motion.div>
        <Section>
          <HeroDescription>
            <Col>
              <Titular>FPD</Titular>
              <Subtitle>Portal de estadísticas y noticias de fútbol</Subtitle>
              <Description>
                Este es uno de los proyectos más grandes realizados, branding, desarrollo web y mobile, estructuración del backend, producción audiovisual y diseño de la interfaz y la experiencia de usuario de la app mobile.
              </Description>
            </Col>
          </HeroDescription>
        </Section>
      </Hero>
      <Separator backgroundColor="#fff" fill="#000" />
      <Section style={{ paddingTop: "2%", paddingBottom: "2%", height: "100vh" }}>
        <Row style={{ alignItems: "center" }}>
          <Col style={{ position: "relative", paddingTop: "25%", paddingBottom: "25%" }}>
            <motion.div
              whileInView={{
                x: width > 500 ? [-1000, 80] : [0, -90],
                y: width > 500 ? [0, 0] : [1000, 220],
                rotate: [5, 0],
                scale: width > 500 ? [.7, .8] : [.4, .4]
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 0,
                duration: 2,
                delay: .2
              }}
              style={{ position: "absolute", top: 0 }}
            >
              <motion.img
                src={require('../../assets/images/fpd/iphone-4.png')}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 3
                }}
              />
            </motion.div>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                x: width > 500 ? [80, 80] : [0, -90],
                y: width > 500 ? [0, 0] : [1000, 220],
                scale: width > 500 ? [.8, .8] : [.4, .4]
              }}
              transition={{
                type: "spring",
                stiffness: 0,
                duration: 1,
                delay: 3
              }}
              viewport={{ once: true }}
              style={{ position: "absolute", top: 0, opacity: 0 }}
            >
              <img src={require('../../assets/images/fpd/phone_04.png')}
              />
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}

            >
              <Title>Elementos</Title>
              <ElementsList>
                <li>
                  • Diseño UX/UI.
                </li>
                <li>
                  • Desarrollo App mobile y sitio web.
                </li>
                <li>
                  • Rediseño de logo.
                </li>
                <li>
                  • Producción audiovisual.
                </li>
              </ElementsList>
              <Title>Herramientas utilizadas</Title>
              <ToolsList>
                <AnimatedListItem delay={.1} text="React JS" />
                <AnimatedListItem delay={.2} text="React Native" />
                <AnimatedListItem delay={.3} text="Wordpress" />
                <AnimatedListItem delay={.4} text="Html" />
                <AnimatedListItem delay={.5} text="JS" />
                <AnimatedListItem delay={.6} text="Photoshop" />
                <AnimatedListItem delay={.7} text="Premiere" />
                <AnimatedListItem delay={.8} text="After effects" />
                <AnimatedListItem delay={.9} text="Mysql" />
              </ToolsList>
            </motion.div>
          </Col>
        </Row>
      </Section>
      <Separator backgroundColor="#efefef" color="white" />
      <div style={{ backgroundColor: "#efefef", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <motion.h1 style={{ textAlign: "center", textTransform: "uppercase" }}>El logo</motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ x: 130, scale: 1, opacity: 1 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <motion.img
              whileInView={{ x: 130, scale: 1, opacity: 0 }}
              transition={{ duration: .5, delay: 2 }}
              viewport={{ once: true }}
              src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/old_logo.png'}`} style={{ maxHeight: "600px" }}
            />
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ x: -120, scale: 1, opacity: 1 }}
            transition={{ duration: .5, delay: 1.5 }}
            viewport={{ once: true }}
            src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/logo.png'}`} style={{ maxHeight: "600px" }}
          />
        </motion.div>
        <motion.p style={{ maxWidth: "40%", textAlign: "center" }}>El antiguo logotipo de FPD no gritaba lo suficiente "fútbol". </motion.p>
        <motion.p style={{ maxWidth: "40%", textAlign: "center" }}>Para el rediseño decidí ir por algo más obvio y que a su vez muestre una visión más premium.</motion.p>
      </div>
      <Separator backgroundColor="white" fill="#efefef" />
      <Container style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <Row>
          <Col>
            <motion.h1 style={{ textTransform: "uppercase", fontSize: "2.9rem" }}>Nuevas rutas</motion.h1>
            <motion.p style={{ width: "70%", fontSize: "1.2rem", letterSpacing: "-1px" }}>
              Era necesaria una nueva dirección para renovar la
              producto y ofrecer algo diferente al
              competencia.
              No solo en branding y diseño, sino también en
              tecnología y producto en general.
              Mi papel era liderar el equipo en un rediseño,
              el cambio tecnológico y la creación de nuevos
              productos
              Tuve que hacer todo el Diseño UX/UI, parte del
              desarrollo, y tuvo visión para el futuro de nuestra
              propia API, ya que tenía planes de hacer la aplicación más grande.
            </motion.p>
          </Col>
        </Row>
      </Container>
      <Separator backgroundColor="#000" fill="#fff" />
      <div style={{ backgroundColor: "#000", paddingTop: "5%", paddingBottom: "5%" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          // centeredSlides={true}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          modules={[Pagination]}
        >
          {images[0].mockups.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`} style={{ maxHeight: "600px" }} />
              </SwiperSlide>
            )
          })}
        </Swiper>



      </div>
      <Separator backgroundColor="#fff" fill="#000" />
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <>
              <motion.div
                whileInView={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .2 }}
                viewport={{ once: true }}
                style={{ border: "3px solid rgb(255,0,0)", borderRadius: "50%", height: "20px", width: "20px", position: "absolute", top: 45, left: 45 }}
              />
              <motion.div
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .3 }}
                viewport={{ once: true }}
                style={{ backgroundColor: "rgb(255,0,0)", borderRadius: "50%", height: "15px", width: "15px", position: "absolute", top: 45, left: 45 }}
              />
            </>
            <>
              <motion.div
                whileInView={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .8 }}
                viewport={{ once: true }}
                style={{ border: "3px solid rgb(255,0,0)", borderRadius: "50%", height: "20px", width: "20px", position: "absolute", top: 100, left: 45 }}
              />
              <motion.div
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: .8 }}
                viewport={{ once: true }}
                style={{ backgroundColor: "rgb(255,0,0)", borderRadius: "50%", height: "20px", width: "20px", position: "absolute", top: 100, left: 45 }}
              />
            </>

            <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_01.png'}`} style={{ maxHeight: "600px" }} />
          </Col>
        </Row>
      </Container>
      <RelatedWorks left="mastenis" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default FpdPage;
