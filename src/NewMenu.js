import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { map, groupBy } from 'lodash'

const NewMenu = ({ data }) => {
  return (
    <MenuWrapper>
      <Link to={"/"}>
        <Button>
          Home
        </Button>
      </Link>
      <Link to={"/edit/1"}>
        <Button>
          Add
        </Button>
      </Link>
      <Link to={"/manage"}>
        <Button>
          Manage
        </Button>
      </Link>
      <br />
      <Link to={"/category/all"}>
        <Button>
          All
        </Button>
      </Link>
      {
        map(groupBy(data, g => g.position.toLowerCase()), (value, key) => {
          return (
            <Link to={"/category/" + key}>
              <Button>
                {key}
              </Button>
            </Link>
          )
        })
      }
    </MenuWrapper>
  )
}

export default NewMenu;

const MenuWrapper = styled.div`
  width: 200px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 1rem;

`

const Button = styled.button`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`