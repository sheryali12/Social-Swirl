import React from 'react';
import './home1.scss';

const Home1 = () => {
  return (
    <div className="container00">
<div className="container">

      <div className="left-div">

        <h2 className='h2'>Welcome to Social Swirl </h2>
        <h4 style={{fontFamily:'Comfortaa', fontWeight:'2000', color:'#212529;'}}>Best Institute of Pakistan</h4>

        <p style={{color:'#212529', fontSize:'15px', lineHeight:'22px',fontWeight:'normal', fontFamily: 'poppins'}}>The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals.</p>

<button id='enrolBtn'>Enroll Now</button>

      </div>

      <div className="right-div">
        <img src="https://socialswirl.org/assets/hero_img_2-35a6ebca.jpeg" alt="Image" />
      </div>
    </div></div>
  );
}

export default Home1;
