import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Education = ({ degree, university, duration }) => (
  <article className='education__item'>
    <h1 className='education__item-title education__item-title_lvl-1'>
      {degree}
    </h1>
    <h2 className='education__item-title education__item-title_lvl-2'>
      {university}
    </h2>
    <h3 className='education__item-title education__item-title_lvl-3'>
      {duration}
    </h3>
  </article>
)

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Education
