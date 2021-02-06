import React from 'react'
import PropTypes from 'prop-types'

const Language = ({ title }) => <div className='language'>{title}</div>

Language.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Language
