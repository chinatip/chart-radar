import React, { Component } from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.selected? "#fff": "#000"};
  background-color: ${props => props.selected? "#3db9df": "#fff"};
  padding: 10px;
  margin-bottom: 10px;
  border: 0.2px solid #3db9df;
  cursor: pointer;
`

const UserMenu = ({id, data, selected, updateSelectedUserHover, updateSelectedUserClick}) => {
  return (
    <UserWrapper 
      selected={selected} 
      onMouseDown={(key) => updateSelectedUserClick(id)}
      onMouseOver={(key) => updateSelectedUserHover(id)}>
      {data.fullname}
    </UserWrapper>
  )
}

const UserManage = ({id, data}) => {
  return (
    <div>
      {data.fullname}
    </div>
  )
}

class User extends Component {
  constructor(props) {
    super();
  }

  render() {
    if(this.props.isMenu)
      return (
        <UserMenu 
          id={this.props.id}
          data={this.props.data}
          selected={this.props.selected}
          updateSelectedUserHover={this.props.updateSelectedUserHover}
          updateSelectedUserClick={this.props.updateSelectedUserClick}
        />
      );
    return (
      <UserManage 
        id={this.props.id}
        data={this.props.data}/>
    )  
  }
}

export default User