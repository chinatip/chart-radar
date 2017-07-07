import React, { Component } from 'react';

export default class EditPersonalInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      fullname: props.data.fullname,
      position: props.data.position
    }
  }

  handleChangeName = (event) => {
    this.setState({ fullname: event.target.value });
  }

  handleKeyPressName = (event) => {
    if (event.key === 'Enter') {
      this.updateFullname();
    }
  }
  
  updateFullname = () => {
    const prevStats = this.props.data;
    this.props.updatePerson({ ...prevStats, fullname: this.state.fullname })
  }

  handleChangePosition = (event) => {
    this.setState({ position: event.target.value });
  }
  
  updatePosition = () => {
    const prevStats = this.props.data;
    this.props.updatePerson({ ...prevStats, position: this.state.position })
  }


  render() {
    return (
      <div>
        <h1>Edit User</h1>
        Name: {this.props.data.fullname}
        <br />
        <input 
          defaultValue={this.state.fullname}
          onChange={this.handleChangeName}
          onKeyPress={this.handleKeyPressName}/>
        <button onClick={this.updateFullname}>Save</button>
        <br /><br />
        Position: {this.props.data.position}
        <br />
        <select name="position" id="position" onChange={this.handleChangePosition}>
          <option value="position" disabled selected hidden>Position</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="unknown">Unknown</option>
        </select>
        <button onClick={this.updatePosition}>Save</button>
      </div>
    )
  }
}