import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './redux/reducer'

const rootReducer =  combineReducers({
  messages : Reducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

