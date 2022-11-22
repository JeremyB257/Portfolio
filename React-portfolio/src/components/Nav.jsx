import React from 'react';

const Nav = () => {
  return (
    <div className="header">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <a href="#header" className="logo">
          <img src="./img/logo-301.png" alt="logo" />
        </a>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#about">À PROPOS</a>
            </li>
            <li>
              <a href="#skills">COMPéTENCE</a>
            </li>
            <li>
              <a href="#experience">experience</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
