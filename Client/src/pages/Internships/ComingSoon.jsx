// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import products from '../../components/ComingSoonProducts';
// import './Coming.scss'; // Import your SCSS file

// const ComingSoon = () => {
//   return (

// <div className='headComing' >
    
//       Certification and Awards
   


// <div className="firstDiv">



// <div className="ContainerStyle">

   

// <img src="https://socialswirl.org/assets/Certification-54ba4ccd.jpeg" alt="Certification" />


// </div>









//     <div className="mainComing">

//       <Swiper   className="swiper"
//         spaceBetween={3}
//         slidesPerView={1}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//       >
//         {products.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="imgDiv">
//               <img src={item.image} alt={item.title} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>

//     </div></div>
//   );
// };

// export default ComingSoon;























import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import products from '../../components/ComingSoonProducts';
import './Coming.scss'; // Import your SCSS file

const ComingSoon = () => {
  return (

<div className='headDivMain' >
    
    <div className="watch">
    <div className="div1">
    <h1> Certification and Awards</h1> 
      </div>


<div className="div2">

<div className="ContainerStyle">
<img src="https://socialswirl.org/assets/Certification-54ba4ccd.jpeg" alt="Certification" />
</div>

</div>

<div className="div3">
   <h1> Certified</h1>
</div>
</div>


<div className="com">
    <div className="mainComing">

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
    </div>
  );
};

export default ComingSoon;
