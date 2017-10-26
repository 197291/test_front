import * as Helper from '../helpers/Helpers'
import * as Constants from '../constants'
import { setAuthorizationToken, startSessionStack } from '../actions/user'
import axios from 'axios'

export function userSettings (state = {}, action) {
  switch (action.type) {
    //auth
    case Constants.LOGIN_SUCCESS:
      const token = Helper.empty(action.data) || Helper.empty(action.data.token) ? null : action.data.token
 
      setAuthorizationToken(action.data)
      // axios.defaults.headers.common['Authorization'] = token
      return {...state, ...action.data, isAuthenticated: !Helper.empty(token)}

    case Constants.USER_SET_TOKEN:
      setAuthorizationToken(action.data)
      return {...state, ...action.data, isAuthenticated: !Helper.empty(action.data.token)}
    case Constants.USER_LOGOUT:
      setAuthorizationToken()
      return {}
    default :
      return state
  }
}
