import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AboutMe = ({ text }) => (
  <article className='about-me'>
    <span>{text}</span>
  </article>
)

AboutMe.propTypes = {
  text: PropTypes.string.isRequired,
}

export default AboutMe
