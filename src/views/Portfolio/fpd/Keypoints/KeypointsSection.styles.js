import styled from 'styled-components'
import { Container, Row } from "react-bootstrap";

const KeyPointsContainer = styled.div`
  background-color: ${props => props.background || "white"};
  .container {
    padding-top:4%;
    padding-bottom:4%;
    overflow-x:hidden;
  }
`

const KeyPointsRow = styled(Row)`
  align-items: center;
  height: 100%;
  margin:10% 0;
  @media (min-width: 576px) { 
    //height: 100vh;
  }
`

const KeyPointsTitle = styled.h1`
  text-align:center;
  text-transform:uppercase;
  margin-bottom:3rem;
`

export {
  KeyPointsContainer,
  KeyPointsRow,
  KeyPointsTitle,
};