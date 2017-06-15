import React, {Component} from 'react';
import {
  UserList,
  UserBoardWrapper
} from './scoreboard-styles';
import User from './User'
import { map, toArray } from 'lodash';
import { RadarRechart } from './RadarRechart';
import { Link } from 'react-router-dom';

class UserBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedUser: props.data[0],
      idOfSelectedUser: 0
    }
  }

  updateSelectedUser = (key) => {
    this.setState({
      selectedUser: this.props.data[key],
      idOfSelectedUser: key
    })
  }

  render() {
    return (
      <UserBoardWrapper>
        <UserList>
          {map(this.props.data, (value, key) => {
            return (
              <User
                key={key}
                id={key}
                data={value}
                selected={value.fullname === this.state.selectedUser.fullname}
                updateSelectedUser={(key) => this.updateSelectedUser(key)}/>)
          })}
        </UserList>
        <div>
          <RadarRechart
            options={{ maxValue: 20 }}
            data={Array.isArray( this.state.selectedUser.stats)? this.state.selectedUser.stats: toArray(this.state.selectedUser.stats)}/>
          <Link to={"/edit/" + this.state.idOfSelectedUser}>
            <button
              style={{
              color: "white",
              borderRadius: "30%",
              padding: "10px",
              borderColor: "10px solid #3db9df",
              backgroundColor: "#3db9df",
              cursor: "pointer"
              }}>
              Edit
            </button>
          </Link>
        </div>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard