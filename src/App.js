import React from 'react'
import Header from './containers/Header'
import Info from './containers/Info'

const App = () => (
  <div className='cv-container'>
    <div className='top-line'></div>
    <div className='cv'>
      <Header />
      <Info />
    </div>
  </div>
)

export default App
