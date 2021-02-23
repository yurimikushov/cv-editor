import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Button from '../Common/Button'
import './index.css'

const EditButton = () => {
  const { appProps } = useStore()

  if (appProps.showExampleCV) {
    return null
  }

  return (
    <Button
      className='edit-btn edit-btn_tr'
      title={!appProps.editable ? 'Edit' : 'Preview'}
      onClick={appProps.toggleEditable}
      tabIndex='-1'
    />
  )
}

export default observer(EditButton)
