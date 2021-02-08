import React from 'react'
import PropTypes from 'prop-types'

const EditButton = ({ showPreview, toggleShowPreview }) => (
  <button className='edit-btn' onClick={toggleShowPreview}>
    {showPreview ? 'Edit' : 'Preview'}
  </button>
)

EditButton.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  toggleShowPreview: PropTypes.func.isRequired,
}

export default EditButton
