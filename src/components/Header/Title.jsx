import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ name, position }) => (
  <div className='header__title'>
    <p className='header__name'>{name}</p>
    <p className='header__position'>{position}</p>
  </div>
)

Title.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Title
