import * as Helper  from '../helpers/Helpers'
import axios from 'axios'
import * as API from '../api/index'
import * as Constants from '../constants'

export function login (data) {
  return {
    type: Constants.ACTION_TYPE_PROMISE,
    actions: [Constants.LOGIN_REQUEST, Constants.LOGIN_SUCCESS, Constants.SHOW_ERROR, Constants.USER_SET_TOKEN],
    promise: API.user.login(data),
  }
}

export function logout () {
  return {
    type: Constants.USER_LOGOUT,
  }
}


export function setAuthorizationToken (response, storage) {
  storage = storage || localStorage;
  console.log('setAuthorizationToken', response);

  if (Helper.empty(response) || Helper.empty(response.token)) {
    delete axios.defaults.headers.common['Authorization'];
    storage.removeItem('user');
  } else {
    storage.setItem('user', JSON.stringify(response));

    console.log('storage', storage);
    axios.defaults.headers.common['Authorization'] = response.token
  }
}

export function startSessionStack(userData) {
  if (sessionstack) {
    sessionstack('identify', {
      userId: userData.user_id,
      email: userData.email,
      displayName: userData.user_name
    });
  }
}