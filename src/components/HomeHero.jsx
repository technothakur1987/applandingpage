import React from 'react'
import '../pages/Home.css'
import star1 from '../assets/Star1.png'
import mobile1 from '../assets/mobile1.png'
import mobile2 from '../assets/mobile2.png'
import roundlines from '../assets/roundlines.png'
import herodownimage from '../assets/herodownimage.png'
import whitearrow from '../assets/whitearrow.png'
import watchvideo from '../assets/watchvideo.png'



const HomeHero = () => {
  return (
    <div className='container position-relative home bg-light mt-3  '>
      <div className="star1 position-absolute"><img src={star1} alt='star1'/></div>
      
      <div className='redBlur'></div>
      <div className="star2 position-absolute"><img src={star1} alt='star2'/></div>
       <div className="rightTopTextWrapper pt-5   pb-5" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      
      <h2>make the best financial decisions</h2>
      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
      <div className='btn-wrqapper'>
      <button className='btn btn-sm btn-dark py-2 px-4 herobtn me-2' onClick={()=>{
        alert('test')
      }}>Get Started <img src={whitearrow} alt="whitearrow"  /></button>
      <button className='btn btn-sm btn-light py-2 px-4 herobtn'><img src={watchvideo} alt="watchvideo" className='me-1' />Watch Video</button>
      </div>

    </div>
      <div className="rightDownImageWrapper  ">
        <img src={herodownimage} alt='star3'/>
      </div>
      <div className="star3 position-absolute"><img src={star1} alt='star2'/></div> 
      <div className='img-section position-absolute bg-light'>
        <img src={mobile2} alt="mobile2"className='position-absolute img1'/>
        <img src={mobile1} alt="mobile1"className='position-absolute img2'/>
        <img src={mobile2} alt="mobile2"className='position-absolute img3'/>
        <img src={roundlines} alt="mobile2"className='position-absolute img4'/>
        
       
      </div>
     
    </div>
  )
}

export default HomeHero