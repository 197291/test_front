import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/user';
import $ from 'jquery';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      remember_me: false,
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = () => {
    let data = {...this.state};
    data.token =  localStorage.getItem('token');
    this.props.login(data);

  };

  rememberMe = () => {
    this.setState({remember_me: !this.state.remember_me});
  };

  enterWithGoogle = () => {
      axios.get('http://localhost:4000/auth/google').then(res => {
          console.log(res)
      })
  }

  componentDidMount(){
    let _this = this;
    $('.login_modal_body').on('keypress', function(e){
        if(e.which === 13 || e.keyCode === 13){
            _this.onSubmit()
        }
    })
  }

  render(){
    const {user} = this.props;
    const token = localStorage.getItem('token');
    if(user.isAuthenticated || !!token){
        return  (<Redirect to="/" />)
    }
    return (
      <div id="login">
          <div className="login-dialog">
              <div className="modal-content">
                  <div className="login_modal_body">
                      <div className="form-group">
                          <input
                              type="text"
                              className="form-control"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange}
                              placeholder="Email Address"
                          />
                      </div>
                      <div className="form-group">
                          <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              placeholder="Password"
                          />
                      </div>
                      <div className="form-group">
                          <div className="row">
                              <div className="col-xs-6">
                                  <div className=" checkbox custom-checkbox ">
                                      <label >
                                          <input
                                              onClick={this.rememberMe}
                                              type="checkbox"
                                              checked={this.state.remember_me}
                                          />
                                          <span className="fa fa-check">&nbsp;</span> Remember me
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="btn-group-justified">
                              <button className="btn btn-lg btn-green" onClick={this.onSubmit}>Sign In</button>
                          </div>
                          <div>
                          <a href='http://localhost:4000/auth/google'>Log with google</a>
                          </div>
                      </div>
                      <p className="help-block">
                          Don't have an account? <Link to="/sign-up">Sign Up</Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );

  }

}


export default connect(
  (state) => {
      return {user: state.userSettings};
  },
  (dispatch) => bindActionCreators(actions, dispatch)
)(Login);



