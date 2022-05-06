import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer'
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer})



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
// const renderApp = () => {
//   root.render(<App />)
// }

// renderApp()
// store.subscribe(renderApp)
