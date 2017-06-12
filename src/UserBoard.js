import React, {Component} from 'react'
import {ScoreList, ScoreBox, CriteriaInput, ScoreInput, UserList} from './scoreboard-styles'
import ScoreItem from './ScoreItem'
import RadarChart from './RadarChart'

class UserBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    let data = [{name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"}]
    return (
      <div>
        <ScoreList>
          <UserList>
            <input className="name" placeholder="Name"/>
            <input className="position" placeholder="Position"/>
          </UserList>

          
        </ScoreList>
        <RadarChart data={ data }/>
      </div>
    );
  }
}

export default UserBoard