import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'

const Education = ({ editable, degree, university, duration }) => (
  <div className='education item item_2'>
    <InputField
      className='title title_1'
      value={degree}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Degree'
      readOnly={!editable}
    />
    <InputField
      className='title title_2'
      value={university}
      onChange={(e) => console.log(e.target.value)}
      placeholder='University'
      readOnly={!editable}
    />
    <InputField
      className='title title_4'
      value={duration}
      onChange={(e) => console.log(e.target.value)}
      placeholder='Education duration'
      readOnly={!editable}
    />
  </div>
)

Education.propTypes = {
  editable: PropTypes.bool.isRequired,
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Education
