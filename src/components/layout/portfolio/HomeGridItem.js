import {
    Row,
    Container,
    Col
} from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from "framer-motion";
import './HomePortfolioGrid';

const Link = styled.a`
        background-image: ${props => props.backgroundImage || ""};
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 390px;
        margin-bottom: ${props => props.marginBottom + 'rem' || 0};
        position:relative;
    `;

const spanStyle = {
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "block",
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: 1,
};

const ImageStyle = {
    maxWidth: "35%",
    zIndex: 2
};



const HomeGridItem = ({
    backgroundImage,
    logoImage,
    marginBottom,
    to
}) => {


    const textMotion = {
        rest: {
            scale: .98,
            y: 0,
            transition: {
                duration: .2,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            scale: 1.1,
            y: -10,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        }
    };

    const slashMotion = {
        rest: {
            scale: 1,
            filter: "grayscale(0%)",
            ease: "easeOut",
            duration: 0.2,
            type: "tween"
        },
        hover: {
            opacity: .4,
            filter: "grayscale(100%) blur(2px)",
            scale: .95,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
    };

    return (
        <Col lg={6}>
            <motion.div initial="rest" whileHover="hover" animate="rest">
                <Link href={to} marginBottom={marginBottom} >
                    <motion.span style={{ ...spanStyle, backgroundImage: backgroundImage }} variants={slashMotion} />
                    <motion.img src={logoImage} variants={textMotion} style={ImageStyle} />
                </Link>
            </motion.div>
        </Col>
    );
}


export default HomeGridItem;