import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NewMenu = () => {
  return (
    <MenuWrapper>
      <Link to={"/"}>
        <button>
          Home
        </button>
      </Link>
      <Link to={"/category/all"}>
        <button>
          All
        </button>
      </Link>
      <Link to={"/category/Developer"}>
        <button>
          Developer
        </button>
      </Link>
    </MenuWrapper>
  )
}

export default NewMenu;

const MenuWrapper = styled.div`
  width: 100px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
`