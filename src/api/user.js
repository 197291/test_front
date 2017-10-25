import axios from 'axios'
import { URL_AUTH} from '../constants'
import { apiUrl } from '../helpers/Helpers'


export function login (auth) {
  return axios.post(apiUrl(URL_AUTH), auth)
    .then((r) => r.data)
}


