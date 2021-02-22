import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps } from '../../store'
import Button from '../Common/Button'
import './index.css'

const EditButton = () => {
  const { editable, showExampleCV, toggleEditable } = useAppProps()

  if (showExampleCV) {
    return null
  }

  return (
    <Button
      className='edit-btn edit-btn_tr'
      title={!editable ? 'Edit' : 'Preview'}
      onClick={toggleEditable}
      tabIndex='-1'
    />
  )
}

export default observer(EditButton)
