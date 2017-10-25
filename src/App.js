import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './containers/index.jsx';
import store from './core/store';
import { Route, Redirect} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login.jsx';
import Sign from './components/Sign.jsx';


class App extends Component {
  componentDidMount(){

  }

  render() {
    const user = localStorage.getItem('user');

    return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            user === null ? (
                <Redirect to="/login"/>
              ) : (
                <MainContainer />
              )
          )} />
          <Route path='/sign' component={Sign} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
