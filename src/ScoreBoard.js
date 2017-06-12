import React, { Component } from 'react'
import { ScoreBox } from './scoreboard-styles'
import UserBoard from './UserBoard'

import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

class ScoreBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {firebase, targets} = this.props;
    return (
      <ScoreBox>
        <UserBoard firebase={firebase} targets={targets}/>
      </ScoreBox>
    );
  }
}

export default ScoreBoard