import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import { RadarChartWithFirebaseController } from '../RadarChart'

const UserEditPage = ({ firebase, userProfile, userKey }) => {
  if (!userProfile) return <div>Loading</div>
  return (
    <RadarChartWithFirebaseController
      firebase={firebase}
      data={userProfile.stats}
      firebasePath={"/users/" + userKey + "/stats"}
    />
  )
}

export default compose(
  firebaseConnect((props, firebase) => {
    return ['/users/' + props.match.params.userId]
  }),
  connect((state, props) => {
    const userKey = props.match.params.userId
    const userProfile = dataToJS(state.firebase, '/users/' + userKey);

    console.log('userProfile', userProfile)

    return {
      userKey,
      userProfile,      
    }
  })
)(UserEditPage)

// export default UserEditPage