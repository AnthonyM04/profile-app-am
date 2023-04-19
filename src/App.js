import PictCarousel from './components/PictCarousel.jsx';
import Video from './components/Video.jsx';
import React from 'react';
import './App.css';
import Quote from './components/Quote.jsx';
import GridPage from './components/GridPage.jsx';
import About from './components/About.jsx'
import HeroBanner from './components/HeroBanner.jsx';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <HeroBanner/>
          <About/>
          <Quote/>
          <Video/>
          <PictCarousel/>
          <GridPage/>
        </header>
      </div>
    </>
  );
}

export default App;
