import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Common/Button'
import './index.css'

const EditButton = ({ editable, toggleEditable }) => (
  <Button
    className='edit-btn edit-btn_tr'
    title={!editable ? 'Edit' : 'Preview'}
    onClick={toggleEditable}
    tabIndex='-1'
  />
)

EditButton.propTypes = {
  editable: PropTypes.bool.isRequired,
  toggleEditable: PropTypes.func.isRequired,
}

export default EditButton
