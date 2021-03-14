import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeTextArea = ({
  value,
  onChange,
  placeholder = '',
  ...props
}) => {
  const textAreaRef = useRef()
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
  }, [value])

  const onChangeHandler = (e) => {
    setTextAreaHeight('auto')
    onChange(e)
  }

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      value={value}
      placeholder={placeholder}
      rows='1'
      style={{ height: textAreaHeight }}
      onChange={onChangeHandler}
    />
  )
}

AutoResizeTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default AutoResizeTextArea
