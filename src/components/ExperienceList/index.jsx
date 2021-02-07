import React from 'react'
import PropTypes from 'prop-types'
import Experience from './Experience'

const ExperienceList = ({ experiences }) => (
  <div className='experiences item item_1'>
    <div className='title title_0'>Experience</div>
    {experiences.map((experience) => (
      <Experience key={experience.id} {...experience} />
    ))}
  </div>
)

ExperienceList.propTypes = {
  experiences: PropTypes.array.isRequired,
}

export default ExperienceList
