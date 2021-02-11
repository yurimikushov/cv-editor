import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeTextArea = (props) => {
  const textAreaRef = useRef()
  const [text, setText] = useState(props.text || '')
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
  }, [text])

  const onChangeHandler = (e) => {
    setText(e.target.value)
    setTextAreaHeight('auto')

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <textarea
      ref={textAreaRef}
      className={props.className}
      defaultValue={text}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      style={{ height: textAreaHeight }}
      onChange={onChangeHandler}
    />
  )
}

AutoResizeTextArea.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
}

export default AutoResizeTextArea
