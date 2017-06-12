import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDp17uBiwBNc0ZSgnOIjeW0MlXrIT_GHr0",
    authDomain: "radarscore-33a0e.firebaseapp.com",
    databaseURL: "https://radarscore-33a0e.firebaseio.com"
}


const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

// INIT
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = () => {
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseConfig, { userProfile: 'users' }),
  )(createStore)
  
  return createStoreWithFirebase(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
