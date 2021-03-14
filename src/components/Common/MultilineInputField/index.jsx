import React from 'react'
import PropTypes from 'prop-types'
import ReadOnlyTextArea from './ReadOnlyTextArea'
import AutoResizeTextArea from './AutoResizeTextArea'

const MultilineInputField = ({
  value,
  onChange,
  placeholder = '',
  readOnly = false,
  ...props
}) => {
  if (readOnly) {
    return (
      <ReadOnlyTextArea value={value} placeholder={placeholder} {...props} />
    )
  }

  return (
    <AutoResizeTextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  )
}

MultilineInputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
}

export default MultilineInputField
