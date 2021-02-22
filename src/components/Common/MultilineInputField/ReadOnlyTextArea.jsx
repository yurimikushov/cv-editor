import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { textToHtml } from '../../../utils'

const ReadOnlyTextArea = ({ text, ...props }) => (
  <div className='read-only-textarea' {...props}>
    {parse(textToHtml(text))}
  </div>
)

ReadOnlyTextArea.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ReadOnlyTextArea
