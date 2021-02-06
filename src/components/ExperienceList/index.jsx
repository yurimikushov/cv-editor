import React from 'react'
import PropTypes from 'prop-types'
import Experience from './Experience'

const ExperienceList = ({ experienceList }) => (
  <div className='experiences item item_1'>
    <div className='title title_0'>Experience</div>
    {experienceList.map((experience) => (
      <Experience key={experience.id} {...experience} />
    ))}
  </div>
)

ExperienceList.propTypes = {
  experienceList: PropTypes.array.isRequired,
}

export default ExperienceList
