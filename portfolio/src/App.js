import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import List from './components/List';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SinglePortfolio from './components/SinglePortfolio';

import { Route, Switch, useLocation } from 'react-router-dom';

function App() {
let location = useLocation();

  return (
    <>
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <List />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
    </>
  );
}

export default App;
