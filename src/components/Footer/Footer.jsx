import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logo" src="src/images/logo.png" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ad laboriosam quidem impedit eius similique minima aliquam voluptate rem officia nesciunt voluptas voluptatem esse, ex repudiandae recusandae eum facere cumque.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Plicy</li>
        </div>
        <div className="footer-content-right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+98356416513</li>
        <li>deeptifabrication@gmail.com</li>
    </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ deeptifabriccation.com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
