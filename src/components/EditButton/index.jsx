import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Button from '../Common/Button'
import './index.css'

const EditButton = ({ editable, toggleEditable }) => {
  const { t } = useTranslation()

  return (
    <Button
      className='edit-btn edit-btn_tr'
      title={!editable ? t('Edit') : t('Preview')}
      onClick={toggleEditable}
      tabIndex='-1'
    />
  )
}

EditButton.propTypes = {
  editable: PropTypes.bool.isRequired,
  toggleEditable: PropTypes.func.isRequired,
}

export default EditButton
