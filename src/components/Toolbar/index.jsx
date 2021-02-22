import React from 'react'
import Show from './Show'
import Download from './Download'
import './index.css'

const Toolbar = () => (
  <div className='toolbar toolbar_position-tr'>
    <Show />
    <Download />
  </div>
)

export default Toolbar
