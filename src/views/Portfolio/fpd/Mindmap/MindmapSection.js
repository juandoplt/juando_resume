import { Col, Container } from "react-bootstrap";
import useWindowSize from '../../../../utils/useWindowSize';

import {
  MindmapContainer,
  MindmapRow,
  MindmapTitle,
} from "./MindmapSection.styles";

const MindmapSection = () => {
  const size = useWindowSize();
  console.log(size.width)
  console.log(parseInt(size.width) > 375 ? "big" : "small")
  return (
    <>
      <MindmapContainer>
        <Container>
          <MindmapTitle>Mapa de la App</MindmapTitle>
          <MindmapRow>
            {
              size.width > 375 
                ? <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/mindmap.png'}`} />
                : <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/mindmap_small.png'}`} />
            }
          </MindmapRow>
        </Container>
      </MindmapContainer>
    </>
  )
}

export default MindmapSection;