import React, {Component} from 'react';
import { UserBoardWrapper } from './scoreboard-styles';
import User from './User'
import Menu from './Menu'
import { map, toArray } from 'lodash';
import { RadarRechart } from './RadarRechart';
import { Link } from 'react-router-dom';

class UserBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedUser: props.data[1],
      idOfSelectedUser: 1
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
        <Menu 
          data={this.props.data}
          selectedUser={this.state.selectedUser}
          updateSelectedUser={(key) => this.updateSelectedUser(key)}  
        />
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
              }}
              components={{data: this.props.data}}>
              Edit
            </button>
          </Link>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard