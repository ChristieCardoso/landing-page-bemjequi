import React from 'react'
import Navbar from '../Navbar'
import BannerBackground from '../../assets/home-banner-background.png'
import BannerImage from '../../assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'
import './style.css'



const Home = () => {
  const handleWhatsAppClick = () => window.open('https://api.whatsapp.com/send?phone=31993034536', '_blank');

  return (
    <div className="home-container" id="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            O queijo perfeito: Sabor em cada pedaço!
          </h1>
          <p className="primary-text">
            Saboreie um pedaço do interior em cada mordida do nosso queijo, uma
            jornada de autenticidade e tradição.
          </p>
          <button className="secondary-button" onClick={handleWhatsAppClick}>
            Peça já <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
