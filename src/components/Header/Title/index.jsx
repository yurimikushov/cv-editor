import React from 'react'
import PropTypes from 'prop-types'
import FullName from './FullName'
import Position from './Position'

const Title = ({
  showPreview,
  fullName,
  position,
  setFullName,
  setPosition,
}) => (
  <div className='header__title'>
    <FullName
      showPreview={showPreview}
      fullName={fullName}
      setFullName={setFullName}
    />
    <Position
      className='header__position'
      showPreview={showPreview}
      position={position}
      setPosition={setPosition}
    />
  </div>
)

Title.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
}

export default Title
