import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore, useLoadCV, useLoadExampleCV } from '../../store'
import Button from '../Common/Button'

const Show = () => {
  const { appProps } = useStore()
  const loadCV = useLoadCV()
  const loadExampleCV = useLoadExampleCV()

  return (
    <div className='toolbar__show item item_2'>
      <div className='toolbar__show-title title title_3 item item_3'>Show</div>
      <ul className='toolbar__show-commands'>
        {appProps.showExampleCV && (
          <li className='toolbar__show-my-cv item item_3'>
            <Button
              className='toolbar__show-my-cv-btn'
              title='My CV'
              onClick={() => {
                loadCV()
                appProps.toggleShowExampleCV()
              }}
              tabIndex='-1'
            />
          </li>
        )}
        {!appProps.showExampleCV && (
          <li className='toolbar__show-example-cv item item_3'>
            <Button
              className='toolbar__show-example-cv-btn'
              title='Example'
              onClick={() => {
                loadExampleCV()
                appProps.toggleShowExampleCV()
              }}
              tabIndex='-1'
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default observer(Show)
