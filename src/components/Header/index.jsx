import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Avatar from './Avatar'
import './index.css'

export const Header = ({
  showPreview,
  fullName,
  position,
  setFullName,
  setPosition,
  avatar,
}) => (
  <header className='cv-header'>
    <Title
      showPreview={showPreview}
      fullName={fullName}
      position={position}
      setFullName={setFullName}
      setPosition={setPosition}
    />
    <Avatar src={avatar} />
  </header>
)

Header.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default Header
