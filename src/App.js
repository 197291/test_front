import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './containers/index.jsx';
import store from './core/store';
import { Route, Redirect} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';


class App extends Component {
  componentDidMount(){

  }

  render() {

   return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
