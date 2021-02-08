import React from 'react'
import PropTypes from 'prop-types'
import FullName from './FullName'

const Title = ({ name, position }) => (
  <div className='header__title'>
    <FullName name={name} />
    <div className='header__position'>{position}</div>
  </div>
)

Title.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Title
