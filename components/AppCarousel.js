import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
import SwiperCore, {
    EffectCoverflow,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function AppCarousel() {
    return (
       <div className="mx-auto a__sportsBg">
            <div className="col-11 col-md-10 mx-auto py-5">
            <div className="container-fluid containerBg py-5">
                <p className="_text" style={{ color: "white", textAlign: "center", padding:'10px', fontSize:'30px', fontWeight: 'bold'}}>AVAILABLE ESPORTS</p>
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
        </div>
       </div>
    );
}