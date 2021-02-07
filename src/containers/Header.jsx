import React from 'react'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import { useAboutMeStore } from '../stores'

const HeaderContainer = observer(() => {
  const aboutMeStore = useAboutMeStore()

  return (
    <Header name={aboutMeStore.fullName} position={aboutMeStore.position} />
  )
})

export default HeaderContainer
