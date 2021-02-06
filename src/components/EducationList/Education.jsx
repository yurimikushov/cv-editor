import React from 'react'
import PropTypes from 'prop-types'

const Education = ({ degree, university, duration }) => (
  <div className='education__item'>
    <div className='education__item-title education__item-title_lvl-1'>
      {degree}
    </div>
    <div className='education__item-title education__item-title_lvl-2'>
      {university}
    </div>
    <div className='education__item-title education__item-title_lvl-3'>
      {duration}
    </div>
  </div>
)

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Education
