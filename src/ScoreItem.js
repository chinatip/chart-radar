import React, {Component} from 'react'
import {ScoreItemWrapper, InputScore, InputCriteria, DeleteButton} from './scoreboard-styles'

class ScoreItem extends Component {
  constructor(props) {
    super();
  }

  handleKeyPress = (e) => {
    console.log(e)
    if (e.key === 'Enter') {
        this.props.updateLabel(this.props.id, e)
    }
  }

  render() {
    return (
      <ScoreItemWrapper>
        <InputCriteria 
          defaultValue={this.props.label}
          onKeyPress={this.handleKeyPress}
          onBlur={(e) => this.props.updateLabel(this.props.id, e)}/>
        <InputScore
          type="number"
          min="1"
          max="20"
          defaultValue={this.props.value}
          onChange={(e) => this.props.updateValue(this.props.id, e)}></InputScore>
        <DeleteButton>X</DeleteButton>
      </ScoreItemWrapper>
    );
  }
}

export default ScoreItem