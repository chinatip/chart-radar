import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { map } from 'lodash'
import NewMenu from '../NewMenu'

class All extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.usersData,
      select: 'all'
    }
  }


  render() {
    const category = this.props.match.params.category;
    if (!isLoaded(this.props.usersData)) return <div>Loading</div>
    return (
      <div style={{display: "flex"}}>
        <NewMenu />
        <div>
          {category}
          {
          map(this.props.usersData, (value, key) => {
            if(category === value.position || category === 'all'){
              return (
                <div style={{border: "1px solid black", margin: "10px"}}>
                  {value.fullname}<br />
                  {value.position}<br />
                </div>
              )
            }
          })
          }
        </div>
      </div>
    )
  }
}

export default compose(
  firebaseConnect(['/users']),
  connect(
    ({ firebase }, props) => {
      console.log('firebase', firebase)
      const usersData = dataToJS(firebase, '/users');
      console.log('usersData', usersData)
      return { usersData }
    }
  )
)(All)