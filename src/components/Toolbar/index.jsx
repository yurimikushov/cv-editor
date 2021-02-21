import React from 'react'
import Download from './Download'
import Upload from './Upload'
import FillIn from './FillIn'
import './index.css'

const Toolbar = () => (
  <div className='toolbar toolbar_position-tr'>
    <FillIn />
    <Download />
    <Upload />
  </div>
)

export default Toolbar
