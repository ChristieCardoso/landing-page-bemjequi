import React from 'react'
import Logo from '../assets/Logo.svg'
import { IoLogoWhatsapp } from 'react-icons/io'
import { TiSocialInstagram } from 'react-icons/ti'
/* import { FaFacebookF } from "react-icons/fa"; */
const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '31993034536'
    const message = 'Olá, gostaria de fazer uma pedido?'
    const encodedMessage = encodeURIComponent(message)

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(url, '_blank')
  }
  const handleInstagramClick = () => {
    const url = `https://www.instagram.com/bemjequi`

    window.open(url, '_blank')
  }
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
