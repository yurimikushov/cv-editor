import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({ position, company, duration, discription }) => (
  <article className='experience__item'>
    <h1 className='experience__item-title experience__item-title_lvl-1'>
      {position}
    </h1>
    <h2 className='experience__item-title experience__item-title_lvl-2'>
      {company}
    </h2>
    <h3 className='experience__item-title experience__item-title_lvl-3'>
      {duration}
    </h3>
    <p className='experience__item-discription'>{discription}</p>
  </article>
)

Experience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
}

export default Experience
