import React from 'react'
import PropTypes from 'prop-types'

const Position = ({ showPreview, position, setPosition }) => {
  if (showPreview) {
    return <div className='cv-header__position'>{position || 'Position'}</div>
  }

  return (
    <input
      className='cv-header__position'
      type='text'
      value={position}
      placeholder='Position'
      onChange={(e) => setPosition(e.target.value)}
    ></input>
  )
}

Position.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  setPosition: PropTypes.func.isRequired,
}

export default Position
