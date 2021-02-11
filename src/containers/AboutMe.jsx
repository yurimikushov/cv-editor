import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore, useAboutMeStore } from '../stores'
import AboutMe from '../components/AboutMe'

const AboutMeContainer = observer(() => {
  const appProps = useAppPropsStore()
  const aboutMeStore = useAboutMeStore()

  return (
    <AboutMe
      showPreview={appProps.showPreview}
      description={aboutMeStore.description}
      setDescription={aboutMeStore.setDescription}
    />
  )
})

export default AboutMeContainer