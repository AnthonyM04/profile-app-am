import PictCarousel from './components/PictCarousel.jsx';
import Video from './components/Video.jsx';
import React from 'react';
import './App.css';
import Quote from './components/Quote.jsx';
import GridPage from './components/GridPage.jsx';
import About from './components/About.jsx'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
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
