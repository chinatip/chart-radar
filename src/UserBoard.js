import React, {Component} from 'react';
import { UserBoardWrapper, EditButton } from './scoreboard-styles';
import Menu from './Menu'
import { toArray } from 'lodash';
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

  addUser = () => {
    const {firebase} = this.props;
    const newData = {
      "fullname": "New User",
      "position": "Undefined",
      "stats": {
        "0": { "label": "label-1", "value": 8 },
        "1": { "label": "label-2", "value": 8 },
        "2": { "label": "label-3", "value": 8 },
        "3": { "label": "label-4", "value": 8 },
        "4": { "label": "label-5", "value": 8 }
      }
    }
    firebase.push('/users', newData);
  }

  render() {
    return (
      <UserBoardWrapper>
        <Menu 
          data={this.props.data}
          isHome={true}
          addUser={this.addUser}
          groupByPosition={this.props.groupByPosition}
          selectedUser={this.state.idOfSelectedUser}
          updateSelectedUser={(key) => this.updateSelectedUser(key)}  
        />
        <h1>Home</h1>
        {this.state.selectedUser.fullname}
        <Link to={"/edit/" + this.state.idOfSelectedUser}>
          <EditButton
            isSelectUser={this.state.idOfSelectedUser}
            components={{data: this.props.data}}>
            Edit
          </EditButton>
        </Link>
        <RadarRechart
          options={{ maxValue: 20 }}
          data={Array.isArray( this.state.selectedUser.stats)? this.state.selectedUser.stats: toArray(this.state.selectedUser.stats)}/>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard;