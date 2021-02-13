import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AutoResizeTextArea = (props) => {
  const textAreaRef = useRef()
  const [text, setText] = useState(props.text || '')
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    // FIXME: don't should remove the bottom padding in JS
    const textAreaBottomPadding = !props.readOnly ? 4 : 0

    setTextAreaHeight(
      `${textAreaRef.current.scrollHeight - textAreaBottomPadding}px`
    )
  }, [text, props.readOnly])

  const onChangeHandler = (e) => {
    setText(e.target.value)
    setTextAreaHeight('auto')

    if (props.onChange) {
      props.onChange(e)
    }
  }

  let textAreaValue = text

  if (!text && props.readOnly && props.readOnlyPlaceholder) {
    textAreaValue = props.readOnlyPlaceholder
  }

  return (
    <div className='textarea-wrapper' style={{ height: textAreaHeight }}>
      <textarea
        ref={textAreaRef}
        className={props.className}
        value={textAreaValue}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        rows='1'
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
  readOnlyPlaceholder: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
}

export default AutoResizeTextArea
