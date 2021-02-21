import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useLoadCV, useLoadExampleCV } from '../../store'
import Button from '../Common/Button'

const Show = () => {
  const { showExampleCV, toggleShowExampleCV } = useAppProps()
  const loadCV = useLoadCV()
  const loadExampleCV = useLoadExampleCV()

  return (
    <div className='toolbar__show item item_2'>
      <div className='toolbar__show-title title title_3 item item_3'>Show</div>
      <ul className='toolbar__show-commands'>
        {showExampleCV && (
          <li className='toolbar__show-my-cv item item_3'>
            <Button
              className='toolbar__show-my-cv-btn'
              title='My CV'
              onClick={() => {
                loadCV()
                toggleShowExampleCV()
              }}
            />
          </li>
        )}
        {!showExampleCV && (
          <li className='toolbar__show-example-cv item item_3'>
            <Button
              className='toolbar__show-example-cv-btn'
              title='Example'
              onClick={() => {
                loadExampleCV()
                toggleShowExampleCV()
              }}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default observer(Show)
