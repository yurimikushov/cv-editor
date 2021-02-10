import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({ className, value, placeholder, onChange }) => (
  <textarea
    className={className}
    defaultValue={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  ></textarea>
)

TextBox.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextBox
