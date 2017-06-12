import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './ScoreBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
