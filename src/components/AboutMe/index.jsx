import React from 'react'
import PropTypes from 'prop-types'
import TextArea from '../AutoResizableTextArea'
import './index.css'

const AboutMe = ({ showPreview, description, setDescription }) => (
  <div className='about-me item item_1'>
    <TextArea
      className='about-me__description'
      text={description}
      placeholder='Describe yourself'
      readOnly={showPreview}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>
)

AboutMe.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}

export default AboutMe
