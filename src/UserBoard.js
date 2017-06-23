import React, {Component} from 'react';
import { UserBoardWrapper, EditButton } from './scoreboard-styles';
import User from './User'
import Menu from './Menu'
import { map, toArray } from 'lodash';
import { RadarRechart } from './RadarRechart';
import { Link } from 'react-router-dom';

class UserBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedUser: false,
      idOfSelectedUser: null
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
          selectedUser={this.state.idOfSelectedUser}
          updateSelectedUser={(key) => this.updateSelectedUser(key)}  
        />
        {this.state.selectedUser.fullname}
        <RadarRechart
          options={{ maxValue: 20 }}
          data={Array.isArray( this.state.selectedUser.stats)? this.state.selectedUser.stats: toArray(this.state.selectedUser.stats)}/>
        <Link to={"/edit/" + this.state.idOfSelectedUser}>
          <EditButton
            isSelectUser={this.state.idOfSelectedUser}
            components={{data: this.props.data}}>
            Edit
          </EditButton>
        </Link>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard