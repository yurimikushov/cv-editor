import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../../store'
import Title from './Title'
import Avatar from './Avatar'
import './index.css'

export const Header = () => {
  const { editable } = useAppProps()
  const {
    fullName,
    position,
    setFullName,
    setPosition,
    avatar,
    setAvatar,
    removeAvatar,
  } = useAboutMe()

  return (
    <header className='cv-header'>
      <div className='cv-header__left-side'>
        <Title
          editable={editable}
          fullName={fullName}
          position={position}
          setFullName={setFullName}
          setPosition={setPosition}
        />
      </div>
      <div className='cv-header__right-side'>
        <Avatar
          editable={editable}
          src={avatar}
          setAvatar={setAvatar}
          removeAvatar={removeAvatar}
        />
      </div>
    </header>
  )
}

export default observer(Header)
