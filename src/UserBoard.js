import React, {Component} from 'react'
import {ScoreList, ScoreBox, CriteriaInput, ScoreInput} from './scoreboard-styles'
import ScoreItem from './ScoreItem'
import RadarChart from './RadarChart'
import {map} from 'lodash'

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
          {
            map(data, (value, key) => {
            return (
              <ScoreItem key={ key } name={value.name} value={value.value}></ScoreItem>
            );
          })}
          
        </ScoreList>
        <RadarChart data={ data }/>
      </div>
    );
  }
}

export default UserBoard