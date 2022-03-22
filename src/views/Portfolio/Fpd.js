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
import { wrap } from "popmotion";


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


  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const [[page, direction], setPage] = useState([0, 0]);
  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const imageIndex = wrap(0, images.length, page);


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
      <Separator backgroundColor="#3a3a3a" fill="#fff" />
      <div style={{ backgroundColor: "#3a3a3a", width: " 455px", height: " 120px", overflow: "hidden" }}>
        <AnimatePresence initial={false} custom={direction}>
          {images[0].mockups.map((item, i) => {
            return (
              <motion.img
                key={i}
                // key={i}
                // src={require(`../../as ${item.thumb}.jpg`)}
                src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            )
          })}


        </AnimatePresence>
      </div>
      <>
        <div className="next" style={{ fontSize: "4rem" }} onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" style={{ fontSize: "4rem" }} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </>
      <RelatedWorks left="mastenis" right="laddercup" />
      <Footer />
    </Animation>
  );
}

export default FpdPage;
