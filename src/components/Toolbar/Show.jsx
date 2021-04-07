import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore, useLoadCV, useLoadExampleCV } from '../../store'
import Button from '../Common/Button'

const Show = () => {
  const { appProps } = useStore()
  const loadCV = useLoadCV()
  const loadExampleCV = useLoadExampleCV()
  const { t } = useTranslation()

  const prevEditableRef = useRef(appProps.editable)

  const showExampleCVHandler = () => {
    prevEditableRef.current = appProps.editable

    if (appProps.editable) {
      appProps.toggleEditable()
    }

    loadExampleCV()
    appProps.toggleShowExampleCV()
  }

  const showMyCVHandler = () => {
    loadCV()
    appProps.toggleShowExampleCV()

    if (prevEditableRef.current !== appProps.editable) {
      appProps.toggleEditable()
    }
  }

  return (
    <div className='toolbar__show item item_2'>
      <div className='toolbar__show-title title title_3 item item_3'>
        {t('Show')}
      </div>
      <ul className='toolbar__show-actions'>
        {appProps.showExampleCV ? (
          <li className='toolbar__show-my-cv item item_3'>
            <Button
              className='toolbar__show-my-cv-btn'
              title={t('My CV')}
              onClick={showMyCVHandler}
              tabIndex='-1'
            />
          </li>
        ) : (
          <li className='toolbar__show-example-cv item item_3'>
            <Button
              className='toolbar__show-example-cv-btn'
              title={t('Example')}
              onClick={showExampleCVHandler}
              tabIndex='-1'
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default observer(Show)
