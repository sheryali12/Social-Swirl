import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Testimonials.scss';
import products from '../../components/Products2';
import { useMediaQuery } from '@material-ui/core';

const Testimonials = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  
  return (
    <div className="mainDiv">
      
      <Swiper
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : 3} 

        autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial">
              <div className='divPara'>
                <p>{item.description}</p>
              </div>
              <hr/>
              <div className="text">
                <h3 style={{color:'#5F9BCE', fontFamily:'Chivo'}}>
                  {item.title} <span style={{color:'black', fontFamily:'Chivo'}}>{item.subTitle}</span>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
