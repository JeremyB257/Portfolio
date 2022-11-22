import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <header>
        <Nav />
        <Header />
      </header>
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
