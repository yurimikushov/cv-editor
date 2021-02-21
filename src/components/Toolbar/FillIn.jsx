import React from 'react'
import { observer } from 'mobx-react-lite'
import { useLoadExampleCV } from '../../store'
import Button from '../Common/Button'

const FillIn = () => {
  const loadExampleCV = useLoadExampleCV()

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
            onClick={loadExampleCV}
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(FillIn)
