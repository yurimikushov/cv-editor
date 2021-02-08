import React from 'react'
import PropTypes from 'prop-types'

const FullName = ({ showPreview, fullName, setFullName }) => {
  if (showPreview) {
    return <div className='header__name'>{fullName}</div>
  }

  return (
    <input
      className='header__name'
      type='text'
      value={fullName}
      placeholder='Full name'
      onChange={(e) => setFullName(e.target.value)}
    ></input>
  )
}

FullName.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
}

export default FullName
