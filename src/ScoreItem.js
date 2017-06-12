import React, { Component } from 'react'
import { ScoreItemWrapper, InputScore, InputCriteria, DeleteButton } from './scoreboard-styles'

class ScoreItem extends Component {
  constructor(props) {
      super();
  }

  updateValue = (event) => {
    // this.props.data[this.props.key].value = event.target.value;
    console.log("event", event.target.value)
    console.log("key", this.props.key)
  }

  render() {
      return (
        <ScoreItemWrapper>
            <InputCriteria value={this.props.name}/>
            <InputScore type="number" name="score" min="1" max="20" defaultValue={this.props.value} onChange={this.updateValue}></InputScore>
            <DeleteButton>X</DeleteButton>
        </ScoreItemWrapper>
      );
  }
}

export default ScoreItem