import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({ position, company, duration, description }) => (
  <div className='experience item item_2'>
    <div className='title title_1'>{position}</div>
    <div className='title title_2'>{company}</div>
    <div className='title title_4'>{duration}</div>
    <div className='description'>{description}</div>
  </div>
)

Experience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Experience
