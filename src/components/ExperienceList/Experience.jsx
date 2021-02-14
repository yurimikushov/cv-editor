import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'
import MultilineInputField from '../MultilineInputField'

const Experience = ({ showPreview, experience }) => (
  <div className='experience item item_2'>
    <InputField
      className='title title_1'
      value={experience.position}
      onChange={(e) => experience.setPosition(e.target.value)}
      placeholder='Position'
      readOnly={showPreview}
    />
    <InputField
      className='title title_2'
      value={experience.company}
      onChange={(e) => experience.setCompany(e.target.value)}
      placeholder='Company'
      readOnly={showPreview}
    />
    <InputField
      className='title title_4'
      value={experience.duration}
      onChange={(e) => experience.setDuration(e.target.value)}
      placeholder='Experience duration'
      readOnly={showPreview}
    />
    <MultilineInputField
      className='description'
      value={experience.description}
      onChange={(e) => experience.setDescription(e.target.value)}
      placeholder='Experience description'
      readOnly={showPreview}
    />
  </div>
)

Experience.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  experience: PropTypes.object.isRequired,
}

export default Experience
