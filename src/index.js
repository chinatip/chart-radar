import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserEdit from './pages/UserEdit'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { initStore } from './Store';
import { Provider } from 'react-redux'
import { Router, Route, BrowserHistory } from 'react-router'


const store = initStore()

ReactDOM.render(
    <Provider store={store}>
      {/*<Router>
        <Route path="/" component={App}>
          <Route path="edit/:userId" component={UserEdit} />
        </Route>
      </Router>*/}
      <App/>
    </Provider>
  , document.getElementById('root'));


// const UserEditPage = () => {}

// compose(
//   firebaseConnect((props, firebase) => {
//     return ['/stats/' + props.params.userId]
//   }),
//   connect((state, props) => {
//     const userStats = state.firebase.getIn('stats', props.params.userId)
//     return {
//       userStats: userStats
//     }
//   })
// )(UserEditPage)