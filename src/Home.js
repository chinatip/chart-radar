import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';

import UserBoard from './UserBoard';

const Home = ({ firebase, usersData }) => {
  const groupUser = map(usersData, (user, userKey) => { 
    return { userKey, user };
  });
  const groupByPosition = groupBy(groupUser, g => g.user.position);

  if (!usersData) {
    return <div>Loading</div>
  };
  return (
    <UserBoard 
      data={usersData} 
      firebase={firebase} 
      groupByPosition={groupByPosition}
    /> 
  );
}

export default compose(
  firebaseConnect(['/users']),
  connect(
    ({ firebase }, props) => {
      const usersData = dataToJS(firebase, '/users');
      return { usersData };
    }
  )
)(Home);