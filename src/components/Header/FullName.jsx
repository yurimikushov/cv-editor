import React, { useState } from 'react'
import PropTypes from 'prop-types'

const preview = false

const FullName = ({ name }) => {
  const [previewName, setPreviewName] = useState(name)

  if (preview) {
    return <div className='header__name'>{name}</div>
  }

  return (
    <input
      className='header__name'
      type='text'
      value={previewName}
      placeholder='Full name'
      onChange={(e) => setPreviewName(e.target.value)}
    ></input>
  )
}

FullName.propTypes = {
  name: PropTypes.string.isRequired,
}
export default FullName
