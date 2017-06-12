import React, { Component } from 'react'
import { ScoreList, ScoreBox } from './scoreboard-styles'
import ScoreItem from './ScoreItem'

class ScoreBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ScoreBox>     
        <ScoreList>
          <ScoreItem key={ 1 } name={"Criteria 1"}></ScoreItem>
          <ScoreItem key={ 2 } name={"Criteria 2"}></ScoreItem>
          <ScoreItem key={ 3 } name={"Criteria 3"}></ScoreItem>
        </ScoreList>
      </ScoreBox>
    );
  }
}

export default ScoreBoard