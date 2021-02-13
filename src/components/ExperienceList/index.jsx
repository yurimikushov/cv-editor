import React from 'react'
import PropTypes from 'prop-types'
import Experience from './Experience'

const ExperienceList = ({ showPreview, experiences }) => (
  <div className='experiences item item_1'>
    <div className='title title_0'>Experience</div>
    {experiences.map((experience) => (
      <Experience
        showPreview={showPreview}
        key={experience.id}
        {...experience}
      />
    ))}
  </div>
)

ExperienceList.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  experiences: PropTypes.array.isRequired,
}

export default ExperienceList
