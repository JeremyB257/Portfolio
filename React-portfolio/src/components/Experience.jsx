import React from 'react';
import { useState } from 'react';

const Experience = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const openBall1 = () => {
    setIsActive1(!isActive1);
    setIsActive2(false);
    setIsActive3(false);
  };
  const openBall2 = () => {
    setIsActive2(!isActive2);
    setIsActive1(false);
    setIsActive3(false);
  };
  const openBall3 = () => {
    setIsActive3(!isActive3);
    setIsActive1(false);
    setIsActive2(false);
  };

  return (
    <section id="experience">
      <h2 className="title">Mes Experiences</h2>
      <div className="exp-container">
        <div className="timeline">
          <div className="lang1">
            <img src="./img/html.png" alt="logo html" />
          </div>
          <div className="lang1-1">
            <img src="./img/css.png" alt="logo css" />
          </div>
          <div className="lang2">
            <img src="./img/js1.png" alt="logo js" />
          </div>
          <div className="lang3">
            <img src="./img/nodejs1.png" alt="logo nodejs" />
          </div>
          <div className="lang4">
            <img src="./img/mongodb1.png" alt="logo mongodb" />
          </div>
          <div className="lang5">
            <img src="./img/react1.png" alt="logo react" />
          </div>
          <div className="ball1" onClick={openBall1}>
            2018
          </div>
          <div className="ball2" onClick={openBall2}>
            2019
          </div>
          <div className="ball3" onClick={openBall3}>
            2021
          </div>
          <div className="ball4">2022</div>
          <div className={isActive1 ? 'container down1' : 'container down1 hidden'}>
            <div className="content">
              <h4>2018 - Freelance</h4>
              <p>Création de sites vitrines</p>
              <p>Création de pages personnalisées</p>
              <p>Développement de fonctionnalité</p>
            </div>
          </div>
          <div className={isActive2 ? 'container down2' : 'container down2 hidden'}>
            <div className="content">
              <h4>2019 - Freelance</h4>
              <p>Création de sites e-commerce Shopify/Wordpress</p>
              <p>Creation d'un theme Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
