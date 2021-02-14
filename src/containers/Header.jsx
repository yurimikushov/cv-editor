import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import { useAppProps, useAboutMe } from '../store'

const HeaderContainer = () => {
  const appProps = useAppProps()
  const aboutMe = useAboutMe()

  return (
    <Header
      showPreview={appProps.showPreview}
      fullName={aboutMe.fullName}
      position={aboutMe.position}
      setFullName={aboutMe.setFullName}
      setPosition={aboutMe.setPosition}
      avatar={aboutMe.avatar}
    />
  )
}

export default observer(HeaderContainer)
