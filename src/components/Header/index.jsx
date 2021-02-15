import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../../store'
import Title from './Title'
import Avatar from './Avatar'
import './index.css'

export const Header = () => {
  const { editable } = useAppProps()
  const { fullName, position, setFullName, setPosition, avatar } = useAboutMe()

  return (
    <header className='cv-header'>
      <Title
        editable={editable}
        fullName={fullName}
        position={position}
        setFullName={setFullName}
        setPosition={setPosition}
      />
      <Avatar src={avatar} />
    </header>
  )
}

export default observer(Header)
