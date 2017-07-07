import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import NewMenu from '../NewMenu'
import FirebaseEditController from '../edit/FirebaseEditController';
import CreateEditController from '../edit/CreateEditController';

const WithFirebaseController = FirebaseEditController();
const WithCreateController = CreateEditController();

const EditUserPage = ({ props, firebase, userProfile, userKey }) => {
  if (!isLoaded(userProfile)) return <div>Loading...</div>
  if (isEmpty(userProfile)) return <div>User not found</div>
  if(userKey === 'create') {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
      <NewMenu />
      <WithCreateController firebase={firebase} userKey={userKey}/>
    </div>
    )
  }
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
      userProfile = "Create";
    } else {
      userProfile = dataToJS(state.firebase, '/users/' + userKey);
    }
    return {
      userKey,
      userProfile,      
    }
  })
)

export default enhancer(EditUserPage);