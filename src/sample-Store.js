import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

// Firebase config
const firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
};

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
});

// INIT
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = () => {
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseConfig, { userProfile: 'users' }),
  )(createStore);
  
  return createStoreWithFirebase(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
}
