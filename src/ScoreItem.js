import React, { Component } from 'react'
import { ScoreItemWrapper, InputScore } from './scoreboard-styles'

class ScoreItem extends Component {
  constructor(props) {
      super();
  }

  render() {
      return (
        <ScoreItemWrapper>
            <label for="numberOfCriteria">{this.props.name}</label>
            <InputScore type="number" name="score" min="1" max="5"></InputScore>
        </ScoreItemWrapper>
      );
  }
}

export default ScoreItem