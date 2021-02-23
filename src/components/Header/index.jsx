import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Title from './Title'
import Avatar from './Avatar'
import './index.css'

export const Header = () => {
  const { appProps, aboutMe, avatar } = useStore()

  return (
    <header className='cv-header'>
      <div className='cv-header__left-side'>
        <Title
          editable={appProps.editable}
          fullName={aboutMe.fullName}
          position={aboutMe.position}
          setFullName={aboutMe.setFullName}
          setPosition={aboutMe.setPosition}
        />
      </div>
      <div className='cv-header__right-side'>
        <Avatar
          editable={appProps.editable}
          src={avatar.avatar}
          setAvatar={avatar.setAvatar}
          removeAvatar={avatar.removeAvatar}
        />
      </div>
    </header>
  )
}

export default observer(Header)
