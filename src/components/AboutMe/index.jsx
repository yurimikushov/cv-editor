import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AboutMe = ({ description }) => (
  <article className='about-me'>{description}</article>
)

AboutMe.propTypes = {
  description: PropTypes.string.isRequired,
}

export default AboutMe
