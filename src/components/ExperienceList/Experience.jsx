import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'
import MultilineInputField from '../MultilineInputField'

const Experience = ({
  showPreview,
  position,
  company,
  duration,
  description,
}) => (
  <div className='experience item item_2'>
    <InputField
      className='title title_1'
      value={position}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Position'
      readOnly={showPreview}
    />
    <InputField
      className='title title_2'
      value={company}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Company'
      readOnly={showPreview}
    />
    <InputField
      className='title title_4'
      value={duration}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Experience duration'
      readOnly={showPreview}
    />
    <MultilineInputField
      className='description'
      value={description}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Experience description'
      readOnly={showPreview}
    />
  </div>
)

Experience.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Experience
