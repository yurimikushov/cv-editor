import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import { useAboutMeStore } from '../stores'

const HeaderContainer = observer(() => {
  const showPreview = false
  const aboutMeStore = useAboutMeStore()

  return (
    <Header
      showPreview={showPreview}
      fullName={aboutMeStore.fullName}
      position={aboutMeStore.position}
      setFullName={aboutMeStore.setFullName}
      setPosition={aboutMeStore.setPosition}
      avatar={aboutMeStore.avatar}
    />
  )
})

export default HeaderContainer
