// {/* 
// 

{/* <div>   <h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>Current Employees</h3>

<Employees/>

<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>What Companies Say About Us</h3>
<Testimonials/>

</div> */} 


import React from 'react';
import './home.css'; // Import your CSS file
import logoImg from '../../assets/logo.jpg'; // Adjust your path if necessary
import Home1 from './Home1';
import Home2 from './Home2';
import Testimonials from './Testimonials';
import Employees from './Employees';

function Home() {
    return (
        <div className="home1">
        <div className="container">
            <div className="home-page">
                <div className="content">
                    <div className='content1'>
                        <h1 className='h1'>Social Swirl</h1>
                        <p className='para1'>Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations.</p>
                        <div className="btns">
                            <div className="btn">
                                <img src="https://socialswirl.org/assets/hero_rocket_icon-41ab8512.png" alt="loading" />
                                <p>Feasible Timings</p>
                            </div>
                            <div className="btn">
                                <img src="https://socialswirl.org/assets/hero_refresh_icon-72d5c5a1.png" alt="loading" />
                                <p>Project Based Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img src={logoImg} alt="loading" />
            </div>



        </div>

{/*  */}
<Home1/>
<div><br /></div> 
<Home2/>








 <div>  

   <h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>Current Employees</h3>

 <Employees/>

<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>What Companies Say About Us</h3>
<Testimonials/>



</div>  








{/*  */}
</div>
    );
}

export default Home;
