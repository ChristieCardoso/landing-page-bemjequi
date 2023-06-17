import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'

const About = () => {
  return (
    <div className="about-section-container" id="sobre">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Bemjequi - A Origem do Sabor Autêntico
        </h1>
        <p className="primary-text">
          No Vale jequitionha nasceu a marca Bemjequi, sinônimo de excelência em
          queijo artesanal. Há mais de dois anos, nossa família se dedica à
          tradição queijeira. Cada pedaço de queijo Bemjequi conta uma história
          enraizada nas ricas terras do interior. Nossos queijos são
          meticulosamente produzidos, utilizando apenas os melhores ingredientes
          locais e um cuidado especial em cada etapa do processo.
        </p>
        <p className="primary-text">
          Orgulhosos de nossas raízes e da paixão que temos por criar queijos
          excepcionais, estamos constantemente em busca de inovação sem jamais
          abrir mão da tradição. Valorizamos a conexão direta com nossos
          clientes, compartilhando nossos valores e proporcionando momentos
          especiais. Bem-vindo ao universo Bemjequi, onde cada mordida é uma
          viagem ao coração do interior do Vale Jequitionha.
        </p>
        <div className="about-buttons-container"></div>
      </div>
    </div>
  )
}

export default About
