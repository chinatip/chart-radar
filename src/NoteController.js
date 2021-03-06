import React, { Component } from 'react';
import map from 'lodash/map';

import Note from './Note';

class NoteController extends Component {
  addNote = () => {
    const newNote = {
      "title": "Title",
      "text" : "Text"
    }
    
    this.props.addNote(newNote);
  }

  deleteNote = (key) => {
    this.props.deleteNote(key);
  }

  updateNote = (key, value) => {
    this.props.updateNote(key, value);
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