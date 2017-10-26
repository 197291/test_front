import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect } from 'react-router';
import axios from 'axios';
import config from '../config/config.js';

import {setUser} from '../actions/user';

import logo from './logo.svg';
import './App.css';

class MainContainer extends Component {
  constructor(props){
    super(props)

    const data = {
      user:JSON.parse(localStorage.getItem('user')),
      token:localStorage.getItem('token')
    }
       if (data !== null) {
           this.props.setUser(data);
       }
  }

  render() {

    if(!this.props.user.isAuthenticated) {return <Redirect to="/login"/>}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.check}>press</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    init:state.init,
    user:state.userSettings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (data) => {
      dispatch(setUser(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
