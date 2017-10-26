import axios from 'axios'
import * as Constants from '../constants'
import { apiUrl } from '../helpers/Helpers'

const config = {

}


export function login (auth) {
  config.data = auth;
  return axios.post(apiUrl(Constants.URL_AUTH), config)
    .then((r) => r.data)
}
export function signUp (auth) {
  config.data = auth;
  return axios.post(apiUrl(Constants.URL_SIGN_UP), config)
    .then((r) => r.data)
}


