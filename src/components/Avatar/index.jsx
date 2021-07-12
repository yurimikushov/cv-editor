import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { useTranslation } from 'react-i18next'
import { fileToBase64 } from '../../utils'
import Button from '../Common/Button'
import './index.css'

const DEFAULT_PLACEHOLDER = '/img/avatar-placeholder-100x100.png'

const Avatar = ({ className }) => {
  const {
    appProps: { editable },
    avatar: { avatar, setAvatar, removeAvatar },
  } = useStore()

  const avatarInputRef = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    const { current: avatarInput } = avatarInputRef

    if (!avatarInput) {
      return
    }

    const avatarChangeHandler = async () => {
      if (avatarInput.files && avatarInput.files[0]) {
        setAvatar(await fileToBase64(avatarInput.files[0]))
      }
    }

    avatarInput.addEventListener('change', avatarChangeHandler)

    return () => {
      avatarInput.removeEventListener('change', avatarChangeHandler)
    }
  }, [editable])

  const uploadAvatarHandler = () => {
    avatarInputRef.current.click()
  }

  const removeAvatarHandler = () => {
    if (window.confirm(t('Are you sure you wanna delete the photo?'))) {
      removeAvatar()
    }
  }

  return (
    <div className={cn(className, 'avatar')} data-editable={editable}>
      <img
        className='avatar__presenter'
        src={avatar || DEFAULT_PLACEHOLDER}
        alt='Avatar'
      />
      {editable && (
        <>
          <Button
            className='avatar__upload-btn'
            title={'\u002B'}
            onClick={uploadAvatarHandler}
            tabIndex='-1'
          />
          <input
            ref={avatarInputRef}
            className='avatar__input'
            type='file'
            accept='.png, .jpg, .jpeg'
            style={{ display: 'none' }}
          />
          {avatar && (
            <Button
              className='avatar__remove-btn'
              title={'\u00D7'}
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
  className: PropTypes.string,
}

export default observer(Avatar)
