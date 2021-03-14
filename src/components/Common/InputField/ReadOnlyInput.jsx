import React from 'react'
import PropTypes from 'prop-types'

const ReadOnlyInput = ({ value, placeholder, ...props }) => (
  <div className='read-only-input' {...props}>
    {!value && placeholder ? placeholder : value}
  </div>
)

ReadOnlyInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default ReadOnlyInput
