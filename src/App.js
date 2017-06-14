import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ScoreBoard from './ScoreBoard'
import UserEdit from './pages/UserEdit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ ScoreBoard }/>
          <Route path="/edit/:userId" component={ UserEdit }/>
        </Switch>
      </div>
    );
  }
}

export default App;
