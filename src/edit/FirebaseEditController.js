import React, { Component } from 'react';

import { 
  addNote, 
  deleteNote, 
  updateNote,
  addGraphItem,
  updateGraph,
  deleteGraphItem,
  updatePersonalInfo, 
} from './firebase-actions';
import { UndoRedo } from './UndoRedo';
import EditController from './EditController';

const FirebaseEditController = () => {
  return class withFirebaseEdit extends Component {
    constructor(props) {
      super();
      this.state = {
        actions: []
      }

      this._undoRedo = new UndoRedo();
    }

    updatePerson = (item) => {
      const { firebase, userKey } = this.props;

      this._undoRedo.doCommand(updatePersonalInfo(firebase, userKey, item));
    }

    addNote = (item) => {
      const { firebase, userKey } = this.props; 

      this._undoRedo.doCommand(addNote(firebase, userKey, item));
    }
    
    deleteNote = (noteID) => {
      const { firebase, userKey } = this.props; 

      this._undoRedo.doCommand(deleteNote(firebase, userKey, noteID));
    }

    updateNote = (noteID, item) => {
      const { firebase, userKey } = this.props; 

      this._undoRedo.doCommand(updateNote(firebase, userKey, noteID, item));
    }

    addGraphItem = (item) => {
      const { firebase, userKey } = this.props; 

      this._undoRedo.doCommand(addGraphItem(firebase, userKey, item));
    }

    deleteGraphItem = (itemID) => {
      const { firebase, userKey } = this.props; 

      this._undoRedo.doCommand(deleteGraphItem(firebase, userKey, itemID));
    }

    updateGraph = (itemID, item) => {
      const { firebase, userKey } = this.props;

      this._undoRedo.doCommand(updateGraph(firebase, userKey, itemID, item));
    }

    render() {
      return (
        <EditController 
          data={this.props.data} 
          userKey={this.props.userKey} 
          firebase={this.props.firebase}
          updatePerson={this.updatePerson}
          addNote={this.addNote}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
          addGraphItem={this.addGraphItem}
          deleteGraphItem={this.deleteGraphItem}
          updateGraph={this.updateGraph}
        />
      );
    }
  }
}

export default FirebaseEditController;