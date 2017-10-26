import { combineReducers } from 'redux'
import {init} from './init.js'
import {userSettings} from './userSettings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  init,
  userSettings,
  routing: routerReducer
})
