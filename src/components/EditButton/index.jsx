import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps } from '../../store'
import './index.css'

const EditButton = () => {
  const { editable, toggleEditable } = useAppProps()

  return (
    <button className='edit-btn edit-btn_tr' onClick={toggleEditable}>
      {!editable ? 'Edit' : 'Preview'}
    </button>
  )
}

export default observer(EditButton)
