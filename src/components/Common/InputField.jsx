import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const InputField = ({
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  ...props
}) => {
  const inputRef = useRef()
  const [inputWidth, setInputWidth] = useState('auto')

  useEffect(() => {
    setInputWidth(`${inputRef.current.scrollWidth}px`)
  }, [value])

  let inputValue = value

  if (!value && readOnly && placeholder) {
    inputValue = placeholder
  }

  const onChangeHandler = (e) => {
    setInputWidth('auto')
    onChange(e)
  }

  return (
    <input
      {...props}
      ref={inputRef}
      type='text'
      value={inputValue}
      placeholder={placeholder}
      readOnly={readOnly}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={onChangeHandler}
    />
  )
}

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default InputField
