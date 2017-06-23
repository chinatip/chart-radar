import React, { Component } from 'react';
import { 
  MenuWrapper,
  Logo,
  UserListWrapper 
} from './scoreboard-styles';
import User from './User'
import { map } from 'lodash';
import {compose} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

class Menu extends Component {
  constructor(props) {
    super();
  }

  render () {
    const {firebase, usersFullname} = this.props;
    return (
      <MenuWrapper>
        <Logo />
        <Link to={"/"}>
          <button>
            Home
          </button>
        </Link>
        <Link to={"/new"}>
          <button>
            Add User
          </button>
        </Link>
        <UserListWrapper>
          {map(usersFullname, (value, key) => {
            return (
              <User
                key={key}
                id={key}
                data={value}
                selected={key === this.props.selectedUser}
                updateSelectedUser={this.props.updateSelectedUser}/>)
          })}
        </UserListWrapper>
      </MenuWrapper>
    )
  }
}

export default compose(firebaseConnect(['/fullnames']), connect(
  ({ firebase }, props) => {
    console.log('firebase', firebase)
    const usersFullname = dataToJS(firebase, '/fullnames');
    return { usersFullname }
  }))(Menu)
