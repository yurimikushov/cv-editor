import React from 'react'
import PropTypes from 'prop-types'
import MultilineInputField from '../MultilineInputField'
import './index.css'

const AboutMe = ({ showPreview, description, setDescription }) => (
  <div className='about-me item item_1'>
    <MultilineInputField
      className='about-me__description'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder='Describe yourself'
      readOnly={showPreview}
      readOnlyPlaceholder='Description of your qualities, knowledge and hobbies.'
    />
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}

export default AboutMe
