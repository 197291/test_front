import * as Const from '../constants/index';
import axios from 'axios';
import * as API from '../api/index';

export function changeModalStep(data){
    return {
        type:Const.CHANGE_MODAL_STEP,
        data
    }
}

// export function setPreview(data){
//     return {
//         type:Const.SET_PREVIEW_IMAGE,
//         data
//     }
// }
export function clearPreviewSrc(){
    return {
        type:Const.DELETE_PREVIEW_IMAGE
    }
}

export function setPreview(data, type){
   
    return {
        type: Const.ACTION_TYPE_PROMISE_SIMPLE,
        actions:[
             Const.SHOW_ERROR,
             Const.SEND_ORIGIN_AVATAR],
        promise:API.mainPage.saveOriginAva(data, type)
    }
}