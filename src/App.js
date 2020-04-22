import React from 'react';
import './App.css';
import './w3.css';
import * as comp from './components'


function App() {
  return (
    <div className="App w3-display-container w3-animate-opacity w3-text-white">
      <comp.UserInput />
    </div>
  );
}

export default App;
