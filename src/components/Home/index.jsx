import React from "react";
import Navbar from "../Navbar";
import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import "./style.css";

export function Home() {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31993034536", "_blank");

  return (
    <div id="home">
      <Navbar />
      <div className="home-container">
        <div className="home-banner-background">
          <img src={BannerBackground} alt="Imagem de background do head" />
        </div>
        <div className="home-image">
          <img src={BannerImage} alt="Imagem do banner do queijo" />
        </div>
        <div className="home-text-container">
          <h1>O queijo perfeito: Sabor em cada pedaço!</h1>
          <p>
            Saboreie um pedaço do interior em cada mordida do nosso queijo, uma
            jornada de autenticidade e tradição.
          </p>
          <button onClick={handleWhatsAppClick}>
            Peça já
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div id="about">
        <div className="about-banner-background">
          <img src={AboutBackground} alt="Imagem de background" />
        </div>
        <div className="about-image">
          <img src={AboutBackgroundImage} alt="Imagem do rótulo" />
        </div>
        <div className="about-text-container">
          <h1>Bemjequi - A Origem do Sabor Autêntico</h1>
          <p>
            No Vale jequitionha nasceu a marca Bemjequi, sinônimo de excelência
            em queijo artesanal. Há mais de dois anos, nossa família se dedica à
            tradição queijeira. Cada pedaço de queijo Bemjequi conta uma
            história enraizada nas ricas terras do interior. Nossos queijos são
            meticulosamente produzidos, utilizando apenas os melhores
            ingredientes locais e um cuidado especial em cada etapa do processo.
          </p>
          <p>
            Orgulhosos de nossas raízes e da paixão que temos por criar queijos
            excepcionais, estamos constantemente em busca de inovação sem jamais
            abrir mão da tradição. Valorizamos a conexão direta com nossos
            clientes, compartilhando nossos valores e proporcionando momentos
            especiais. Bem-vindo ao universo Bemjequi, onde cada mordida é uma
            viagem ao coração do interior do Vale Jequitionha.
          </p>
        </div>
      </div>
    </div>
  );
}
