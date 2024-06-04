import React from 'react'
import '../pages/Home.css'
import custommobileimage from '../assets/custommobileimage.png'
import redbgstar from '../assets/redbgstar.png'
import star1 from '../assets/Star1.png'
import redblur from '../assets/redblur.png'



const Custom = () => {
  return (
    <div className='homefeatures container d-flex align-items-center justify-items-center bg-light px-0 position-relative'>
      <div className='redBlurfeaturescus'>
  <img src={redblur} alt='redblur' className='img-fluid'/>
</div>
    <div className="starad1 position-absolute"><img src={star1} alt='star2' className='img-fluid'/></div>
    <div className="starad2 position-absolute"><img src={star1} alt='star2' /></div>
    <div className='d-flex justify-content-center align-items-center mqw-100'>
      <img src={custommobileimage} alt="mobilewithlines"  className='img-fluid custommobileimage'/>
    </div>
     <div className=' featurestext  w-100 h-100 'data-aos="fade-left"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      
      <ul className='list-unstyled '>
      <li className=''>
            <p className='mb-2 mqp '><span><img src={redbgstar} className=' me-2 icon2'/></span><span className='faetureheadingp fs-3 hoverred'>Fully Customizable</span></p>
            <p className='featurep '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </li>

        
      </ul>
    </div> 

    
    
  </div>
  )
}

export default Custom