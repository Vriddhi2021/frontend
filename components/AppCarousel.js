import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import TournamentsFormat from "../components/tournamentsFormat";
// import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function AppCarousel() {
    return (
       <div className="mx-auto a__sportsBg mt-5">
            <div className="col-11 col-md-10 mx-auto py-5">
            <div className="container-fluid containerBg mt-4 py-5">
                <p className="_text formatTitle" style={{ color: "white", textAlign: "center", padding:'10px', fontSize:'30px', fontWeight: 'bold'}}>AVAILABLE ESPORTS</p>
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={false}
                    // slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    slidesPerView={5}
                    loop={false}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        // depth: 5,
                        modifier: 5,
                        slideShadows: false
                    }}
                    breakpoints={{
                            // when window width is >= 640px
                            640: {
                            width: 640,
                            slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                            width: 768,
                            slidesPerView: 2,
                            },
                        }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/6.png" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <TournamentsFormat/>
        </div>
       </div>
    );
}