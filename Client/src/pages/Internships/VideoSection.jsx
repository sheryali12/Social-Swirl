import React from 'react'
import './videoSection.scss'

function VideoSection() {
  return (

    

    <div className='SectionMain'>

        <p className='headingMain'>
             Video Tutorials
         </p>



<div className="leftRightDiv">

<div className="leftDiv">
Learn Canva , and Become an Expert in Drag and Drop Designing.
</div>






<div className="rightDiv">
        <iframe
          title="Canva Tutorial"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_XOWhA1dK7Y"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>





</div>













    </div>
  )
}

export default VideoSection