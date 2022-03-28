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
                <SliderTitle>Por dentro</SliderTitle>
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
                                <SwiperImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </SliderContainer>
            <Separator fill="#000" backgroundColor="#fff" translateY="-1px" />
        </>
    )
}

export default AppSection;