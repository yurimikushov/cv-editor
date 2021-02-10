import React from 'react'
import PropTypes from 'prop-types'
import TextBox from '../TextBox'
import './index.css'

const AboutMe = ({ showPreview, description, setDescription }) => (
  <div className='about-me item item_1'>
    {showPreview ? (
      <div className='about-me__description'>
        {description || 'Description about you'}
      </div>
    ) : (
      <TextBox
        className='about-me__description'
        value={description}
        placeholder='Describe yourself'
        onChange={setDescription}
      />
    )}
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}

export default AboutMe
