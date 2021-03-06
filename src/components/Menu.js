import React, { Component } from 'react';
import map from 'lodash/map';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';

import { 
  MenuWrapper,
  AddUserButton,
  Logo,
  UserListWrapper 
} from '../scoreboard-styles';
import User from '../User';

const MainMenu = ({ usersFullname, groupByPosition, isHome, selectedUser, updateSelectedUserHover, updateSelectedUserClick, addUser }) => {
  if (!isLoaded(groupByPosition)) {
    return <div>Loading...</div>;
  }
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
        onClick={addUser}
      >
        Add User
      </AddUserButton>
      <UserListWrapper>
        {
          map(groupByPosition, (list, key) => {
            return (
              <div> 
                <span style={{fontWeight: "bold"}}>{ key }</span>
              {
                map(list, (value) => {
                  return (
                    <User
                      key={value.userKey}
                      id={value.userKey}
                      data={value.user}
                      isMenu={true}
                      selected={value.userKey === selectedUser}
                      updateSelectedUserHover={updateSelectedUserHover}
                      updateSelectedUserClick={updateSelectedUserClick}
                    />
                  );
                }) 
              }</div>
            )
          })
        }
      </UserListWrapper>
    </MenuWrapper>
  )
} 


class Menu extends Component {
  render () {
    const {usersFullname} = this.props;
    if (this.props.isHome) {
      return ( 
        <MainMenu
          usersFullname={usersFullname}
          isHome={this.props.isHome}
          addUser={this.props.addUser}
          groupByPosition={this.props.groupByPosition}
          selectedUser={this.props.selectedUser}
          updateSelectedUserHover={this.props.updateSelectedUserHover}
          updateSelectedUserClick={this.props.updateSelectedUserClick}
        />
      );
    }
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
    );
  }
}

const enhancer = compose(
  firebaseConnect(['/fullnames']), 
  connect(
    ({ firebase }, props) => {
      const usersFullname = dataToJS(firebase, '/fullnames');
      return { usersFullname };
    }
  )
);

export default enhancer(Menu);