import React from 'react'
import PropTypes from 'prop-types'

const Education = ({ degree, university, duration }) => (
  <div className='education item item_2'>
    <div className='title title_1'>{degree}</div>
    <div className='title title_2'>{university}</div>
    <div className='title title_4'>{duration}</div>
  </div>
)

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Education
