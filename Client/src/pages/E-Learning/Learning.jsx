import React from 'react'
import './learning.scss'
import Cards from './Cards'
import StudentsTestimonials from './StudentsTestimonials'
import Testimonials from '../Home/Testimonials'
import Employees from '../Home/Employees'

function Learning() {
  return (
<div>

    <div className='Learnings'>

{/* ------------------------------------ */}
<div className="internRemote">

<div className="btnLearning">

  <button >Work Remotely</button>

</div>

</div>
{/* ------------------------------------ */}

    </div>

<br /> <br /> <br />
    <Cards/>


    <h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>Hear From Our Students</h3>
<StudentsTestimonials/>
<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>Current Employees</h3>
 <Employees/>


<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>What Companies Say About Us</h3>
<Testimonials/>
</div>


  )
}


export default Learning