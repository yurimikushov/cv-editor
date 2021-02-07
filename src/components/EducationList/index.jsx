import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'

const EducationList = ({ educations }) => (
  <div className='educations item item_1'>
    <div className='title title_0'>Education</div>
    {educations.map((education) => (
      <Education key={education.id} {...education} />
    ))}
  </div>
)

EducationList.propTypes = {
  educations: PropTypes.array.isRequired,
}

export default EducationList
