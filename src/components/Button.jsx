import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, onClick, ...props }) => (
  <button {...props} onClick={onClick}>
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
