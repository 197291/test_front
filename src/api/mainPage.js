import axios from 'axios'
import * as Const from '../constants'
import { apiUrl } from '../helpers/Helpers'


export function saveOriginAva (data, type) {
   console.log('type', type)
    return axios({
        method:'post',
        url:apiUrl(Const.URL_SAVE_ORIGIN_AVATAR),
        data,
        headers:{
            'Content-Type':type
        }
    })
    .then((r) => r.data)
}
// export function saveOriginAva (data) {
//     return axios({
//         method:post,
//         url:apiUrl(Const.URL_SAVE_ORIGIN_AVATAR),
//         data,
//         headers:{
//             ContentType:type
//         }
//     }).post(apiUrl(Const.URL_SAVE_ORIGIN_AVATAR), data)
//     .then((r) => r.data)
// }
