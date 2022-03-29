import styled from 'styled-components';
import { motion } from "framer-motion";

const Pulse = styled(motion.div)`
    border: 3px solid ${props => props.color || "rgb(255,0,0)"};
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    z-index:2
`

const Dot = styled(motion.div)`
    background-color: rgba(255,0,0,.8);
    background-color: ${props => props.color || "rgba(255,0,0,.7)"};
    border-radius: 50%;
    height: 80%;
    width: 80%;
    position: absolute;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    z-index:3
`
export { Pulse, Dot };
