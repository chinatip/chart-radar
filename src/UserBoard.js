import React, {Component} from 'react';
import { UserBoardWrapper, EditButton } from './scoreboard-styles';
import Menu from './Menu'
import { map, toArray } from 'lodash';
import RadarEchart from './RadarEchart';
import { Link } from 'react-router-dom';
import Note from './Note'

class UserBoard extends Component {
  constructor(props) {
    super();
    const firstElement = Object.keys(props.data)[0];
    this.state = {
      isClicked: false,
      selectedUser: props.data[firstElement],
      idOfSelectedUser: firstElement
    }
  }

  updateSelectedUserHover = (key) => {
    console.log("hover key", this.state.selectedUser)
    if(!this.state.isClicked)
      this.setState({
        selectedUser: this.props.data[key],
        idOfSelectedUser: key
      })
  }

  updateSelectedUserClick = (key) => {
    if(this.state.isClicked && key === this.state.idOfSelectedUser) {
      this.setState({
        isClicked: !this.state.isClicked,
        selectedUser: this.props.data[key],
        idOfSelectedUser: key
      })
    }
    else {
      this.setState({
        isClicked: true,
        selectedUser: this.props.data[key],
        idOfSelectedUser: key
      })
    }
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
          updateSelectedUserHover={(key) => this.updateSelectedUserHover(key)}
          updateSelectedUserClick={(key) => this.updateSelectedUserClick(key)}  
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
        <RadarEchart
          options={{ maxValue: 20 }}
          data={Array.isArray( this.state.selectedUser.stats)? this.state.selectedUser.stats: toArray(this.state.selectedUser.stats)}/>
        {
          map(this.state.selectedUser.notes , (value, key) => {
            return (
              <Note 
                key={ key }
                id={ key }
                data={ value }
                firebase={ null }
                firebasePath={ null }
                editable={ false }
              />
            )
          })
        }
      </UserBoardWrapper>
    );
  }
}

export default UserBoard;