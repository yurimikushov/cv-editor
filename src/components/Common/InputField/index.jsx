import React from 'react'
import PropTypes from 'prop-types'
import ReadOnlyInput from './ReadOnlyInput'
import AutoResizeInput from './AutoResizeInput'

const InputField = ({
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  ...props
}) => {
  if (readOnly) {
    return <ReadOnlyInput {...props} value={value} placeholder={placeholder} />
  }

  return (
    <AutoResizeInput
      {...props}
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default InputField
