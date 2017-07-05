import React, { Component } from 'react';
import Note from './Note';
import { map } from 'lodash';

class NoteController extends Component {
  constructor(props) {
    super();
  }

  addNote = () => {
    const { firebase } = this.props;
    const newNote = {
      "title": "Title",
      "text" : "Text"
    }
    firebase.push(this.props.firebasePath, newNote);
  }

  deleteNote = (key) => {
    const { firebase, firebasePath } = this.props;
    firebase.remove(firebasePath + key);
  }

  updateNote = (key, value) => {
    const { firebase, firebasePath } = this.props;
    firebase.update( firebasePath + key, value)
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        {
          map(this.props.data, (value, key) => {
            return (
              <Note 
                key={ key }
                id={ key }
                data={ value }
                editable={ true }
                updateNote={ this.updateNote }
                deleteNote={(key) => this.deleteNote(key)}
              />
            )
          }) 
        }
        <button onClick={this.addNote}>Add new note</button>
      </div>
    )
  }
}

export default NoteController;