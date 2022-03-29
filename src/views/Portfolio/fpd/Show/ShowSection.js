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
} from "./ShowSection.styles";

const ShowSection = () => {

    return (
        <>
            <Separator fill="#efefef" backgroundColor="#010101" translateY="-1px" />

            <SliderContainer>
                <SliderTitle>Shows</SliderTitle>
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    centeredSlides={true}
                    grabCursor={true}
                    initialSlide={4}
                    modules={[EffectCards, Pagination]}
                    pagination={{
                        clickable: true
                    }}
                >
                    {/* {images[0].mockups.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <SwiperImage src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`} />
                            </SwiperSlide>
                        )
                    })} */}
                    <SwiperSlide>
                        <div style={{ width: 900, margin: "0 auto" }} className="noselect">
                            <h3 style={{ color: "#fff", textAlign: "center" }}>El ping pong de la China</h3>
                            <p style={{ color: "#fff", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <iframe src="https://www.youtube.com/embed/NIKdwoldzIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ width: "100%", height: 500 }}></iframe>
                            <p style={{ color: "#fff", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget. Consectetur lorem donec massa sapien faucibus et molestie ac.

</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: 900, margin: "0 auto" }} className="noselect">
                            <h3 style={{ color: "#fff", textAlign: "center" }}>Modo hincha - Antonio Serpa</h3>
                            <p style={{ color: "#fff", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <iframe src="https://www.youtube.com/embed/KZOQGWjlCp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ width: "100%", height: 500 }}></iframe>
                            <p style={{ color: "#fff", textAlign: "center" }}>Duis ut diam quam nulla porttitor. Blandit aliquam etiam erat velit scelerisque in. Tortor dignissim convallis aenean et tortor at risus viverra.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: 900, margin: "0 auto" }} className="noselect">
                        <h3 style={{ color: "#fff", textAlign: "center" }}>Modo hincha - Ernesto Provitilo</h3>
                            <p style={{ color: "#fff", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <iframe src="https://www.youtube.com/embed/KSsuRn3DM68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ width: "100%", height: 500 }}></iframe>
                            <p style={{ color: "#fff", textAlign: "center" }}>Porta nibh venenatis cras sed felis eget velit aliquet. Nisl condimentum id venenatis a condimentum vitae. Tincidunt arcu non sodales neque sodales ut.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: 900, margin: "0 auto" }} className="noselect">
                            <h3 style={{ color: "#fff", textAlign: "center" }}>Lo mejor de la China</h3>
                            <p style={{ color: "#fff", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <iframe src="https://www.youtube.com/embed/6_3s3T7pORA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ width: "100%", height: 500 }}></iframe>
                            <p style={{ color: "#fff", textAlign: "center" }}>Cras ornare arcu dui vivamus arcu felis. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Amet massa vitae tortor condimentum lacinia quis vel eros.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </SliderContainer>
        </>
    )
}

export default ShowSection;