import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const AboutMe = ({ showPreview, description, setDescription }) => (
  <div className='about-me item item_1'>
    <div
      className='about-me__description'
      contentEditable={!showPreview}
      onBlur={(e) => setDescription(e.target.innerText)}
    >
      {description}
    </div>
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}

export default AboutMe
