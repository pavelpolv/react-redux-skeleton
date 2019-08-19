import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function compileReducers() {
    return combineReducers(reducers)
}

const store = createStore(compileReducers(), {},
    composeEnhancers(applyMiddleware(thunk)))

export default store
