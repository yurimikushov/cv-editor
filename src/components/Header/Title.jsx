import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ name, position }) => (
  <div className='header__title'>
    <div className='header__name'>{name}</div>
    <div className='header__position'>{position}</div>
  </div>
)

Title.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Title
