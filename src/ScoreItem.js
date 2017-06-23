import React, {Component} from 'react'
import {ScoreItemWrapper, InputScore, InputCriteria, DeleteButton, PlusButton, MinusButton} from './scoreboard-styles'

class ScoreItem extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
    }
  }

  handleKeyPress = (e) => {
    console.log(e)
    if (e.key === 'Enter') {
        this.props.updateLabel(this.props.id, e)
    }
  }

  handleUpdateValue = (id, e) => {
    let newValue = parseInt(this.props.value);
    if(e === "+" && newValue < 20) {
      newValue = newValue + 1
    } else if(e === "-" && newValue > 1) {
      newValue = newValue - 1
    }
    this.props.updateValue(id, newValue)

    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <ScoreItemWrapper>
        <InputCriteria 
          defaultValue={this.props.label}
          onKeyPress={this.handleKeyPress}
          onBlur={(e) => this.props.updateLabel(this.props.id, e.target.value)}/>
        <InputScore
          type="number"
          value={this.state.value}></InputScore>
        <PlusButton onClick={this.handleUpdateValue.bind(this, this.props.id, "+")}>+</PlusButton>
        <MinusButton onClick={this.handleUpdateValue.bind(this, this.props.id, "-")}>-</MinusButton>
        <DeleteButton onClick={() => this.props.deleteItem(this.props.id)}>X</DeleteButton>
      </ScoreItemWrapper>
    );
  }
}

export default ScoreItem