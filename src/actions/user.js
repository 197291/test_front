import * as Helper  from '../helpers/Helpers'
import axios from 'axios'
import * as API from '../api/index'
import * as Constants from '../constants'

export function login (data) {
  return {
    type: Constants.ACTION_TYPE_PROMISE,
    actions: [Constants.LOGIN_REQUEST, Constants.LOGIN_SUCCESS, Constants.SHOW_ERROR],
    promise: API.user.login(data),
  }
}

export function logout () {
  return {
    type: Constants.USER_LOGOUT,
  }
}

export function signUp (data) {
  return {
    type: Constants.ACTION_TYPE_PROMISE,
    actions: [Constants.SIGN_UP_REQUEST, Constants.SIGN_UP_SUCCESS, Constants.SHOW_ERROR, Constants.USER_SET_TOKEN],
    promise: API.user.signUp(data),
  }
}

export function setUser (data) {
  return {
    type: Constants.LOGIN_SUCCESS,
    data,
  }
}

export function setAuthorizationToken (response) {

  if (Helper.empty(response) || Helper.empty(response.token)) {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  } else {
    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('token', response.token);
    axios.defaults.headers.common['Authorization'] = response.token

  }
}

export function startSessionStack(userData) {

}
