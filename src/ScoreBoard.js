import React, {Component} from 'react'
import UserBoard from './UserBoard'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

const DEFAULT_CHART_DATA = [
  { label: 'Math', value: 8 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 8 },
  { label: 'Geography', value: 8 },
  { label: 'Physics', value: 8 },
  { label: 'History', value: 8 },
];

const DEFAULT_CHART_DATA2 = [
  { label: 'Math', value: 10 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 9 },
  { label: 'Geography', value: 3 },
  { label: 'Physics', value: 7 },
  { label: 'History', value: 7 },
];

const DEFAULT_USERS_DATA = [
  {
    fullname: 'Ranatchai Ch.',
    stats: DEFAULT_CHART_DATA,
    notes: []
  },
  {
    fullname: 'Namtan Chinatip',
    stats: DEFAULT_CHART_DATA2,
    notes: []
  }
]


const ScoreBoard = ({firebase, usersData}) => {
  console.log("usersData", usersData)
  if (!usersData) return <div>Loading</div>
  return (
    <UserBoard data={usersData}/> 
  )
}


// export default ScoreBoard

export default compose(firebaseConnect(['/users']), connect(
  ({ firebase }, props) => {
    console.log('firebase', firebase)
    const usersData = dataToJS(firebase, '/users');
    console.log('usersData', usersData)
    return { usersData }
  }))(ScoreBoard)