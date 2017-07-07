import React, { Component } from 'react';
import NewMenu from '../NewMenu'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import User from '../User'
import { map } from 'lodash';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

const UserItem = ({id, value, fullname, deleteUser}) => {
  console.log("key", id)
  return (
    <UserItemWrapper>
      <UserWrapper>
        <User
          isMenu={false}
          key={id}
          id={id}
          data={value}
          selected={false}
          updateSelectedUser={null}/>
      </UserWrapper>
      <Link to={"/edit/" + id}>
        <button 
          isSelectUser={id}
          components={value.stats}
        >
          Edit</button>
      </Link>
      <button onClick={() => deleteUser(id)}>Delete</button>
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
        <NewMenu isHome={false}/>
        <h1>Manage User</h1>
        <ManageUserWrapper>
          <div>
            {map(usersData, (value, key) => {
              console.log("value" , key)
              return (
                <div>
                <UserItem 
                  key={key}
                  id={key}
                  value={value}
                  fullname={value.fullname}
                  deleteUser={(e) => this.deleteUser(key)}
                />
                </div>
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