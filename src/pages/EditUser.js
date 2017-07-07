import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import NewMenu from '../NewMenu'
import FirebaseEditController from '../edit/FirebaseEditController'

const CreateEditController = ({userProfile, userKey, firebase}) => {
  return class createUserController extends Component {
    render() {
      return (
        // <EditController 
        //   data={userProfile} 
        //   userKey={userKey} 
        //   firebase={firebase}
        // />
        <div>Hello</div>
      )
    }
  }
}

const WithFirebaseController = FirebaseEditController();

const EditUserPage = ({ props, firebase, userProfile, userKey }) => {
  if (!isLoaded(userProfile)) return <div>Loading...</div>
  if (isEmpty(userProfile)) return <div>User not found</div>
  if(userKey === 'create') return <div>Hello create</div>
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <NewMenu />
      <WithFirebaseController data={userProfile} firebase={firebase} userKey={userKey}/>
    </div>
  )
}

const enhancer =  compose(
  firebaseConnect((props, firebase) => {
    return ['/users/' + props.match.params.userId]
  }),
  connect((state, props) => {
    const userKey = props.match.params.userId;
    const usersData = dataToJS(state.firebase, '/users');
    let userProfile = dataToJS(state.firebase, '/users/' + userKey);
    if(userKey === 'create') {
      userProfile = newData;
    } else {
      userProfile = dataToJS(state.firebase, '/users/' + userKey);
    }
    return {
      userKey,
      userProfile,      
    }
  })
)

export default enhancer(EditUserPage)



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
}