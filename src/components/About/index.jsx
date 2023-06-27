import React from 'react'
import AboutBackground from '../../assets/about-background.png'
import AboutBackgroundImage from '../../assets/about-background-image.png'
import './style.css'

const About = () => {  
  document.querySelector('a[href^="#sobre"]').addEventListener('click', function (e) {
    e.preventDefault();
  
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  return (
    <div className="about-section-container" id="sobre">
      <div className="about-background-image">
        <img src={AboutBackground} alt="Imagem de background" />
      </div>
      <div className="about-image">
        <img src={AboutBackgroundImage} alt="Imagem do rótulo" />
      </div>
      <div className="about-section-text-container">
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
      </div>
    </div>
  )
}

export default About
