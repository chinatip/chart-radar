import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ScoreBoard from './ScoreBoard'
import EditUser from './pages/EditUser'
import AddUser from './pages/AddUser'
import { GlobalStyles } from './scoreboard-styles';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <GlobalStyles/>
        <Switch>
          <Route exact path="/" component={ ScoreBoard }/>
          <Route exact path="/new" component={ AddUser }/>
          <Route path="/edit/:userId" component={ EditUser }/>
        </Switch>
      </div>
    );
  }
}

export default App;
