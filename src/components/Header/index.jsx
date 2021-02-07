import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Avatar from './Avatar'
import './index.css'

export const Header = ({ name, position, avatar }) => {
  return (
    <header className='header'>
      <Title name={name} position={position} />
      <Avatar src={avatar} />
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default Header
