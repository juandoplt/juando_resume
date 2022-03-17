import styled from 'styled-components';

const Section = styled.div`
    padding-top:  ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    background-color: ${props => props.backgroundColor || "transparent"};
`

export default Section;