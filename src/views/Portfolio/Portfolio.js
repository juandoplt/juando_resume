import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Paragraph } from "../../components/text";
import Animation from "../../utils/animation";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { images } from "../../data/imagesData";
import { Plock } from "react-plock";

import styled, { css } from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import Section from '../../components/general/Section';
import Footer from "../../components/general/Footer";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    filter: "grayscale(70%) blur(4px)",
  }
};

const textVariants = {
  hover: {
    y: -150,
    opacity: 1,
  }
};

const backgroundVariants = {
  hover: {
    opacity: 1,
    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
    scale: 1.1

  }
}

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`
const MotionTitle = styled(motion.h1)`
  opacity:0;
  position:absolute;
  z-index:3;
  margin:0;
  bottom:-10px;
  color:#fff;
  text-transform:uppercase;
  font-size:2.4rem;
`



const Thumbnail = ({ id, project, thumb, title, i }) => (
  <motion.div variants={thumbnailVariants}>
    <motion.div
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/${project}`} style={{ position: "relative", display: "block", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <motion.div variants={backgroundVariants} transition={transition} style={{ opacity: 0, backgroundColor: "transparent", position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 3 }}></motion.div>
        <MotionTitle
          variants={textVariants}
          transition={transition}
        >{title}</MotionTitle>
        <motion.img
          src={`${process.env.PUBLIC_URL + '/img/portfolio/' + project + '/' + thumb + '.jpg'}`}
          alt="Portfolio"
          variants={imageVariants}
          transition={transition}
          style={{ width: "100%" }}
        />
      </Link>
    </motion.div>
  </motion.div>
);


const Portfolio = () => {
  const { pathname } = useLocation();

  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 768, columns: 2 },
    { size: 1024, columns: 3 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Animation transition={.45}>
      <Section paddingBottom="5%" paddingTop="90px">
        <Container>
          <Row>
            <Col>
              <Plock gap={15} nColumns={breakpoints}>
                {images.map((item, i) => {
                  return (<div key={item['id']} id={item['id']} ><Thumbnail i={i} project={item["project"]} thumb={item["thumb"]} title={item["title"]} /></div>)
                })}
              </Plock>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </Animation>
  );
}

export default Portfolio;
