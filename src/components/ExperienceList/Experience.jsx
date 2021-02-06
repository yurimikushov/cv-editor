import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({ position, company, duration, discription }) => (
  <div className='experience__item'>
    <div className='experience__item-title experience__item-title_lvl-1'>
      {position}
    </div>
    <div className='experience__item-title experience__item-title_lvl-2'>
      {company}
    </div>
    <div className='experience__item-title experience__item-title_lvl-3'>
      {duration}
    </div>
    <div className='experience__item-discription'>{discription}</div>
  </div>
)

Experience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
}

export default Experience
