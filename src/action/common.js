import ActionCommon from '../constant/actionCommon'

export function actionSetLoader(bool, time = 0) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ActionCommon.SET_LOADER,
        payload: bool
      })
    }, time)
  }
}
