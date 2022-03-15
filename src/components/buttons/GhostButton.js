
import styled from 'styled-components';


const GhostButton = styled.a`
        font-size:  ${props => props.size || "1.5rem"};
        text-align:${props => props.textAlign || "left"};
    `;

export default GhostButton;
