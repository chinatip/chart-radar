import React from 'react';
import UserBoard from './UserBoard';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firebaseConnect, dataToJS} from 'react-redux-firebase';
import { map, groupBy } from 'lodash'

const ScoreBoard = ({firebase, usersData}) => {
  const groupUser = map(usersData, (user, userKey) => { return {userKey, user}})
  const groupByPosition = groupBy(groupUser, g => g.user.position)
  console.log("groupByPosition", groupByPosition)
  if (!usersData) return <div>Loading</div>
  return (
    <UserBoard 
      data={usersData} 
      firebase={firebase} 
      groupByPosition={groupByPosition}
    /> 
  )
}

export default compose(
  firebaseConnect(['/users']),
  connect(
    ({ firebase }, props) => {
      console.log('firebase', firebase)
      const usersData = dataToJS(firebase, '/users');
      console.log('usersData', usersData)
      return { usersData }
    }
  )
)(ScoreBoard)