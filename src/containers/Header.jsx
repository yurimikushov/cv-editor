import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import { useAppPropsStore, useAboutMeStore } from '../stores'

const HeaderContainer = observer(() => {
  const appPropsStore = useAppPropsStore()
  const aboutMeStore = useAboutMeStore()

  return (
    <Header
      showPreview={appPropsStore.showPreview}
      fullName={aboutMeStore.fullName}
      position={aboutMeStore.position}
      setFullName={aboutMeStore.setFullName}
      setPosition={aboutMeStore.setPosition}
      avatar={aboutMeStore.avatar}
    />
  )
})

export default HeaderContainer
