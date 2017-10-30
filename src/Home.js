import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';

import UserBoard from './components/UserBoard';

const Home = ({firebase, usersData}) => {
  const groupUser = map(usersData, (user, userKey) => { 
    return { userKey, user };
  });
  const groupByPosition = groupBy(groupUser, g => g.user.position);

  if (!usersData) {
    return <div>Loading</div>;
  };
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
      const usersData = dataToJS(firebase, '/users');
      return { usersData };
    }
  )
)(Home);