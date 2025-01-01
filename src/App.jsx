import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/services/services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App


