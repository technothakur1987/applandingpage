import React from 'react'
import '../pages/Home.css'
import star1 from '../assets/Star1.png'

const Faq = () => {
  return (
    <div className='container bg-light py-5 faq' data-aos="fade-right"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h2 className='faqh2'>FAQ</h2>
        <h3 className='faqh3 '>Frequently Asked Question</h3>
        <div className="staradfaq position-absolute"><img src={star1} alt="star2"/></div>
        <div className='row mt-5 '>
            <div className="col-md-6 redbg py-4 px-4 mqorder-1">
                <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="col-md-6 whitebg py-4 px-4 bg-light mqorder-2">
            <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            
            </div>
            <div className="col-md-6 whitebg py-4 px-4 bg-light mqorder-4">
            <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            
            </div>
            <div className="col-md-6 redbg py-4 px-4 mqorder-3">
                <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="col-md-6 redbg py-4 px-4 mqorder-5">
                <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className="col-md-6 whitebg py-4 px-4 bg-light mqorder-6">
            <h2>the best financial accounting app ever!</h2>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            
            </div>
            
        </div>
    </div>
  )
}

export default Faq