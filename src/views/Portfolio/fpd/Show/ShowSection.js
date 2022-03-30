import Separator from "../../../../components/general/Separator";

import {
    SliderContainer,
    SliderTitle,
    SwiperImage,
    SwiperContent,
    SwiperTextContent
} from "./ShowSection.styles";
import Parallax from '../../../../components/general/ParrallaxImages';

const ShowSection = () => {

    return (
        <>
            <Separator fill="#efefef" backgroundColor="#010101" translateY="-1px" />
            <SliderContainer>
                <SliderTitle>Shows</SliderTitle>
                {/* {images[0].mockups.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <SwiperImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`} />
                            </SwiperSlide>
                        )
                    })} */}
                <Parallax customClass="parallax-video">
                    <SwiperContent className="noselect">
                        <iframe src="https://www.youtube.com/embed/NIKdwoldzIA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <SwiperTextContent>
                            <h1 style={{ color: "#fff", textTransform: "uppercase" }}>El ping pong de la China</h1>
                            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </SwiperTextContent>
                    </SwiperContent>
                </Parallax>
                <Parallax customClass="parallax-video">
                    <SwiperContent className="noselect">
                        <iframe src="https://www.youtube.com/embed/KZOQGWjlCp4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <SwiperTextContent>
                            <h1 style={{ color: "#fff", textTransform: "uppercase" }}>Modo hincha - Antonio Serpa</h1>
                            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </SwiperTextContent>
                    </SwiperContent>
                </Parallax>
                <Parallax customClass="parallax-video">
                    <SwiperContent className="noselect">
                        <iframe src="https://www.youtube.com/embed/KSsuRn3DM68" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <SwiperTextContent>

                            <h1 style={{ color: "#fff", textTransform: "uppercase" }}>Modo hincha - Ernesto Provitilo</h1>
                            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </SwiperTextContent>
                    </SwiperContent>
                </Parallax>
                <Parallax customClass="parallax-video">
                    <SwiperContent className="noselect">
                        <iframe src="https://www.youtube.com/embed/6_3s3T7pORA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <SwiperTextContent>
                            <h1 style={{ color: "#fff", textTransform: "uppercase" }}>Lo mejor de la China</h1>
                            <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </SwiperTextContent>
                    </SwiperContent>
                </Parallax>
            </SliderContainer>
        </>
    )
}

export default ShowSection;