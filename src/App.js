import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './containers/index.jsx';
import store from './core/store';
import { Route, Redirect} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

// import { connect } from 'react-redux';



export default class App extends Component {


  render() {

   return (
      <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route exact path="/" component={MainContainer}/>
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}


// const mapStateToProps = (state, ownProps) => {
//   return {
//     user:state.userSettings
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     setUser: (data) => {
//       dispatch(setUser(data))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

