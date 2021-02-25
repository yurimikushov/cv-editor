import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { fileToBase64 } from '../../../utils'
import Button from '../../Common/Button'
import './index.css'

const Avatar = ({ editable, src, setAvatar, removeAvatar }) => {
  const avatarInputrRef = useRef()

  const uploadAvatarHandler = () => {
    const { current: avatarInput } = avatarInputrRef

    avatarInput.addEventListener('change', async () => {
      if (avatarInput.files && avatarInput.files[0]) {
        setAvatar(await fileToBase64(avatarInput.files[0]))
      }
    })

    avatarInput.click()
  }

  const removeAvatarHandler = () => {
    if (window.confirm('Are you sure you wanna delete the photo?')) {
      removeAvatar()
    }
  }

  return (
    <div className='avatar' data-editable={editable}>
      <img
        className='avatar__presenter'
        src={src || '/img/avatar-placeholder-100x100.png'}
        alt='Avatar'
      />
      {editable && (
        <>
          <Button
            className='avatar__upload-btn'
            title='+'
            onClick={uploadAvatarHandler}
            tabIndex='-1'
          />
          <input
            ref={avatarInputrRef}
            className='avatar__input'
            type='file'
            accept='.png, .jpg, .jpeg'
            style={{ display: 'none' }}
          />
          {src && (
            <Button
              className='avatar__remove-btn'
              title='x'
              onClick={removeAvatarHandler}
              tabIndex='-1'
            />
          )}
        </>
      )}
    </div>
  )
}

Avatar.propTypes = {
  editable: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired,
  removeAvatar: PropTypes.func.isRequired,
}

export default Avatar
