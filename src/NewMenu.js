import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { map, groupBy } from 'lodash'
import {firebaseConnect, dataToJS} from 'react-redux-firebase';

const newData = {
  "fullname": "New User",
  "position": "unknown",
  "stats": {
    "0": { "label": "label-1", "value": 8 },
    "1": { "label": "label-2", "value": 8 },
    "2": { "label": "label-3", "value": 8 },
    "3": { "label": "label-4", "value": 8 },
    "4": { "label": "label-5", "value": 8 }
  },
  "notes": {
    "0": {
      "title": "Title",
      "text" : "Text"
    }
  }
}

// const addUser = (firebase) => {
//   return firebase.push('/users', newData).path.o[1];
// }

const NewMenu = ({ data, firebase }) => {
  // const id = firebase.push('/users', newData);
  // console.log("firebase", firebase)
  return (
    <MenuWrapper>
      <Link to={"/"}>
        <Button>
          Home
        </Button>
      </Link>
      {/*<Link to={"/edit/" + addUser(firebase)}>
        <Button>
          Add
        </Button>
      </Link>*/}
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