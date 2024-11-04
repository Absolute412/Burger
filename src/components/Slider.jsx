import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import burger1 from "../assets/img/b1.png"
import burger2 from "../assets/img/b2.jpg"
import burger3 from "../assets/img/b3.jpg"
import burger4 from "../assets/img/b4.jpg"

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: burger1,
            alt: "Burger 1",
        },
        {
            id: 2,
            image: burger2,
            alt: "Burger 2",
        },
        {
            id: 3,
            image: burger3,
            alt: "Burger 3",
        },
        {
            id: 4,
            image: burger4,
            alt: "Burger 4",
        },
    ];

    return (
        <div className='slide-container'>
            <Swiper
                spaceBetween = {30}
                centeredSlides = {true}
                autoplay = {{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination = {{
                    clickable: true,
                }}
                navigation = {true}
                modules={[Autoplay, Pagination, Navigation]}
                className='swiper'
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} alt={slide.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider