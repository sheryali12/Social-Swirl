import React from 'react'
import './internship.scss'
import Intern1 from './Intern1'
import ComingSoon from './ComingSoon'
import VideoSection from './VideoSection'

function Internship() {
  return (
<div>
    <div className='internshipContainer'>


<div className="intern">

<div className="btn">

  <button >Freshie No Problem ! Get Hired</button>

</div>


</div>







    </div>

     <br />

<h1 style={{display:'flex', justifyContent:'center', width:'auto', textAlign:'center', color:'#212529', fontFamily:'Comfortaa', fontSize:'48px'}}>Internship Oppertunities</h1>
<Intern1/>


<VideoSection/>

<ComingSoon/>



    </div>
  )
}

export default Internship