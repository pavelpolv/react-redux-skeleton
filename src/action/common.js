import ActionCommon from '../constant/actionCommon'

export function actionSetComponent (bool, time = 0) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ActionCommon.SET_COMPONENT,
        payload: bool
      })
    }, time)
  }
}
