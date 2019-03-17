import createReducer from '../utils/reducerCreator'
import ActionCommon from '../constant/actionCommon'

const defaultState = {
  loader: true
}
const actionHandlers = {
  [ActionCommon.SET_LOADER]: (state, payload) => ({ ...state, loader: payload })
}

export default createReducer(actionHandlers, defaultState)
