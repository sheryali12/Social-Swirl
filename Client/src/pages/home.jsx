import React from 'react';
import './home.scss';
import logoImg from '../assets/logo.jpg'
import Home1 from './Home1';
import Home2 from './Home2';
import Testimonials from './Testimonials';
import Employees from './Employees';

function Home() {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
        <div className="home-page">
            <div className="content">
              <div className='content1'>
                <h1 className='h1'>SOCIAL SWIRL</h1>
                <p className='para1'>Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations.</p>


                <div className="btns">

                  
{/*  */}

<div style={{gap:'5px' , display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', flexDirection:'row', border:'2px solid white', borderRadius:'15px', padding:'0.6rem', boxShadow:'2px 5px 4px gray', width:'240px', height:'50px'}}>
    
    <div style={{ marginTop:'12px'}}><img  style={{width:'auto', height:'3rem'}} src="https://socialswirl.org/assets/hero_rocket_icon-41ab8512.png" alt="loading" /></div>
    <div>
        <p style={{color:'black' }}>Feasible Timings</p>
    </div>
</div>
{/*  */}
<div style={{display:'flex', flexDirection:'row', border:'2px solid white', borderRadius:'15px', padding:'0.6rem', boxShadow:'2px 5px 4px gray', width:'260px', height:'50px'}}>
    
    <div style={{ marginTop:'12px' }}><img  style={{width:'auto', height:'2.5rem' }} src="https://socialswirl.org/assets/hero_refresh_icon-72d5c5a1.png" alt="loading" /></div>
    
    <div>
        <p style={{color:'black' }}>Project Based Learning</p>
    </div>


</div>


</div>
{/*  */}

                    </div>
                </div>
            </div>

<div id='img'>
    <img src={logoImg} alt="loading" />
</div>


</div><div >

<Home1/> 
<Home2/>

<div>   <h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>Current Employees</h3>

<Employees/>

<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>What Companies Say About Us</h3>
<Testimonials/>

</div>

</div>
        </div>
    );
}

export default Home;
