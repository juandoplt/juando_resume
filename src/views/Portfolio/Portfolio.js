import { useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { Paragraph } from "../../components/text";
import Animation from "../../utils/animation";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { images } from "../../data/imagesData";

import styled, { css } from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import Section from '../../components/general/Section';

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

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`




const Thumbnail = ({ id, project, thumb, i }) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/${project}`}>
        <motion.img
          //src={`/img/portfolio/${project}/${thumb}.jpg`}
          src={`${process.env.PUBLIC_URL + '/img/portfolio/' + project + '/' + thumb + '.jpg'}`}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
  </motion.div>
);


const Portfolio = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <Animation transition={.45}>
      <Section paddingBottom="5%" paddingTop="7%">
        <Container>
          <Row>
            <Col>
              <MotionDiv
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {images.map((item, i) => {
                  return (<Thumbnail key={item['id']} id={item['id']} i={i} project={item["project"]} thumb={item["thumb"]} />)
                })}
              </MotionDiv>
            </Col>
          </Row>
        </Container>
      </Section>
    </Animation>
  );
}

export default Portfolio;
