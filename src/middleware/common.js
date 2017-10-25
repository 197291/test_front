
export const common =  store => next => action => {

    try {
      const [startAction, successAction, failureAction, afterAction] = action.actions

      switch (action.type) {

        case Constants.ACTION_TYPE_PROMISE :
          action.promise.then((data) => {

            if (typeof successAction !== 'undefined') {
              store.dispatch({
                type: successAction,
                data,
              })
              store.dispatch({
                type: afterAction,
                data,
              })
            }
            return data
          }, (error) => {
            console.log('error from middleware', error)
            next({type:failureAction}) 
          })
          break
        default :
          return next(action)
          break
      }
    } catch (e) {
      return next(action)
    }
  
};

export {common}
