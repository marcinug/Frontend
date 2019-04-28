import React from 'react';
import './App.css';
import Game from './components/Game';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <div className="game-list">
        <h1>Board games: </h1>
        <Game name="Hej to moja ryba"/>
        <Game name="Ego"/>
        <Game name="Złodzieje"/>
        <Game name="Speed Dating"/>
      </div>
    
      <Details/>
  
    </div>
  );
}

export default App;
