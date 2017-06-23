import React, {Component} from 'react';
import Menu from '../Menu'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firebaseConnect, dataToJS} from 'react-redux-firebase'
import User from '../User'
import { map } from 'lodash';
import styled from 'styled-components'

const UserWrapper = styled.div`
  width: 200px;
  padding-right: 10px;
`

const UserItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
  background-color: grey;
  box-sizing: border-box;
`

const ManageUserWrapper = styled.div`
  display: flex;
`

const UserItem = ({key, value, fullname, deleteUser}) => {
  return (
    <UserItemWrapper>
      <UserWrapper>
        <User
          isMenu={false}
          key={key}
          id={key}
          data={value}
          selected={false}
          updateSelectedUser={null}/>
      </UserWrapper>
      <button onClick={() => deleteUser(key)}>Delete</button>
    </UserItemWrapper>
  )
}

class ManageUser extends Component {
  constructor(props) {
    super();
  }

  deleteUser = (key) => {
    const {firebase} = this.props;
    firebase.remove(`/users/` + key)
  }

  render() {
    const {usersData} = this.props;
    return (
      <div style={{display: "flex"}}>
        <Menu isHome={false}/>
        <h1>Manage User</h1>
        <ManageUserWrapper>
          <div>
            {map(usersData, (value, key) => {
              return (
                <UserItem 
                  key={key}
                  value={value}
                  fullname={value.fullname}
                  deleteUser={(e) => this.deleteUser(key)}
                />
              )
            })}
          </div>
        </ManageUserWrapper>
      </div>
    );
  }
}

export default compose(firebaseConnect(['/users']), connect(
  ({ firebase }, props) => {
    console.log('firebase', firebase)
    const usersData = dataToJS(firebase, '/users');
    console.log('usersData', usersData)
    return { usersData }
  }))(ManageUser)