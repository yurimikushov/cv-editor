import React from 'react'
import Button from '../Common/Button'

const FillIn = () => {
  return (
    <div className='toolbar__fill-in item item_2'>
      <div className='toolbar__fill-in-title title title_3 item item_3'>
        Fill in
      </div>
      <ul className='toolbar__fill-in-commands'>
        <li className='toolbar__fill-in-example item item_3'>
          <Button
            className='toolbar__fill-in-example-btn'
            title='Example'
            onClick={() => {}}
          />
        </li>
      </ul>
    </div>
  )
}

export default FillIn
