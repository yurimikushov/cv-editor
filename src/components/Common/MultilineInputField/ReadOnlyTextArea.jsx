import React from 'react'
import PropTypes from 'prop-types'
import htmlToReactElements from 'html-react-parser'
import { plainTextToHtml } from '../../../utils'

const ReadOnlyTextArea = ({ text, ...props }) => (
  <div className='read-only-textarea' {...props}>
    {htmlToReactElements(plainTextToHtml(text))}
  </div>
)

ReadOnlyTextArea.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ReadOnlyTextArea
