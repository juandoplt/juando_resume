import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from "../../../../data/imagesData";
import Separator from "../../../../components/general/Separator";
import { Pagination, EffectCards } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";


import {
    SliderContainer,
    SliderTitle,
    SwiperImage
} from "./AppSection.styles";

const AppSection = () => {

    return (
        <>
            <SliderContainer>
                <SliderTitle>Desarrollo de App</SliderTitle>
                <p  style={{fontSize:"1rem",color:"#fff",width:"70%", margin:"0 auto 5% auto",textAlign:"center"}}>
                    Como trabajo se nos pidio realizar una app de preguntas y respuestas con premios, la clave de esta aplicación es que los usuarios estarían todos conectados a la vez, con un presentador que vaya introduciendo las preguntas. Luego los que acierten podrán seguir participando.
                </p>
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    centeredSlides={true}
                    effect={"cards"}
                    grabCursor={true}
                    initialSlide={0}
                    modules={[EffectCards, Pagination]}
                    pagination={{
                        clickable: true
                    }}
                >
                    {images[2].mockups.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <SwiperImage src={`${process.env.PUBLIC_URL + '/img/portfolio/playgames/' + item}`} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </SliderContainer>
            <Separator fill="#020219" backgroundColor="#000" translateY="-2px" />
        </>
    )
}

export default AppSection;