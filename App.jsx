import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';
import './style.css';

const App = () => {
  return (
    <div className="business-card center">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;

