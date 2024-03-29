import React from 'react'
import Offers from './Offers'
import WorkType from './WorkType'
import Coming1 from './Coming1'
import Employees from '../Home/Employees'
import Testimonials from '../Home/Testimonials'
import './RemoteJobs.scss'

function RemoteJobs() {
  return (
   
    <div className='remoteJobs'>
       <div className="RemoteJobsMain">

<WorkType/>

<Offers/>


<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>
    Current Employees
</h3>
<Employees/>

<Coming1/>


<h3 style={{ textAlign:'center', fontSize:'3rem', fontFamily:'Comfortaa', fontWeight:'900px', color:'#212529'}}>What Companies Say About Us
</h3>

<Testimonials/>

</div>
    </div>
  )
}

export default RemoteJobs