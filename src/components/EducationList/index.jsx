import React from 'react'
import PropTypes from 'prop-types'
import Education from '../Education'
import './index.css'

const EducationList = ({ educationList }) => (
  <div className='education'>
    <header className='education__title'>Education</header>
    {educationList.map((education) => (
      <Education key={education.id} {...education} />
    ))}
  </div>
)

EducationList.propTypes = {
  educationList: PropTypes.array.isRequired,
}

export default EducationList
