import React from 'react'
import PropTypes from 'prop-types'
import htmlToReactElements from 'html-react-parser'
import { plainTextToHtml } from '../../../utils'

const ReadOnlyTextArea = ({ value, placeholder, ...props }) => {
  let textAreaValue = value

  if (!value && placeholder) {
    textAreaValue = placeholder
  }

  return (
    <div className='read-only-textarea' {...props}>
      {htmlToReactElements(plainTextToHtml(textAreaValue))}
    </div>
  )
}

ReadOnlyTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default ReadOnlyTextArea
