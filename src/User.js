import React, {Component} from 'react'
import styled, { css } from 'styled-components'

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class User extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <UserWrapper>
        {this.props.data.fullname}
      </UserWrapper>
    );
  }
}

export default User