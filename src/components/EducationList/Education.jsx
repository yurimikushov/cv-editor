import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'

const Education = ({ editable, education }) => (
  <div className='education item item_2'>
    <InputField
      className='title title_1'
      value={education.degree}
      onChange={(e) => education.setDegree(e.target.value)}
      placeholder='Degree'
      readOnly={!editable}
    />
    <InputField
      className='title title_2'
      value={education.university}
      onChange={(e) => education.setUniversity(e.target.value)}
      placeholder='University'
      readOnly={!editable}
    />
    <InputField
      className='title title_4'
      value={education.duration}
      onChange={(e) => education.setDuration(e.target.value)}
      placeholder='Education duration'
      readOnly={!editable}
    />
  </div>
)

Education.propTypes = {
  editable: PropTypes.bool.isRequired,
  education: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    setDegree: PropTypes.func.isRequired,
    setUniversity: PropTypes.func.isRequired,
    setDuration: PropTypes.func.isRequired,
  }),
}

export default Education
