import {
    Row,
    Container,
    Col
} from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from "framer-motion";
import './HomePortfolioGrid';
import { Link } from "react-router-dom";

const GoLink = styled(Link)`
        background-image: ${props => props.backgroundImage || ""};
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 390px;
        margin-bottom: 1.5rem};
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
    maxWidth: "30%",
    zIndex: 2
};



const HomeGridItem = ({
    backgroundImage,
    logoImage,
    delay,
    marginBottom,
    to
}) => {


    const textMotion = {
        rest: {
            scale: .98,
            y: 0,
            filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.15)",
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            scale: 1.1,
            y: -10,
            filter: "drop-shadow(0px 0px 15px rgba(0,0,0,1))",
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeOut"
            }
        }
    };

    const backgroundMotion = {
        rest: {
            scale: 1,
            filter: "grayscale(0%)",
            opacity: .5,
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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                viewport={{ once: true }}
            >
                <motion.div initial="rest" whileHover="hover" animate="rest">
                    <GoLink to={to} >
                        <motion.span style={{ ...spanStyle, backgroundImage: backgroundImage }} variants={backgroundMotion} />
                        <motion.img src={logoImage} variants={textMotion} style={ImageStyle} />
                    </GoLink>
                </motion.div>
            </motion.div>
        </Col>
    );
}


export default HomeGridItem;