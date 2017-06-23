import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import { RadarChartWithFirebaseController } from '../FireBaseChartController';
import Menu from '../Menu'

class EditUserFullname extends Component {
  constructor(props) {
    super();
    this.state = {
      fullname: props.data
    }
  }

  handleChangeText = (event) => {
    this.setState({fullname: event.target.value});
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.updateFullname();
    }
  }
  
  updateFullname = () => {
    const {firebase, firebasePath} = this.props;
    firebase.update(firebasePath, {fullname: this.state.fullname})
  }

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        {this.props.data}
        <br />
        <input 
          defaultValue={this.state.fullname}
          onChange={this.handleChangeText}
          onKeyPress={this.handleKeyPress}/>
        <button onClick={this.updateFullname}>Save</button>

      </div>
    )
  }
}

const EditUserPage = ({ props, firebase, userProfile, userKey }) => {
  if (!isLoaded(userProfile)) return <div>Loading</div>
  if (isEmpty(userProfile)) return <div>User not found</div>
  return (
    <div style={{display: "flex"}}>
      <Menu isHome={false} />
      <div style={{display: "flex", flexDirection: "column"}}>
        <EditUserFullname 
          data={userProfile.fullname}
          firebase={firebase}
          firebasePath={"/users/" + userKey}
        />
        <RadarChartWithFirebaseController
          firebase={firebase}
          data={userProfile.stats}
          firebasePath={"/users/" + userKey + "/stats"}
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
    console.log("usersData", usersData);
    const userProfile = dataToJS(state.firebase, '/users/' + userKey);
    return {
      userKey,
      userProfile,      
    }
  })
)(EditUserPage)

// export default UserEditPage