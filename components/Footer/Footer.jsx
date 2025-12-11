import React from 'react'
import './Footer.css'
import assets from 'assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <a href='/'><img  className ="footerlogo" src={assets.logo_footer} alt="" /></a>
           <p>choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
           <div className="footer-social-icons">
            <img className="im"src={assets.facebook_icon} alt="" />
            <img className="im" src={assets.email_icon} alt="" />
            

           </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+251-911-121-314</li>
                <li>contact@delivery.com</li>

            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2025 @ delivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
