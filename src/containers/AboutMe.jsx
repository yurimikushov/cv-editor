import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../store'
import AboutMe from '../components/AboutMe'

const AboutMeContainer = () => {
  const appProps = useAppProps()
  const aboutMe = useAboutMe()

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
