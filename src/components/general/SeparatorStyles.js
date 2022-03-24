import styled from 'styled-components';


const SvgContainer = styled.div`
    background-color:${props => props.backgroundColor || "#212529"};
    width:100%;
`

const SvgItem = styled.svg`
    fill: ${props => props.fill || "#fff"};
    transform: translateY(${props => props.translateY || 0});
`

export { SvgContainer, SvgItem };

