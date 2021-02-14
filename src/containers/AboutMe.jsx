import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore, useAboutMeStore } from '../stores'
import AboutMe from '../components/AboutMe'

const AboutMeContainer = () => {
  const appProps = useAppPropsStore()
  const aboutMe = useAboutMeStore()

  return (
    <AboutMe
      showPreview={appProps.showPreview}
      aboutMe={{
        description: aboutMe.description,
        setDescription: aboutMe.setDescription,
      }}
    />
  )
}

export default observer(AboutMeContainer)
