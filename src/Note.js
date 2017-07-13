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
    this._isTyping = false;
    const prevStats = this.props.data;
    this.props.updateNote(this.props.id, { ...prevStats, title: this.state.title});
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
    this._isTyping = false;
    const prevStats = this.props.data;
    this.props.updateNote(this.props.id, { ...prevStats, text: this.state.text});
  }

  render() {
    return (
      <NoteWrapper editable={this.props.editable}>
        <DeleteButton 
          editable={this.props.editable}
          onClick={() => this.props.deleteNote(this.props.id)}
        >
        X
        </DeleteButton>
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
  font-weight: bold;
  font-size: 1.2rem;
`

export const EditInputText = styled.textarea`
  border: none;
  position: relative;
  text-align: left;
  height: 100%;
`

const DeleteButton = styled.button`
  display: ${props => props.editable? "block": "none"};
  width: 20px;
  hright: 20px;
  margin-left: auto;
`

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black; 
  width: 200px; 
  height: 100px; 
  padding: 1rem;
  overflow: hidden;
  margin: 0.2rem;
  pointer-events: ${props => props.editable? "auto": "none"};
`