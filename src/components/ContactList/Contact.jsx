import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ href, title }) => (
  <div className='contact'>
    <a href={href}>{title}</a>
  </div>
)

Contact.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Contact
