import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const EditButton = ({ showPreview, toggleShowPreview }) => (
  <button className='edit-btn edit-btn_tr' onClick={toggleShowPreview}>
    {showPreview ? 'Edit' : 'Preview'}
  </button>
)

EditButton.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  toggleShowPreview: PropTypes.func.isRequired,
}

export default EditButton
