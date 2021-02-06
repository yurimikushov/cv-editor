import React from 'react'
import Header from './containers/Header'

const App = () => (
  <div className='cv-container'>
    <div className='top-line'></div>
    <div className='cv'>
      <Header />
      <main className='info'>Info</main>
    </div>
  </div>
)

export default App
