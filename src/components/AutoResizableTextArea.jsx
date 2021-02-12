import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeTextArea = (props) => {
  const textAreaRef = useRef()
  const [text, setText] = useState(props.text || '')
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    // FIXME: find out where the padding comes from
    const textAreaBottomPadding = 4
    setTextAreaHeight(
      `${textAreaRef.current.scrollHeight - textAreaBottomPadding}px`
    )
  }, [text])

  const onChangeHandler = (e) => {
    setText(e.target.value)
    setTextAreaHeight('auto')

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className={props.className} style={{ height: textAreaHeight }}>
      <textarea
        ref={textAreaRef}
        className={props.className}
        defaultValue={text}
        placeholder={props.placeholder}
        rows='1'
        readOnly={props.readOnly}
        style={{ height: textAreaHeight }}
        onChange={onChangeHandler}
      />
    </div>
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
