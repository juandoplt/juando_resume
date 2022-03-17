import * as React from "react";

import { Paragraph } from "../../components/text";
import Animation from "../../utils/animation";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { images } from "../../data/imagesData";

import styled, { css } from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";

const Section = styled.div`
    padding-top:5rem;
    padding-bottom:5rem;
`

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
  hover: { scale: 1.1 }
};

const Thumbnail = ({ id, i }) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/image/${i}`}>
        <motion.img
          src={`https://juandoplt.github.io/juando_resume/img/${id}.jpg`}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
  </motion.div>
);


const Portfolio = () => {
  return (
    <Animation transition={.45}>
      <Section>
        <Container>
          <Row>
            <Col>
              <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {images.map((id, i) => (
                  <Thumbnail key={id} id={id} i={i} />
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Animation>
  );
}

export default Portfolio;