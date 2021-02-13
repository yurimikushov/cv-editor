import React from 'react'
import PropTypes from 'prop-types'

const Title = ({
  value,
  onChange,
  className = '',
  readOnly = false,
  placeholder = '',
}) => (
  <input
    className={className}
    type='text'
    value={!value && readOnly && placeholder ? placeholder : value}
    placeholder={placeholder}
    readOnly={readOnly}
    onChange={onChange}
  ></input>
)

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Title
