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
        experience={experience}
      />
    ))}
  </div>
)

ExperienceList.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}

export default ExperienceList
