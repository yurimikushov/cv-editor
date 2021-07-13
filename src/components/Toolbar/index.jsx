import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Show from './Show'
import Download from './Download'
import Languages from './Languages'
import './index.css'

const Toolbar = ({ className }) => (
  <div className={cn('toolbar', className)}>
    <Show />
    <Download />
    <Languages />
  </div>
)

Toolbar.propTypes = {
  className: PropTypes.string,
}

export default Toolbar
