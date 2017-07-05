import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import { RadarChartWithFirebaseController } from '../FireBaseChartController';
import Menu from '../Menu'
import NoteController from '../NoteController'

class EditPersonalInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      fullname: props.data.fullname,
      position: props.data.position
    }
  }

  handleChangeName = (event) => {
    this.setState({fullname: event.target.value});
  }

  handleKeyPressName = (event) => {
    if (event.key === 'Enter') {
      this.updateFullname();
    }
  }
  
  updateFullname = () => {
    const {firebase, firebasePath} = this.props;
    firebase.update(firebasePath, {fullname: this.state.fullname})
  }

  handleChangePosition = (event) => {
    this.setState({position: event.target.value});
  }
  
  updatePosition = () => {
    const {firebase, firebasePath} = this.props;
    firebase.update(firebasePath, {position: this.state.position})
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
          <option value="Undefined" disabled selected hidden>Position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Undefined">Undefined</option>
        </select>
        <button onClick={this.updatePosition}>Save</button>
        

      </div>
    )
  }
}

const noteData = {
  "0":{
    title: "t0",
    text: "detail0"
  },
  "1":{
    title: "t1",
    text: "detail1"
  },
  "2":{
    title: "t2",
    text: "detail2"
  }
}

const EditUserPage = ({ props, firebase, userProfile, userKey }) => {
  if (!isLoaded(userProfile)) return <div>Loading</div>
  if (isEmpty(userProfile)) return <div>User not found</div>
  return (
    <div style={{display: "flex"}}>
      <Menu isHome={false} />
      <div style={{display: "flex", flexDirection: "column"}}>
        <EditPersonalInfo
          data={userProfile}
          firebase={firebase}
          firebasePath={"/users/" + userKey}
        />
        <RadarChartWithFirebaseController
          data={userProfile.stats}
          firebase={firebase}
          firebasePath={"/users/" + userKey + "/stats/"}
        />
        <NoteController 
          data={ userProfile.notes } 
          firebase={ firebase }
          firebasePath={"/users/" + userKey + "/notes/"}
        />
      </div>
    </div>
  )
}

export default compose(
  firebaseConnect((props, firebase) => {
    return ['/users/' + props.match.params.userId]
  }),
  connect((state, props) => {
    const userKey = props.match.params.userId
    const usersData = dataToJS(state.firebase, '/users');
    const userProfile = dataToJS(state.firebase, '/users/' + userKey);
    return {
      userKey,
      userProfile,      
    }
  })
)(EditUserPage)