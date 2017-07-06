import React from 'react';
import { map, filter } from 'lodash'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const categoryList = ({data, updateSelectedData}) => {
  return (
    <ListWrapper>
      {
        map(data, (value, key) => {
            return (
              <div 
                style={{border: "1px solid black", margin: "10px"}}
                onMouseOver={() => updateSelectedData(key)}
              >
                {value.fullname}<br />
                {value.position}<br />
                <Link to={"/edit/" + key}>
                  <button
                    isSelectUser={key}>
                    Edit
                  </button>
                </Link>
              </div>
            )
        })
      }
    </ListWrapper>
  )
}

export default categoryList;

const ListWrapper = styled.div`
  width: 30%;
  background-color: grey;
`