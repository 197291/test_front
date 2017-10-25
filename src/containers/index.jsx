import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import config from '../config/config.js';
import * as actions from '../actions';

import logo from './logo.svg';
import './App.css';

class MainContainer extends Component {
  componentDidMount = () =>{
    this.props.onClick();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    init:state.init
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(actions.auth.getUser('yuriy'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
