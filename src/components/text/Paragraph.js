
import styled from 'styled-components';
const Paragraph = styled.p`
        font-size:  ${props => props.size || "1.1rem"};
        text-align: ${props => props.textAlign || "left"};
        color: ${props => props.color || "#fff"};
    `;

export default Paragraph;
