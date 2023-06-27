import React from "react";
import Logo from "../../assets/Logo.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";

import "./style.css";

const Footer = () => {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31993034536", "_blank");
  const handleInstagramClick = () =>
    window.open(`https://www.instagram.com/bemjequi`, "_blank");
  const handleFcebookClick = () =>
    window.open(`https://www.facebook.com/bemjequi`, "_blank");

  return (
    <footer id="footer">
      <div className="footer-container">
        <section>
          <img src={Logo} alt="" className="footer-logo" />

          <section className="footer-social-links">
            <span>
              <IoLogoWhatsapp onClick={handleWhatsAppClick} />
            </span>
            <span>
              <TiSocialInstagram onClick={handleInstagramClick} />
            </span>
            <span>
              <FaFacebookF onClick={handleFcebookClick} />
            </span>
          </section>
        </section>
      </div>
      <div className="footer-text">
        <p>©2020. Todos os direitos reservados para Laticínios Bem Jequi.</p>
      </div>
    </footer>
  );
};

export default Footer;
