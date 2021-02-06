import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AboutMe = ({ description }) => (
  <div className='about-me'>{description}</div>
)

AboutMe.propTypes = {
  description: PropTypes.string.isRequired,
}

export default AboutMe
