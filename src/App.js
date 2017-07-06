import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ScoreBoard from './ScoreBoard'
import EditUser from './pages/EditUser'
import { GlobalStyles } from './scoreboard-styles';
import ManageUser from './pages/ManageUser'
import Category from './pages/Category'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <GlobalStyles/>
        <Switch>
          <Route exact path="/" component={ ScoreBoard }/>
          <Route exact path="/manage" component={ ManageUser }/>
          <Route exact path="/category/:category" component={ Category }/>
          <Route path="/edit/:userId" component={ EditUser } />
        </Switch>
      </div>
    );
  }
}

export default App;
