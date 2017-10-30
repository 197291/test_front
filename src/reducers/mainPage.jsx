import * as Const from '../constants/index';

const init = {
    modalStep:1,
    initAvatar:'./no_image.png',
    srcLoadImage:'',
    previewHeight:'',
    previewWidth:'',
    previewSrc:''
}


export function mainPage(state=init, action){
    switch(action.type){
        case Const.CHANGE_MODAL_STEP: 
            return {...state, modalStep: action.data}
        break;
        case Const.SET_PREVIEW_IMAGE: 
       
            return {...state,
                 previewSrc: action.data.src,
                 previewHeight:action.data.height,
                 previewWidth:action.data.width}
        break;
        case Const.DELETE_PREVIEW_IMAGE: 
            return {...state, previewSrc: ''}
        break;
        case Const.SEND_ORIGIN_AVATAR: 
            return {...state, previewSrc: action.src,}
        break;
        default: return state;
    }
}