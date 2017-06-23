import React, { Component } from 'react';
import { 
  MenuWrapper,
  AddUserButton,
  Logo,
  UserListWrapper 
} from './scoreboard-styles';
import User from './User'
import { map } from 'lodash';
import {compose} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {firebaseConnect, dataToJS} from 'react-redux-firebase'

const MainMenu = ({usersFullname, isHome, addUserm, selectedUser, updateSelectedUser, addUser}) => {
  return (
    <MenuWrapper>
      <Logo />
      <Link to={"/"}>
        <button>
          Home
        </button>
      </Link>
      <Link to={"/manage"}>
        <button>
          Manage Users
        </button>
      </Link>
      <AddUserButton 
        isHome={isHome}
        onClick={addUser}>
        Add User
      </AddUserButton>
      <UserListWrapper>
        {map(usersFullname, (value, key) => {
          return (
            <User
              key={key}
              id={key}
              data={value}
              isMenu={true}
              selected={key === selectedUser}
              updateSelectedUser={updateSelectedUser}/>)
        })}
      </UserListWrapper>
    </MenuWrapper>
  )
} 


class Menu extends Component {
  constructor(props) {
    super();
  }

  render () {
    const {usersFullname} = this.props;
    if (this.props.isHome) return ( 
      <MainMenu
        usersFullname={usersFullname}
        isHome={this.props.isHome}
        onClick={this.props.addUser}
        selectedUser={this.props.selectedUser}
        updateSelectedUser={this.props.updateSelectedUser}
      />
    )
    return (
      <MenuWrapper>
        <Logo />
        <Link to={"/"}>
          <button>
            Home
          </button>
        </Link>
        <Link to={"/manage"}>
          <button>
            Manage Users
          </button>
        </Link>
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
