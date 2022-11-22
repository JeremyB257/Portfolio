import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">Mes Compétences</h2>
      <div className="skills-blocs">
        <div className="skills-chart">
          <div className="skills-bloc">
            <h3>Front End / CMS</h3>
            <div className="skill">
              <p>HTML/CSS</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-90" data-percent="90%"></div>
                  </div>
                </Slide>
              </div>
              <p>JavaScript/JQuery</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-85" data-percent="85%"></div>
                  </div>
                </Slide>
              </div>
              <p>React/Redux</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-75" data-percent="75%"></div>
                  </div>
                </Slide>
              </div>
              <p>Shopify</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-80" data-percent="80%"></div>
                  </div>
                </Slide>
              </div>
              <p>Wordpress (En cours d'apprentissage)</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-40" data-percent="40%">
                      <div className="bar-inner learn"></div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>

          <div className="skills-bloc">
            <h3>Back End</h3>
            <div className="skill">
              <p>NodeJs/Express</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-60" data-percent="60%"></div>
                  </div>
                </Slide>
              </div>
              <p>PHP/Symfony (En cours d'apprentissage)</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-40" data-percent="40%">
                      <div className="bar-inner learn"></div>
                    </div>
                  </div>
                </Slide>
              </div>
              <p>MongoDb</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-70" data-percent="70%"></div>
                  </div>
                </Slide>
              </div>
              <p>SQL</p>
              <div className="bar">
                <Slide direction="left">
                  <div className="bar-tran">
                    <div className="bar-inner bar-50" data-percent="50%"></div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-skills-bloc">
          <div className="skills-bloc">
            <h3>Compétences et Soft Skill</h3>
            <ul>
              <li className="soft-skill">
                Connaissance de la methode <strong>Agile et Scrum</strong>
              </li>
              <li className="soft-skill">
                Respect d'un <strong>cahier des charges</strong>
              </li>
              <li className="soft-skill">
                Respect des <strong>deadlines</strong>
              </li>
              <li className="soft-skill">
                Esprit d'<strong>équipes</strong> et d'entraides
              </li>
              <li className="soft-skill">
                Versionning et partage de projet avec <strong>Git et Github</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
