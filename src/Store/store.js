import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import LoggedUserReducer from './Reducers/LoggedUserReducer'
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
  User: LoggedUserReducer
})

export let store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))