import React from 'react'
import Show from './Show'
import Download from './Download'
import Upload from './Upload'
import './index.css'

const Toolbar = () => (
  <div className='toolbar toolbar_position-tr'>
    <Show />
    <Download />
    <Upload />
  </div>
)

export default Toolbar
