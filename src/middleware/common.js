import * as Constants from '../constants'

const common =  store => next => action => {

    try {
      const [startAction, successAction, failureAction, afterAction] = action.actions
      store.dispatch({
                type: startAction,
              })
      switch (action.type) {

        case Constants.ACTION_TYPE_PROMISE :
          action.promise.then((res) => {
            let data = res.data;
            if (typeof successAction !== 'undefined') {
              if(res.status === 200){
              store.dispatch({
                type: successAction,
                data,
              })
              if (typeof afterAction !== 'undefined'){
              store.dispatch({
                type: afterAction,
                data,
              })
            }
            }
            return data
          }
          }, (error) => {
            console.log('error from middleware', error)
            next({type:failureAction})
          })
          break
        case Constants.ACTION_TYPE_PROMISE_SIMPLE:
          const [error, success] = action.actions;
          action.promise.then(r => {store.dispatch({type:success,src:r.src})})
          .catch(err => {store.dispatch({type:error, data:err})});
          break;
        default :
          return next(action)
      }
    } catch (e) {
      return next(action)
    }

};

export {common}
