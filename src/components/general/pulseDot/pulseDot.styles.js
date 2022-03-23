import styled from 'styled-components';
import { motion } from "framer-motion";

const Pulse = styled(motion.div)`
    border: 3px solid rgb(255,0,0);
    border-radius: 50%;
    height:  ${props => props.height || "20px"};
    width:  ${props => props.width || "20px"};
    position: absolute;
    top:  ${props => (props.top ? props.top + 'px' : "auto")};
    left:  ${props => (props.left ? props.left + 'px' : "auto")};
    right:  ${props => (props.right ? props.right + 'px' : "auto")};
    bottom:  ${props => (props.bottom ? props.bottom + 'px' : "auto")};
    z-index:2
`

const Dot = styled(motion.div)`
    background-color: rgb(255,0,0);
    border-radius: 50%;
    height:  ${props => props.height || "12px"};
    width:  ${props => props.width || "12px"};
    position: absolute;
    top:  ${props => (props.top ? parseInt(props.top) + parseInt(4) + 'px' : "auto")};
    left:  ${props => (props.left ? parseInt(props.left) + parseInt(4) + 'px' : "auto")};
    right:  ${props => (props.right ? parseInt(props.right) + parseInt(4) + 'px' : "auto")};
    bottom:  ${props => (props.bottom ? parseInt(props.bottom) + parseInt(4) + 'px' : "auto")};
    z-index:3
`
export { Pulse, Dot };
