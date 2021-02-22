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
  let textAreaValue = value

  if (!value && readOnly && placeholder) {
    textAreaValue = placeholder
  }

  if (readOnly) {
    return <ReadOnlyTextArea text={textAreaValue} {...props} />
  }

  return (
    <AutoResizeTextArea
      text={textAreaValue}
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
