import createReducer from '../utils/reducerCreator'
import ActionCommon from '../constant/actionCommon'

const defaultState = {
  show: false
}
const actionHandlers = {
  [ActionCommon.SET_COMPONENT]: (state, payload) => ({ ...state, show: payload })
}

export default createReducer(actionHandlers, defaultState)
