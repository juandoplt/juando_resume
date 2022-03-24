import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from "../../../../data/imagesData";
import Separator from "../../../../components/general/Separator";
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";


const FourthSection = () => {
    return (
        <>
            <Separator backgroundColor="#000" fill="#efefef" />
            <div style={{ backgroundColor: "#000", paddingTop: "5%", paddingBottom: "5%" }}>
                <h1 style={{textAlign:"center",color:"#fff",textTransform:"uppercase",marginTop:"1rem",marginBottom:"3rem"}}>La App</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView="auto"
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    centeredSlides={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}

                    modules={[Pagination]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {images[0].mockups.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/' + item}`} style={{ maxHeight: "600px", margin: "0 auto", display: "block" }} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default FourthSection;