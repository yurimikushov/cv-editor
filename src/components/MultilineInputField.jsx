import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MultilineInputField = (props) => {
  const textAreaRef = useRef()
  const [text, setText] = useState(props.value || '')
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

  if (!text && props.readOnly) {
    if (props.readOnlyPlaceholder) {
      textAreaValue = props.readOnlyPlaceholder
    } else if (props.placeholder) {
      textAreaValue = props.placeholder
    }
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

MultilineInputField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  readOnlyPlaceholder: PropTypes.string,
}

export default MultilineInputField