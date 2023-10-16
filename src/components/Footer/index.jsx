import React from "react";
import Logo from "../../assets/Logo.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import "./style.css";

export function Footer() {
  const handleWhatsAppClick = () =>
    window.open("https://api.whatsapp.com/send?phone=31993034536", "_blank");
  const handleInstagramClick = () =>
    window.open(`https://www.instagram.com/bemjequi`, "_blank");
  const handleFcebookClick = () =>
    window.open(`https://www.facebook.com/bemjequi`, "_blank");

  return (
    <footer id="footer">
      <div>
        <img src={Logo} alt="Logo da marca" />
        <section>
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
      </div>
      <p>©2020. Todos os direitos reservados para Laticínios Bem Jequi.
        <section>
          Dev by
          <a href="https://github.com/ChristieCardoso" rel="noreferrer" target="_blank" > Christie</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </section>
      </p>
    </footer>
  );
}
