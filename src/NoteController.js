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

  render() {
    return (
      <div>
        {
          map(this.props.data, (value, key) => {
            return (
              <Note 
                key={ key }
                id={ key }
                data={ value }
                firebase={ this.props.firebase }
                firebasePath={ this.props.firebasePath }
                editable={ true }
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