import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about">
      <Zoom triggerOnce>
        <h2 className="title">À Propos</h2>
        <div className="about-info">
          <img src="./img/photo-profile.jpg" alt="" />
          <p>
            Autodidacte depuis plusieurs années en parallèle de mon métier, j'ai décidé, cette année, d'effectuer une
            reconversion vers ce domaine qui me passionne, la programmation et plus particulièrement le Web. Afin de
            valider mon niveau de connaissance de Javascript et de ces frameworks (NodeJs, ExpressJs, ReactJs) j'ai
            effectué les projets de la formation développeur web d'OpenClassrooms.{' '}
            <a href="#portfolio">
              Consulter mes projets <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </Zoom>
    </section>
  );
};

export default About;
