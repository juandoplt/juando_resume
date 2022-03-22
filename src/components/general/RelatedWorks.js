import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import Section from '../general/Section';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: {
        opacity: .8,
    },
    enter: {
        opacity: 1,
        transition
    },
    exit: {
        opacity: .8,
        transition: { duration: 1.5, ...transition }
    }
};

const frameVariants = {
    hover: {
        scale: 1
    }
};

const imageVariants = {
    hover: {
        filter: "grayscale(70%)",
        scale:1.2
    }
};

const textVariants = {
    hover: {
        y: -15,
        opacity: 1,
    }
};

const backgroundVariants = {
    hover: {
        opacity: .8,
    }
}

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items:center;
`
const MotionBackground = styled(motion.div)`
    position:absolute;
    background-color:#000;
    z-index:2;
    width:100%;
    opacity:.4;
    height:100%;
`


const MotionTitle = styled(motion.h1)`
    opacity:1;
    position:absolute;
    z-index:3;
    margin:0;
    color:#fff;
    text-transform:uppercase;
    font-size:1.4rem;
    text-align:center;
`

const MotionSpan = styled(motion.span)`
display: block;
    text-align: center;
    font-size: .85rem;
    font-family: 'Roboto Mono';
    text-transform: initial;
    margin-top: 0.5rem;
    font-weight: 500;
`



const Thumbnail = ({ id, project, thumb, title, i }) => (
    <motion.div variants={thumbnailVariants}>
        <motion.div whileHover="hover" variants={frameVariants} transition={transition}>
            <Link to={`/${project}`} style={{ position: "relative", display: "block", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" ,overflow:"hidden"}}>
                <MotionTitle variants={textVariants} transition={transition}>{title} <MotionSpan>Ver trabajo</MotionSpan></MotionTitle>
                <MotionBackground transition={transition} variants={backgroundVariants} />
                <motion.img
                    src={`${process.env.PUBLIC_URL + '/img/portfolio/' + project + '/' + thumb + '.jpg'}`}
                    alt="The Barbican"
                    variants={imageVariants}
                    transition={transition}
                    style={{ width: "100%" }}
                />
            </Link>
        </motion.div>
    </motion.div>
);


const RelatedWorks = ({ left, right }) => {
    return (
        <Section paddingBottom="8%" paddingTop="5%">
            <Container>
                <Row>

                    <h1 style={{ textAlign: "center", textTransform: "uppercase", margin: "2rem 0", fontSize: "1.8rem" }}>Otros trabajos</h1>
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
