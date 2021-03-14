import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeInput = ({ value, onChange, placeholder = '', ...props }) => {
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
      {...props}
      ref={inputRef}
      type='text'
      value={value}
      placeholder={placeholder}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={onChangeHandler}
    />
  )
}

AutoResizeInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default AutoResizeInput
