import styled from 'styled-components';


const SvgContainer = styled.div`background-color:${props => props.backgroundColor || "#212529"}`
const SvgItem = styled.svg`fill: ${props => props.fill || "#fff"}`

export { SvgContainer, SvgItem };
