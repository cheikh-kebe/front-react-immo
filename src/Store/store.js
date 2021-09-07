import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import LoggedUserReducer from './Reducers/LoggedUserReducer'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


const rootReducer = combineReducers({
  user: LoggedUserReducer
})

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export let store
if (window.navigator.userAgent.includes('Chrome')) {
store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
}else{
store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)))
}

export let persistor = persistStore(store)