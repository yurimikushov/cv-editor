import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

const EducationList = ({ educationList }) => (
  <div className='educations item item_1'>
    <div className='title title_0'>Education</div>
    {educationList.map((education) => (
      <Education key={education.id} {...education} />
    ))}
  </div>
)

EducationList.propTypes = {
  educationList: PropTypes.array.isRequired,
}

export default EducationList
