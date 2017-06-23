import React from 'react';
import UserBoard from './UserBoard';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firebaseConnect, dataToJS} from 'react-redux-firebase';

const ScoreBoard = ({firebase, usersData}) => {
  if (!usersData) return <div>Loading</div>
  return (
    <UserBoard data={usersData} firebase={firebase}/> 
  )
}

export default compose(firebaseConnect(['/users']), connect(
  ({ firebase }, props) => {
    console.log('firebase', firebase)
    const usersData = dataToJS(firebase, '/users');
    console.log('usersData', usersData)
    return { usersData }
  }))(ScoreBoard)