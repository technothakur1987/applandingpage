import React from 'react'
import '../pages/Home.css'
import blackbox from '../assets/blackbox.png'
import star1 from '../assets/Star1.png'

const BlackBox = () => {
  return (
    <div className='container bg-light mb-5' data-aos="zoom-in"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <div className="starad position-absolute mb-0 mqdnone"><img src={star1} alt='star2'/></div>
        <div className="starleft position-absolute mb-0"><img src={star1} alt='star2'/></div>
        <img src={blackbox} alt="blackbox" className='img-fluid bbimage'/>
    </div>
  )
}

export default BlackBox