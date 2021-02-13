import React from 'react'
import PropTypes from 'prop-types'

const Title = ({
  value,
  onChange,
  className = '',
  readOnly = false,
  placeholder = '',
}) => {
  if (readOnly) {
    return <div className={className}>{value || placeholder}</div>
  }

  return (
    <input
      className={className}
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  )
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Title
