import React from 'react'
import '../pages/Home.css'
import advantagemobileimage from '../assets/advantagemobileimage.png'
import bell from '../assets/bell.png'
import star1 from '../assets/Star1.png'
import redblur from '../assets/redblur.png'



const Advantage = () => {
  return (
    <div className='homefeatures container d-flex align-items-center justify-items-center bg-light px-0 advnatage position-relative'>
      <div className='redBlurfeaturesad'>
  <img src={redblur} alt='redblur' className='img-fluid'/>
</div> 
      <div className="starad position-absolute"><img src={star1} alt='star2' className='img-fluid'/></div>
       <div className=' featurestext  w-100 h-100 ps-5 mqps-0 mqorder1'data-aos="fade-right"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h3 className='mb-0 text-uppercase'>Advantages</h3>
        <h2 className='mb-3 text-capitalize'>Why Choose uifry?</h2>
        <ul className='list-unstyled '>
          <li className=''>
            <p className='mb-2 mqp '><span><img src={bell} className=' me-2 icon2'/></span><span className='faetureheadingp fs-3 hoverred pt-3'>Clever Notifications</span></p>
            <p className='featurep '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </li>

          
        </ul>
      </div> 
      <div className='d-flex justify-content-center align-items-center mqw-100 '>
        <img src={advantagemobileimage} alt="mobilewithlines"  className='img-fluid mobilewithlines mobilewithlines' style={{rotate:"-14deg"}}/>
      </div>

      
      
    </div>
  )
}

export default Advantage