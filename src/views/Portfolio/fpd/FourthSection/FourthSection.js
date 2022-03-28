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
import Parallax from '../../../../components/general/ParrallaxImages';

const FourthSection = () => {

    return (
        <>
            <div style={{ display: 'flex', overflow: "hidden", backgroundColor: "#000", height: "100vh", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", position: "absolute", zIndex: 2, background: "rgb(0 0 0 / 75%)" }}>
                    <h1 style={{ color: "#fff", textTransform: "uppercase", textAlign: "center", textShadow: "0px 0 50px black" }}>La APp</h1>
                </div>
                <div style={{ display: 'flex',width: "100%", left: 0, position: "absolute", zIndex: 0, minHeight: "100vh", paddingTop: "5%", flexWrap: 'wrap', transform: "rotate(-26deg)" }}>
                    <Parallax offset={-202}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-1.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={100}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-2.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={300}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-3.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={-200}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-4.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={200}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-5.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={104}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-6.png'}`} style={{ width: 200, marginRight: 30,filter:"blur(2px)" }} />
                    </Parallax>
                    <Parallax offset={-50}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-7.png'}`} style={{ width: 200, marginRight: 30, filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))" }} />
                    </Parallax>
                    <Parallax offset={-90}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-8.png'}`} style={{ width: 200, marginRight: 30, filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))" }} />
                    </Parallax>
                    <Parallax offset={100}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-9.png'}`} style={{ width: 200, marginRight: 30, filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={44}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-10.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={-44}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-11.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={84}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-12.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={68}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-13.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={-42}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-14.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={20}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-15.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                    <Parallax offset={-54}>
                        <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/iphone-16.png'}`} style={{ width: 200, marginRight: 30 , filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.6))"}} />
                    </Parallax>
                </div>

            </div>
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
        </>
    )
}

export default FourthSection;