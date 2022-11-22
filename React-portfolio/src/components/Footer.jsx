import React from 'react';
import { Flip, JackInTheBox, Roll, Rotate } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer id="contact">
      <JackInTheBox triggerOnce>
        <h2 className="title">Me Contacter</h2>
        <div className="footer-blocs">
          <div className="footer-left-part">
            <p>
              Pour me contacter, vous pouvez m'envoyer un mail à l'adresse
              <a href="mailto:bertelootjerem@gmail.com"> bertelootjerem@gmail.com</a> et je veillerai à vous répondre
              dans les plus brefs délais.
            </p>
          </div>
          <div className="footer-right-part">
            <p>Vous pouvez également me retrouver sur les sites suivants !</p>
            <a href="https://github.com/JeremyB257">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jeremy-berteloot/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </JackInTheBox>
    </footer>
  );
};

export default Footer;
