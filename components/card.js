import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Productone from './product';
import Product2 from './itemslist/product2';
import Product3 from './itemslist/product3';
import Product4 from './itemslist/product4';
import Product5 from './itemslist/product5';
import Product6 from './itemslist/product6';
import Product7 from './itemslist/product7';
import Product8 from './itemslist/product8';
import Product9 from './itemslist/product9';


// import Mainrow from '../pages/mainrow';



const Card = () => {
  return (
    <Swiper
        slidesPerView={6}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
      >
       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide ><Productone /></SwiperSlide>
        <SwiperSlide><Product2 /></SwiperSlide>
        <SwiperSlide><Product3 /></SwiperSlide>
        <SwiperSlide><Product4 /> </SwiperSlide>
        <SwiperSlide><Product5 /></SwiperSlide>
        <SwiperSlide><Product6 /></SwiperSlide>
        <SwiperSlide><Product7 /></SwiperSlide>
        <SwiperSlide><Product8 /></SwiperSlide>
        <SwiperSlide><Product9 /></SwiperSlide>
      </Swiper>
      </Swiper>
      
  )
}

export default Card;