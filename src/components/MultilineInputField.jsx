import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MultilineInputField = ({
  value,
  onChange,
  className = '',
  placeholder = '',
  readOnly = false,
  readOnlyPlaceholder = '',
}) => {
  const textAreaRef = useRef()
  const [text, setText] = useState(value)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    // FIXME: don't should remove the bottom padding in JS
    const textAreaBottomPadding = !readOnly ? 4 : 0

    setTextAreaHeight(
      `${textAreaRef.current.scrollHeight - textAreaBottomPadding}px`
    )
  }, [text, readOnly])

  const onChangeHandler = (e) => {
    setText(e.target.value)
    setTextAreaHeight('auto')

    if (onChange) {
      onChange(e)
    }
  }

  let textAreaValue = text

  if (!text && readOnly) {
    if (readOnlyPlaceholder) {
      textAreaValue = readOnlyPlaceholder
    } else if (placeholder) {
      textAreaValue = placeholder
    }
  }

  return (
    <div className='textarea-wrapper' style={{ height: textAreaHeight }}>
      <textarea
        ref={textAreaRef}
        className={className}
        value={textAreaValue}
        placeholder={placeholder}
        readOnly={readOnly}
        rows='1'
        style={{ height: textAreaHeight }}
        onChange={onChangeHandler}
      />
    </div>
  )
}

MultilineInputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  readOnlyPlaceholder: PropTypes.string,
}

export default MultilineInputField
