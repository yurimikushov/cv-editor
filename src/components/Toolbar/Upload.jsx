import React from 'react'
import Button from '../Common/Button'

const Upload = () => (
  <div className='toolbar__upload item item_2'>
    <div className='toolbar__upload-title title title_3 item item_3'>
      Upload
    </div>
    <ul className='toolbar__upload-commands'>
      <li className='toolbar__upload item item_3'>
        <Button
          className='toolbar__upload-btn'
          title='JSON'
          onClick={() => alert('Not implemented yet')}
        />
      </li>
    </ul>
  </div>
)

export default Upload
