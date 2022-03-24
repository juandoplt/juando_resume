import { useRef } from 'react';
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
} from "./FourthSection.styles";

const FourthSection = () => {
    const ref = useRef(null)

    return (
        <>
            <Separator backgroundColor="#000" fill="#efefef"  translateY="-2px"/>
            <SliderContainer>
                <SliderTitle>La App</SliderTitle>
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    centeredSlides={true}
                    effect={"cards"}
                    grabCursor={true}
                    initialSlide={4}
                    modules={[EffectCards, Pagination]}
                    pagination={{
                        clickable: true
                    }}
                >
                    {images[0].mockups.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <SwiperImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </SliderContainer>
            <Separator backgroundColor="#fff" fill="#000" translateY="-2px"/>
        </>
    )
}

export default FourthSection;