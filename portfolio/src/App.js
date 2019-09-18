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

function App() {
  return (
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
  );
}

export default App;
