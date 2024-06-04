import React from 'react'
import '../pages/Home.css'
import mobilewithlines from '../assets/mobilewithlines.png'
import redstar from '../assets/redstar.png'
import cube from '../assets/cube.png'
import cube2 from '../assets/cube2.png'
import redblur from '../assets/redblur.png'

const HomeFeatures = () => {
  return (
    <div className='homefeatures container d-flex align-items-center justify-items-center bg-light px-0 position-relative'>
      <div className='redBlurfeatures1'>
  <img src={redblur} alt='redblur' className='img-fluid'/>
</div>
<div className='redBlurfeatures2'>
  <img src={redblur} alt='redblur' className='img-fluid'/>
</div> 
     
<div className='d-flex justify-content-center align-items-center mqw-100'>
 

        <img src={mobilewithlines} alt="mobilewithlines"  className='img-fluid mobilewithlines'/>
      </div>
       <div className=' featurestext  w-100 h-100 'data-aos="fade-left"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h3 className='mb-0 text text-uppercase'>Features</h3>
        <h2 className='mb-3 text-capitalize'>uifry premium</h2>
        <ul className='list-unstyled '>
          <li className=''>
            <p className='mb-1 mqp'><span><img src={redstar} className='icon me-2'/></span><span className='faetureheadingp hoverred'>budgeting intervals</span></p>
            <p className='featurep '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </li>

          <li>
            <p className='mb-1 mqp'><span><img src={cube} className='icon me-2'/></span><span className='faetureheadingp hoverred'>budgeting intervals</span></p>
            <p className='featurep'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </li>

          <li>
            <p className='mb-1 mqp'><span><img src={cube2} className='icon me-2'/></span><span className='faetureheadingp hoverred'>budgeting intervals</span></p>
            <p className='featurep'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </li>
        </ul>
      </div> 

      
      
    </div>
  )
}

export default HomeFeatures