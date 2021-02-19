import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Common/Button'
import './index.css'

const Avatar = ({ editable, avatar, setAvatar }) => {
  const createImageInput = () => {
    const imageInput = document.createElement('input')

    imageInput.type = 'file'
    imageInput.accept = '.png, .jpg, .jpeg'
    imageInput.style.display = 'none'

    return imageInput
  }

  const loadAvatar = () => {
    const avatarInput = createImageInput()

    document.body.appendChild(avatarInput)

    avatarInput.addEventListener('change', () => {
      if (avatarInput.files && avatarInput.files[0]) {
        const reader = new FileReader()
        reader.addEventListener('load', (e) => setAvatar(e.target.result))
        reader.readAsDataURL(avatarInput.files[0])
      }
    })

    avatarInput.click()
    avatarInput.remove()
  }

  return (
    <div className='avatar' data-editable={editable}>
      <img
        className='avatar__presenter'
        src={avatar}
        alt='Avatar'
      />
      {editable && (
        <Button
          className='avatar__load-btn'
          title='+'
          onClick={loadAvatar}
        />
      )}
    </div>
  )
}

Avatar.propTypes = {
  editable: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired,
}

export default Avatar
