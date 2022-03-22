import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import Section from '../general/Section';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: { scale: 1, opacity: .8, },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
        scale: 0.9,
        opacity: .8,
        transition: { duration: 1.5, ...transition }
    }
};

const frameVariants = {
    hover: { scale: 1 }
};

const imageVariants = {
    hover: {
        scale: 1,
        filter: "grayscale(70%)",
    }
};

const textVariants = {
    hover: {
        x: -20,
        opacity: 1,
    }
};

const backgroundVariants = {
    hover: {
        opacity: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        scale: .95
    }
}

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items:center;
`
const MotionTitle = styled(motion.h1)`
  opacity:1;
  position:absolute;
  z-index:3;
  margin:0;
  color:#fff;
  text-transform:uppercase;
  font-size:1.4rem;
`



const Thumbnail = ({ id, project, thumb, title, i }) => (
    <Link to={`/${project}`} style={{ position: "relative", display: "block", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MotionTitle
            variants={textVariants}
            transition={transition}
        >{title}</MotionTitle>
        <motion.img
            src={`${process.env.PUBLIC_URL + '/img/portfolio/' + project + '/' + thumb + '.jpg'}`}
            alt="The Barbican"
            variants={imageVariants}
            transition={transition}
        />
    </Link>
);


const RelatedWorks = ({ left, right }) => {


    return (
        <Section paddingBottom="8%" paddingTop="5%">
            <Container>
                <Row>

                    <h1 style={{ textAlign: "center", textTransform: "uppercase", margin: "2rem 0", fontSize: "1.8  rem" }}>Otros trabajos</h1>
                    <Col lg={6} md={4}>
                        <Thumbnail project={left} thumb="related_thumb" title={left} />
                    </Col>
                    <Col lg={6} md={4}>
                        <Thumbnail project={right} thumb="related_thumb" title={right} />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default RelatedWorks;
