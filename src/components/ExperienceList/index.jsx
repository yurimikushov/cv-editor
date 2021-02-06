import React from 'react'
import PropTypes from 'prop-types'
import Experience from '../Experience'
import './index.css'

const ExperienceList = ({ experienceList }) => (
  <div className='experience'>
    <header className='experience__title'></header>
    {experienceList.map((experience) => (
      <Experience key={experience.id} {...experience} />
    ))}
  </div>
)

ExperienceList.propTypes = {
  experienceList: PropTypes.array.isRequired,
}

export default ExperienceList
