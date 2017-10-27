import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect } from 'react-router';
import axios from 'axios';

import MainPageContainer from './MainPageContainer/MainPageContainer';

import Button from 'material-ui/Button';

import {setUser} from '../actions/user';


class MainContainer extends Component {

  constructor(props){
    super(props)

    const token = localStorage.getItem('token');
    const data = {
      user:JSON.parse(localStorage.getItem('user')),
      token:token
    }
       if (token !== null) {
           this.props.setUser(data);
       }
  }

  check = () => {
    axios.get('http://localhost:4000/check').then(res => {
      console.log(res)
    })
  }

  render() {

    if(!this.props.user.isAuthenticated) {return <Redirect to="/login"/>}
    return (
      <div>
        <MainPageContainer user={this.props.user} />
        <Button raised color='primary' onClick={this.check}>press</Button>
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
