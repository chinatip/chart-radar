import React, {Component} from 'react'
import {ScoreList, ScoreBox, CriteriaInput, ScoreInput, UserList} from './scoreboard-styles'
import ScoreItem from './ScoreItem'
import RadarChart from './RadarChart'
import User from './User'

class UserBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ScoreList>
          <UserList>
            <input className="name" placeholder="Name"/>
            <input className="position" placeholder="Position"/>
          </UserList>
        </ScoreList>
        <RadarChart data={ [] }/>
      </div>
    );
  }
}

export default UserBoard