import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'
import MultilineInputField from '../MultilineInputField'

const Experience = ({ editable, experience }) => (
  <div className='experience item item_2'>
    <InputField
      className='title title_1'
      value={experience.position}
      onChange={(e) => experience.setPosition(e.target.value)}
      placeholder='Position'
      readOnly={!editable}
    />
    <InputField
      className='title title_2'
      value={experience.company}
      onChange={(e) => experience.setCompany(e.target.value)}
      placeholder='Company'
      readOnly={!editable}
    />
    <InputField
      className='title title_4'
      value={experience.duration}
      onChange={(e) => experience.setDuration(e.target.value)}
      placeholder='Experience duration'
      readOnly={!editable}
    />
    <MultilineInputField
      className='description'
      value={experience.description}
      onChange={(e) => experience.setDescription(e.target.value)}
      placeholder='Experience description'
      readOnly={!editable}
    />
  </div>
)

Experience.propTypes = {
  editable: PropTypes.bool.isRequired,
  experience: PropTypes.shape({
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    setPosition: PropTypes.func.isRequired,
    setCompany: PropTypes.func.isRequired,
    setDuration: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
  }),
}

export default Experience
