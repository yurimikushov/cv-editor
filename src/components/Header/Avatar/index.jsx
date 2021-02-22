import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Button from '../../Common/Button'
import './index.css'

const Avatar = ({ editable, src, loadAvatar }) => {
  const avatarInputrRef = useRef()

  const loadAvatarHandler = () => {
    const { current: avatarInput } = avatarInputrRef

    avatarInput.addEventListener('change', () => {
      if (avatarInput.files && avatarInput.files[0]) {
        const reader = new FileReader()
        reader.addEventListener('load', (e) => loadAvatar(e.target.result))
        reader.readAsDataURL(avatarInput.files[0])
      }
    })

    avatarInput.click()
  }

  return (
    <div className='avatar' data-editable={editable}>
      <img className='avatar__presenter' src={src} alt='Avatar' />
      {editable && (
        <>
          <Button
            className='avatar__load-btn'
            title='+'
            onClick={loadAvatarHandler}
            tabIndex='-1'
          />
          <input
            ref={avatarInputrRef}
            className='avatar__input'
            type='file'
            accept='.png, .jpg, .jpeg'
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  )
}

Avatar.propTypes = {
  editable: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  loadAvatar: PropTypes.func.isRequired,
}

export default Avatar
