import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Button from '../Common/Button'
import './index.css'

const EditButton = () => {
  const { appProps } = useStore()
  const { t } = useTranslation()

  return (
    <Button
      className='edit-btn edit-btn_tr'
      title={!appProps.editable ? t('Edit') : t('Preview')}
      onClick={() => appProps.toggleEditable()}
      tabIndex='-1'
    />
  )
}

export default observer(EditButton)
