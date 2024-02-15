import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './employees.scss';
import products from '../components/Products1';

//import SwiperCore, { Autoplay } from 'swiper';
//SwiperCore.use([Autoplay]);

const Employees = () => {
  return (

<div> 
    <Swiper
      spaceBetween={50}
      slidesPerView={3} 
      autoplay={{ delay: 1000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > 
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="testimonials">
         
            <img src={item.image} alt={item.title} />
            <div className="texts">
             
              <p>{item.title}</p>
              <p>{item.description}</p>
              <button id='btn1'> Explore </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </div>
  );
}

export default Employees;
