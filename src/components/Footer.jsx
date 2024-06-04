import React from 'react'
import './Footer.css'
import Logo from '../assets/Group.png';
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="container bg-light">
        <footer className="py-5 footer">
    <div className="row ">
      <div className="col-12 col-lg-2 mb-3 mqmb-5 ">
        <h5 className='logoh5'><img src={Logo} alt="Logo" /></h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a  href="mailto:help@frybix.com" className="nav-link p-0 text-body-secondary"><span className='d-inline me-2'><img src={mail} alt="mail" className='d-inline' /></span><span className='d-inline text-capitalize text-footer '>help@frybix.com</span></a></li>
          <li className="nav-item mb-2"><a  href="telto:8109184732" className="nav-link p-0 text-body-secondary"><span className='d-inline me-2'><img src={phone} alt="mail" className='d-inline' /></span><span className='d-inline text-capitalize text-footer'>+91-8109184732</span></a></li>
          
          
        </ul>
      </div>

      <div className="col-12 col-lg-2 mb-3  mqmb-5 ">
        <h5 className='footerheading'>Links</h5>
        <ul className="nav flex-column mqflexrow">
          <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-body-secondary text-footer">Home</Link></li>
          <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 text-body-secondary text-footer">About Us</Link></li>
          <li className="nav-item mb-2"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Bookings</Link></li>
          <li className="nav-item mb-2"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Blog</Link></li>
          
        </ul>
      </div>

      <div className="col-12 col-lg-2 mb-3 mqmb-5">
        <h5 className='footerheading'>Legal</h5>
        <ul className="nav flex-column mqflexrow">
          <li className="nav-item mb-2"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Terms of Use</Link></li>
          <li className="nav-item mb-2"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Privacy Policy</Link></li>
          <li className="nav-item mb-2 mqflexbasis100"><Link to='/' className="nav-link p-0 text-body-secondary text-footer">Cookie Policy</Link></li>
          
        </ul>
      </div>
      <div className="col-12 col-lg-2 mb-3 mqmb-5">
        <h5 className='footerheading'>Product</h5>
        <ul className="nav flex-column mqflexrow">
          <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-body-secondary text-footer">Take Tour</Link></li>
          <li className="nav-item mb-2"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Live Chat</Link></li>
          <li className="nav-item mb-2 mqflexbasis100"><Link to='/'  className="nav-link p-0 text-body-secondary text-footer">Reviews</Link></li>
          
        </ul>
      </div>
      <div className="col-12 col-md-4 mb-3 ps-5 mww100">
        <h5 className='footerheading text-start'>News Letter</h5>
        <ul className="nav flex-column align-items-start">
          <li className="nav-item mb-2"><div className="nav-link p-0 text-body-secondary text-footer">Stay Up To Date</div></li>
          <li className="nav-item mb-2"><div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden text-footer">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Your Email"/>
            <button className="btn btn-dark px-4 py-2" type="button">Subscribe</button>
          </div></li>
          
          
        </ul>
      </div>
      

     
    </div>

    <div className="d-flex  justify-content-center align-items-center py-4 my-4 border-top">
      <p className='text-center mb-0 footertext mqff'>Copyright 2022 uifry.com all rights reserved</p>
     
    </div>
  </footer>

    </div>
    
  )
}

export default Footer