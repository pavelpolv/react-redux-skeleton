import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function compileReducers () {
  let result = {}

  for (let name in reducers) {
    result[name] = reducers[name]
  }
  return combineReducers(result)
}

const store = createStore(compileReducers(), {}, composeEnhancers(applyMiddleware(thunk)))

export default store
