import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps } from '../../store'
import Button from '../Common/Button'
import './index.css'

const EditButton = () => {
  const { editable, toggleEditable } = useAppProps()

  return (
    <Button
      className='edit-btn edit-btn_tr'
      title={!editable ? 'Edit' : 'Preview'}
      onClick={toggleEditable}
    />
  )
}

export default observer(EditButton)
