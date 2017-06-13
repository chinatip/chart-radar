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
    return (
      <ScoreBox>
        <UserBoard data={this.props.data}/>
      </ScoreBox>
    );
  }
}

export default ScoreBoard