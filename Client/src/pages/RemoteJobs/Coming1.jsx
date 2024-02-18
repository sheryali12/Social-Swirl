

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import products from '../../components/ComingSoonProducts';
import './Comings1.scss'; 

const Coming1 = () => {
  return (
<div className="mainComingSoon">

<div className='mainComing' >

      <Swiper   className="swiper"
        spaceBetween={3}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="imgDiv">
              <img src={item.image} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  );
};

export default Coming1