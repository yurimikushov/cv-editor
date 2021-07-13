import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { useLoadCV, useLoadExampleCV } from '../../hooks'
import Button from '../Common/Button'

const Show = () => {
  const { appProps } = useStore()
  const loadCV = useLoadCV()
  const loadExampleCV = useLoadExampleCV()
  const { t } = useTranslation()

  const showExampleCVHandler = async () => {
    window.__toolbar__ = {
      prevEditable: appProps.editable,
    }

    if (appProps.editable) {
      appProps.toggleEditable()
    }

    await loadExampleCV()

    appProps.toggleShowExampleCV()
  }

  const showMyCVHandler = async () => {
    appProps.toggleShowExampleCV()

    await loadCV()

    if (window.__toolbar__.prevEditable !== appProps.editable) {
      appProps.toggleEditable()
    }
  }

  return (
    <div className='toolbar__show item item_2'>
      <span className='toolbar__show-title title title_3 item item_3'>
        {t('Show')}
      </span>
      <Button
        className='toolbar__show-btn'
        title={appProps.showExampleCV ? t('My CV') : t('Example')}
        onClick={
          appProps.showExampleCV ? showMyCVHandler : showExampleCVHandler
        }
        tabIndex='-1'
      />
    </div>
  )
}

export default observer(Show)
