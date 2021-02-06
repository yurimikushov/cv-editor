import React from 'react'
import PropTypes from 'prop-types'

const AboutMe = ({ description }) => (
  <div className='about-me item item_1'>
    <div className='description'>{description}</div>
  </div>
)

AboutMe.propTypes = {
  description: PropTypes.string.isRequired,
}

export default AboutMe
