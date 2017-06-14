import React, {Component} from 'react'
import {
  UserList,
  UserBoardWrapper
} from './scoreboard-styles'
import User from './User'
import { map } from 'lodash'
import { RadarReChart } from './RadarChart'
import { Link } from 'react-router-dom'

class UserBoard extends Component {
  constructor(props) {
    super();
    console.log("props", props)
    this.state = {
      selectedUser: props.data[0],
      idOfSelectedUser: 0
    }
  }

  updateSelectedUser = (key) => {
    console.log("key", key)
    this.setState({
      selectedUser: this.props.data[key],
      idOfSelectedUser: key})
  }

  render() {
    return (
      <UserBoardWrapper>
        <UserList>
          {map(this.props.data, (value, key) => {
            return (<User
              key={key}
              id={key}
              data={value}
              selected={value.fullname === this.state.selectedUser.fullname}
              updateSelectedUser={(key) => this.updateSelectedUser(key)}/>)
          })}
        </UserList>
        <div>
          <RadarReChart
            options={{
            maxValue: 10
          }}
            data={this.state.selectedUser.stats}/>
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