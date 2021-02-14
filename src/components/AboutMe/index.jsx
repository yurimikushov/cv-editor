import React from 'react'
import PropTypes from 'prop-types'
import MultilineInputField from '../MultilineInputField'
import './index.css'

const AboutMe = ({ showPreview, aboutMe }) => (
  <div className='about-me item item_1'>
    <MultilineInputField
      className='about-me__description'
      value={aboutMe.description}
      onChange={(e) => aboutMe.setDescription(e.target.value)}
      placeholder='Describe yourself'
      readOnly={showPreview}
      readOnlyPlaceholder='Description of your qualities, knowledge and hobbies.'
    />
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  aboutMe: PropTypes.exact({
    description: PropTypes.string.isRequired,
    setDescription: PropTypes.func.isRequired,
  }),
}

export default AboutMe
