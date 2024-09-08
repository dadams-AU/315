import React from 'react';
import './App.css';
import Slides from './slides.js'; // Import the Slides component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove logo and default React content */}
        <Slides /> {/* Render your slides here */}
      </header>
    </div>
  );
}

export default App;
