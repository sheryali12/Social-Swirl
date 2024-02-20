import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './StudentsTestimonials.scss';
import products from '../../components/Product';
import { useMediaQuery } from '@material-ui/core';

const StudentsTestimonials = () => {
  const isMobile = useMediaQuery('(max-width:650px)'); 
  const isMedium = useMediaQuery('(min-width:650px) and (max-width:1124px)');
  
  return (
    <div className="StudentsTestimonial">
      
      <Swiper
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : (isMedium ? 2 : 3)} 
        autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{paddingLeft:'20px', paddingRight:'5px'}}>
              <div className="testimonialStudent">
                <div className='divP'>
                  <div style={{padding:'20px'}}>
                    <p>{item.description}</p>
                  </div>
                </div>
                <hr/>
                <div className="textss">
                  <h3 style={{color:'#5F9BCE', fontFamily:'Chivo'}}>
                    {item.title} <span style={{color:'black', fontFamily:'Chivo'}}>{item.subTitle}</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StudentsTestimonials;
