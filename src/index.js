import React from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from './store'
import App from './App'
import './reset.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.querySelector('.app')
)
