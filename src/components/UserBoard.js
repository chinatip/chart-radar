import React, { Component } from 'react';
import styled from 'styled-components';

import NewMenu from '../NewMenu';

const UserBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const EditButton = styled.button`
  color: white;
  border-radius: 30%;
  padding: 10px;
  border-color: 10px solid #3db9df;
  background-color: #3db9df;
  cursor: pointer;
  display: ${props => props.isSelectUser? "inline": "none"};
`;

class UserBoard extends Component {
  render() {
    return (
      <UserBoardWrapper>
        <NewMenu data={this.props.data} firebase={this.props.firebase}/>
        <div>
          <h1>Home</h1>
          <br/>
          ----------
          <h2>Welcome!</h2>
        </div>
      </UserBoardWrapper>
    );
  }
}

export default UserBoard;