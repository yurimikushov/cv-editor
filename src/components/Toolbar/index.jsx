import React from 'react'
import Show from './Show'
import Download from './Download'
import Languages from './Languages'
import './index.css'

const Toolbar = () => (
  <div className='toolbar toolbar_position-tr'>
    <Show />
    <Download />
    <Languages />
  </div>
)

export default Toolbar
