import React from 'react';
import './learning.scss';
import learningImg from '../assets/learning.jpg'

function Learning() {
    return (
        <div className="learning-page">
            <div className="content">
              <div className='content1'>
                <h1 className='h1'>Welcome To Social <br /> Swirl E-Learning</h1>
                <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dignissimos mollitia a qui voluptatibus ducimus, sunt doloribus perspiciatis deserunt br eum veniam libtrum, aliquid deserunt ut, incidunt, voluptate ratione iure eveniet qui. Officiis, beatae incidunt.</p>


                <div className="btns">

                   <button className='btn1'>button1</button>
<button className='btn2'>button2</button>
                    </div>
                </div>
            </div>

<div id='img'>
    <img src={learningImg} alt="loading" />
</div>

        </div>
    );
}


export default Learning