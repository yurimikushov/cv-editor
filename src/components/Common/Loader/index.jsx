import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Loader = ({ className = '', ...props }) => (
  <div className={(className ? className + ' ' : '') + 'loader'} {...props}>
    <span className='loader__title'>Loading...</span>
  </div>
)

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
