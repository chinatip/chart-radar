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
    const DEFAULT_CHART_DATA = [
  { label: 'Math', value: 8 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 8 },
  { label: 'Geography', value: 8 },
  { label: 'Physics', value: 8 },
  { label: 'History', value: 8 },
];

const DEFAULT_CHART_DATA2 = [
  { label: 'Math', value: 10 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 9 },
  { label: 'Geography', value: 3 },
  { label: 'Physics', value: 7 },
  { label: 'History', value: 7 },
];

const DEFAULT_USERS_DATA = [
  {
    fullname: 'Ranatchai Ch.',
    stats: DEFAULT_CHART_DATA,
    notes: []
  },
  {
    fullname: 'Namtan Chinatip',
    stats: DEFAULT_CHART_DATA2,
    notes: []
  }
]
    return (
      <ScoreBox>
        <UserBoard data={DEFAULT_USERS_DATA}/>
        {/*<UserBoard data={this.props.data}/>*/}
      </ScoreBox>
    );
  }
}

export default ScoreBoard