import React, { Component } from 'react'
import { ScoreItemWrapper, InputScore, InputCriteria, DeleteButton } from './scoreboard-styles'

class ScoreItem extends Component {
  constructor(props) {
      super();
  }

  render() {
      return (
        <ScoreItemWrapper>
            <InputCriteria value={this.props.name}/>
            <InputScore type="number" name="score" min="1" max="5"value={this.props.value}></InputScore>
            <DeleteButton>X</DeleteButton>
        </ScoreItemWrapper>
      );
  }
}

export default ScoreItem