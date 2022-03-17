
import styled from 'styled-components';


const Title = styled.h1`
        font-size:  ${props => props.size || "1.8rem"};
        text-align:${props => props.textAlign || "left"};
    `;

export default Title;