import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Avatar from './Avatar'
import personIcon from './person-icon'
import './index.css'

export const Header = ({ name, position }) => {
  return (
    <header className='header'>
      <Title name={name} position={position} />
      <Avatar src={personIcon} />
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Header
