import React from 'react'
import Header from './containers/Header'
import Info from './containers/Info'
import './App.css'

const App = () => (
  <>
    <div className='top-line'></div>
    <div className='cv'>
      <Header />
      <Info />
    </div>
  </>
)

export default App
