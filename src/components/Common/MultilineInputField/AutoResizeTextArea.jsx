import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeTextArea = ({ text, onChange, placeholder = '', ...props }) => {
  const textAreaRef = useRef()
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
  }, [text])

  const onChangeHandler = (e) => {
    setTextAreaHeight('auto')
    onChange(e)
  }

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      value={text}
      placeholder={placeholder}
      rows='1'
      style={{ height: textAreaHeight }}
      onChange={onChangeHandler}
    />
  )
}

AutoResizeTextArea.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default AutoResizeTextArea
