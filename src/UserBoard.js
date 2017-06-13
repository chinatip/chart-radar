import React, {Component} from 'react'
import {ScoreList, ScoreBox, CriteriaInput, ScoreInput, UserList, UserBoardWrapper} from './scoreboard-styles'
import ScoreItem from './ScoreItem'
import User from './User'
import {map} from 'lodash'
import {RadarReChart} from './RadarChart'

class UserBoard extends Component {
  constructor(props) {
    super();
    console.log("props", props)
    this.state = {
      selectedUser: props.data[0]
    }
  }

  updateSelectedUser = (key) => {
    console.log("key", key)
    this.setState({
      selectedUser: this.props.data[key]
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
                updateSelectedUser={(key) => this.updateSelectedUser(key)}
              />
            )
          })}
        </UserList>
        <RadarReChart
            options={{ maxValue: 10 }}
            data={this.state.selectedUser.stats}/>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard