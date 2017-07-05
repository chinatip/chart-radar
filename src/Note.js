import React, { Component } from 'react';
import styled from 'styled-components';
import {
  firebaseConnect,
  dataToJS
} from 'react-redux-firebase'

class Note extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.data.title,
      text: props.data.text
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        title: this.props.data.title,
        text: this.props.data.text
      })
    }
  }

  handleChangeTitle = (event) => {
    this._isTyping = true;
    this.setState({ title: event.target.value });
  }

  handleKeyPressTitle = (event) => {
    if (event.key === 'Enter') {
        this.updateTitle();
    }
  }

  updateTitle = () => {
    const { firebase, firebasePath, id } = this.props;
    this._isTyping = false;
    firebase.update( firebasePath + id, {title: this.state.title})
  }

  handleChangeText = (event) => {
    this._isTyping = true;
    this.setState({ text: event.target.value });
  }

  handleKeyPressText = (event) => {
    if (event.key === 'Enter') {
        this.updateText();
    }
  }

  updateText = () => {
    const { firebase, firebasePath, id } = this.props;
    this._isTyping = false;
    firebase.update(firebasePath + id, {text: this.state.text})
  }
  
  render() {
    return (
      <NoteWrapper editable={this.props.editable}>
        <EditInputTitle 
          value={this.state.title}
          onChange={this.handleChangeTitle}
          onBlur={this.updateTitle}
          onKeyPress={this.handleKeyPressTitle}
        >
        </EditInputTitle>
        <EditInputText
          value={this.state.text}
          onChange={this.handleChangeText}
          onBlur={this.updateText}
          onKeyPress={this.handleKeyPressText}
        >
        </EditInputText>
      </NoteWrapper>
    )
  }
}

export default Note;

export const EditInputTitle = styled.input`
  border: none;
  position: relative;
  text-align: left;
`

export const EditInputText = styled.input`
  border: none;
  position: relative;
  text-align: left;
`

export const NoteWrapper = styled.div`
  border: 2px solid black; 
  width: 100px; 
  height: 100px; 
  padding: 1rem;
  pointer-events: ${props => props.editable? "auto": "none"};
`