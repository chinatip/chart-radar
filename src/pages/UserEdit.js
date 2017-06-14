import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

const UserEditPage = ({ userStats }) => {
  console.log(userStats)
  return null
}

export default compose(
  firebaseConnect((props, firebase) => {
    return ['/users/' + props.params.userId]
  }),
  connect((state, props) => {
    const userProfile = state.firebase.getIn('users', props.params.userId)
    return {
      userProfile: userProfile
    }
  })
)(UserEditPage)