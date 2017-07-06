import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import NewMenu from '../NewMenu'
import CategoryBoardController from '../category/CategoryBoardController'

const Category = ({ usersData, category }) => {
  if (!isLoaded(usersData)) {
    return <div>Loading</div>
  }
  return (
    <div style={{display: "flex"}}>
      <NewMenu data={usersData}/>
      <div>
        <h1>Category: { category }</h1>
        <CategoryBoardController data={usersData} category={category}/>
      </div>
    </div>
  )
}

export default compose(
  firebaseConnect(['/users']),
  connect(
    ({ firebase }, props) => {
      const usersData = dataToJS(firebase, '/users');
      const category = props.match.params.category.toLowerCase();
      return { usersData, category }
    }
  )
)(Category)