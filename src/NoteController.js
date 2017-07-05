import React, { Component } from 'react';
import Note from './Note';
import { map } from 'lodash';

class NoteController extends Component {
  constructor(props) {
    super();
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
      </div>
    )
  }
}

export default NoteController;