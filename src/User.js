import React, {Component} from 'react'
import styled from 'styled-components'

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.selected? "#fff": "#000"};
  background-color: ${props => props.selected? "#3db9df": "#fff"};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 0.2px solid #3db9df;
  cursor: pointer;
`

class User extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <UserWrapper selected={this.props.selected}  onClick={(key) => this.props.updateSelectedUser(this.props.id)}>
        {this.props.data.fullname}
      </UserWrapper>
    );
  }
}

export default User