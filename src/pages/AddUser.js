import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

const AddUserPage = ({ firebase }) => {
  console.log("firebase", firebase);
  // firebase.push('/test', "")
  return (
    <div>Add User Page</div>
  )
}

export default compose(firebaseConnect(['/users']), connect(
  ({ firebase }, props) => {}
))(AddUserPage)