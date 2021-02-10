import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AboutMe = ({ showPreview, description, setDescription }) => (
  <div className='about-me item item_1'>
    {showPreview ? (
      <div className='about-me__description'>{description}</div>
    ) : (
      <textarea
        className='about-me__description'
        defaultValue={description}
        placeholder='Describe yourself'
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    )}
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}

export default AboutMe
