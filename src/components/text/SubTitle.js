
import styled from 'styled-components';


const SubTitle = styled.h2`
        font-size:  ${props => props.size || "1.5rem"};
        text-align:${props => props.textAlign || "left"};
    `;

export default SubTitle;
