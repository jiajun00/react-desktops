import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

let store
if(process.env.NODE_ENV === 'development'){
  // 用于开发环境
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
}
if(process.env.NODE_ENV === 'production'){
  // 用于生产环境
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  store = createStoreWithMiddleware(reducer);
}




export default store;