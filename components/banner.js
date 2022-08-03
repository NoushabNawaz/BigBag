import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const banner = () => {
  return (
    <div className='relative'>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
            <div>
                <img loading='lazy' src='/1.png' alt='' />
            </div>
            <div>
                <img loading='lazy' src="/banner2.webp" alt="" />
            </div>
            <div>
                <img loading='lazy' src="3.png" alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default banner