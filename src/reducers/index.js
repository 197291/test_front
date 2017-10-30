import { combineReducers } from 'redux'
import {init} from './init.js'
import {userSettings} from './userSettings';
import { routerReducer } from 'react-router-redux';
import { mainPage } from './mainPage';

export default combineReducers({
  init,
  userSettings,
  mainPage,
  routing: routerReducer
})
