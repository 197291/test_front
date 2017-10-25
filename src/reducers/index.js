import { combineReducers } from 'redux'
import {init} from './init.js'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  init,
  routing: routerReducer
})
