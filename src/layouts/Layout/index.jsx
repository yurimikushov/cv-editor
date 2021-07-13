import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '../../components/Toolbar'
import './index.css'

const Layout = ({ children }) => (
  <div className='layout'>
    <Toolbar className='toolbar_tr' />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
}

export default Layout
