import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

const newData = {
    "fullname": "New User",
    "stats": {
      "0": { "label": "label-1", "value": 8 },
      "1": { "label": "label-2", "value": 8 },
      "2": { "label": "label-3", "value": 8 },
      "3": { "label": "label-4", "value": 8 },
      "4": { "label": "label-5", "value": 8 }
    }
  }

const AddUserPage = ({ firebase }) => {
  console.log("firebase", firebase);
  firebase.push('/users', newData)
  return (
    <div>Add User Page</div>
  )
}

export default compose(firebaseConnect(['/users']), connect(
  ({ firebase }, props) => {}
))(AddUserPage)