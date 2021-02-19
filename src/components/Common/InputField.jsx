import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const InputField = ({
  value,
  onChange,
  className = '',
  readOnly = false,
  placeholder = '',
}) => {
  const inputRef = useRef()
  const [inputWidth, setInputWidth] = useState('auto')

  useEffect(() => {
    setInputWidth(`${inputRef.current.scrollWidth}px`)
  }, [value])

  const onChangeHandler = (e) => {
    setInputWidth('auto')
    onChange(e)
  }

  return (
    <input
      ref={inputRef}
      className={className}
      type='text'
      value={!value && readOnly && placeholder ? placeholder : value}
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
