import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Cat1 from './utilities/cat1';
import Cat2 from './utilities/cat2';
import Cat3 from './utilities/cat3';
import Cat4 from './utilities/cat4';
import Cat5 from './utilities/cat5';
import Cat6 from './utilities/cat6';
import Cat7 from './utilities/cat7';
import Cat8 from './utilities/cat8';
import Cat9 from './utilities/cat9';
import Cat10 from './utilities/cat10';
import Cat11 from './utilities/cat11';



// import Mainrow from '../pages/mainrow';



const Category = () => {
  return (
    <Swiper
        slidesPerView={10}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper cursor-pointer"
      >
       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide ><Cat1 /></SwiperSlide>
        <SwiperSlide><Cat2 /></SwiperSlide>
        <SwiperSlide><Cat3 /></SwiperSlide>
        <SwiperSlide><Cat4 /> </SwiperSlide>
        <SwiperSlide><Cat5/> </SwiperSlide>
        <SwiperSlide><Cat6 /> </SwiperSlide>
        <SwiperSlide><Cat7 /> </SwiperSlide>
        <SwiperSlide><Cat8 /> </SwiperSlide>
        <SwiperSlide><Cat9 /></SwiperSlide>
        <SwiperSlide><Cat10 /> </SwiperSlide>
        <SwiperSlide><Cat11 /> </SwiperSlide>
        
      </Swiper>
      </Swiper>
      
  )
}

export default Category;