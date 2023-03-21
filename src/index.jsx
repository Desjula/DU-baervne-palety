import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import palettes from "./palettes.js"
import Palette from './components/Palette';

const App = () => {
  
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      {palettes.map((paleta) => <Palette paletteData={paleta} key={paleta.name}/>)}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
