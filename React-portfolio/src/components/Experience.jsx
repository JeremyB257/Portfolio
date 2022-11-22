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
          <div className="lang lang1" title="Html">
            <img src="./img/html.png" alt="logo html" />
          </div>
          <div className="lang lang1-1" title="Css">
            <img src="./img/css.png" alt="logo css" />
          </div>
          <div className="lang lang2" title="Javascript">
            <img src="./img/js1.png" alt="logo js" />
          </div>
          <div className="lang lang3" title="NodeJs">
            <img src="./img/nodejs1.png" alt="logo nodejs" />
          </div>
          <div className="lang lang4" title="MongoDb">
            <img src="./img/mongodb1.png" alt="logo mongodb" />
          </div>
          <div className="lang lang5" title="React">
            <img src="./img/react1.png" alt="logo react" />
          </div>
          <div className="lang lang6" title="Symnfony">
            <img src="./img/symfony.png" alt="logo symfony" />
          </div>
          <div className="ball ball2018" onClick={openBall1}>
            2018
          </div>
          <div className="ball ball2019" onClick={openBall2}>
            2019
          </div>
          <div className="ball ball2021" onClick={openBall3}>
            2021
          </div>
          <div className="ball ball2022">2022</div>
          <div className="ball ball2023">2023</div>
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
