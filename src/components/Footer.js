import React from 'react'
import Logo from '../assets/Logo.svg'
import { IoLogoWhatsapp } from 'react-icons/io'
import { TiSocialInstagram } from 'react-icons/ti'
/* import { FaFacebookF } from "react-icons/fa"; */
const Footer = () => {
  const handleWhatsAppClick = () => window.open('https://api.whatsapp.com/send?phone=31993034536', '_blank');
  const handleInstagramClick = () => window.open(`https://www.instagram.com/bemjequi`, '_blank');
  
  return (
    <div className="footer-wrapper" id="footer">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <IoLogoWhatsapp onClick={handleWhatsAppClick} />
          <TiSocialInstagram onClick={handleInstagramClick} />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>(31) 9 9303-4536</span>
          <span>bemjequi@hotmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
