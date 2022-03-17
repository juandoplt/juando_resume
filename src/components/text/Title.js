
import styled from 'styled-components';


const Title = styled.h1`
        font-size:  ${props => props.size || "1.8rem"};
        text-align:${props => props.textAlign || "left"};
        font-weight:${props => props.fontWeight || "normal"};
        letter-spacing:${props => props.letterSpacing || "normal"};
        text-transform: ${props => props.textTransform || "none"};
        color: ${props => props.color || "#000"};
    `;

export default Title;
