import React from 'react';
import { JackInTheBox, Slide } from 'react-awesome-reveal';

const Header = () => {
  let words = ['Responsive Design', 'Performance', 'SEO', 'Accessibilité'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100;

  let wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substring(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      document.getElementById('word').innerHTML = part;
    }, speed);
  };

  wordflick();
  return (
    <section className="banner" id="header">
      <div className="light-bckgnd">
        <Slide direction="down" duration={700} triggerOnce>
          <h1>Jeremy B</h1>
        </Slide>
        <JackInTheBox duration={1200}>
          <hr className="light-bckgnd-break" />
        </JackInTheBox>
        <Slide duration={700} triggerOnce>
          <p>Développeur Web</p>
        </Slide>
        <div className="words">
          <div id="word"></div>
          <span className="blinkingCursor">|</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
