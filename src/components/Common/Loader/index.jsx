import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.css'

const Loader = ({ className = '', ...props }) => (
  <div className={cn(className, 'loader')} {...props}>
    <span className='loader__title'>Loading...</span>
  </div>
)

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
