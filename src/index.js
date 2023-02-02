import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
// import reducer from './redux/reducer'
import obj from './redux/reducer/obj'
import news from './redux/reducer/news'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers, compose, applyMiddleware } from 'redux'

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({ type: action })
  }
  return next(action)
}

const enhancer = (createStore) => (...args) => {
  const store = createStore(...args)
  const oldDispatch = store.dispatch
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return oldDispatch({ type: action })
    }
    return oldDispatch(action)
  }
  return store
}

const reducer = combineReducers({ obj, news })

// const store = createStore(reducer, enhancer)

const store = createStore(reducer, applyMiddleware(stringMiddleware))

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)
