import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { UndoRedo } from './UndoRedo';
import EditController from './EditController';
import { newData } from '../const/index';

const Button = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 0.2rem;
  width: 100px;
  color: white;
  background-color: black;
  border: 1px solid white;
`;

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

    updateData = (data) => {
      this.setState({
        data: data
      });
    }

    getRandomKey() {
      return Math.floor(Math.random()*90000) + 10000 + "";
    }

    addNote = (item) => {
      const randomKey = this.getRandomKey();
      const addedItemData = { ...this.state.data, "notes": {...this.state.data["notes"], [randomKey]: item }};
      
      this.updateData(addedItemData);
    }
    
    deleteNote = (noteID) => {
      const removedItemData = this.state.data;
      delete this.state.data["notes"][noteID];

      this.updateData(removedItemData);
    }

    updateNote = (noteID, item) => {
      this.updateData({ ...this.state.data, "notes": {...this.state.data["notes"], [noteID]: item }});
    }

    addGraphItem = (item) => {
      const randomKey = this.getRandomKey();
      const addedItemData = { ...this.state.data, "stats": {...this.state.data["stats"], [randomKey]: item }};
      
      this.updateData(addedItemData);
    }

    deleteGraphItem = (itemID) => {
      const removedItemData = this.state.data;
      delete this.state.data["stats"][itemID];

      this.updateData(removedItemData);
    }

    updateGraph = (itemID, item) => {
      this.updateData({ ...this.state.data, "stats": {...this.state.data["stats"], [itemID]: item }});
    }

    addUser = () => {
      const { firebase } = this.props;

      firebase.push('/users/', this.state.data);
      <Redirect to={"/"} />
    }

    render() {
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
            updatePerson={this.updateData}
            addNote={this.addNote}
            deleteNote={this.deleteNote}
            updateNote={this.updateNote}
            addGraphItem={this.addGraphItem}
            deleteGraphItem={this.deleteGraphItem}
            updateGraph={this.updateGraph}
          />
        </div>
      );
    }
  }
}

export default CreateEditController;