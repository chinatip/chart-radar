import React, { Component } from 'react';
import { UndoRedo } from './UndoRedo';
import EditController from './EditController';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'

const CreateEditController = () => {
  return class createUserController extends Component {
    constructor(props) {
      super();
      this.state = {
        data: newData,
        actions: []
      }
      this._undoRedo = new UndoRedo();
    }

    updatePerson = (item) => {
      this.setState({
        data: item
      })
    }

    addNote = (item) => {
      let randomKey = Math.floor(Math.random()*90000) + 10000+"";
      const addedItemData = { ...this.state.data, "notes": {...this.state.data["notes"], [randomKey]: item}}
      this.setState({
        data: addedItemData
      });
    }
    
    deleteNote = (noteID) => {
      const removedItemData =this.state.data;
      delete this.state.data["notes"][noteID]
      this.setState({
        data: removedItemData
      });
    }

    updateNote = (noteID, item) => {
      this.setState({
        data:{...this.state.data, "notes": {...this.state.data["notes"], [noteID]: item}}
      });
    }

    addGraphItem = (item) => {
      let randomKey = Math.floor(Math.random()*90000) + 10000+"";
      const addedItemData = { ...this.state.data, "stats": {...this.state.data["stats"], [randomKey]: item}}
      this.setState({
        data: addedItemData
      });
    }

    deleteGraphItem = (itemID) => {
      const removedItemData =this.state.data;
      delete this.state.data["stats"][itemID]
      this.setState({
        data: removedItemData
      });
    }

    updateGraph = (itemID, item) => {
      this.setState({
        data: {...this.state.data, "stats": {...this.state.data["stats"], [itemID]: item}}
      });
    }

    addUser = () => {
      const { firebase } = this.props;
      firebase.push('/users/', this.state.data);
      <Redirect to={"/"} />
    }

    render() {
      // if(!this.props.data==null)
      return (
        <div>
          <Button onClick={this.addUser} href={"/"}>
            Create User
          </Button>
          <Button href={"/"}>
            Cancel
          </Button>
          <EditController 
            data={this.state.data} 
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
        </div>
      )
    }
  }
}

export default CreateEditController;

const newData = {
  "fullname": "New User",
  "position": "unknown",
  "stats": {
    "0": { "label": "label-1", "value": 8 },
    "1": { "label": "label-2", "value": 8 },
    "2": { "label": "label-3", "value": 8 },
    "3": { "label": "label-4", "value": 8 },
    "4": { "label": "label-5", "value": 8 }
  },
  "notes": {
    "0": {
      "title": "Title",
      "text" : "Text"
    }
  }
};

const Button = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 0.2rem;
  width: 100px;
  color: white;
  background-color: black;
  border: 1px solid white;

`