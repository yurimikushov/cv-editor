import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../store'
import AboutMe from '../components/AboutMe'

const AboutMeContainer = () => {
  const appProps = useAppProps()
  const aboutMe = useAboutMe()

  // FIXME: should convert the observables to plain JS values or structures,
  // if I want to pass observables to a component that isn't an observer.
  toJS(aboutMe)

  return <AboutMe showPreview={appProps.showPreview} aboutMe={aboutMe} />
}

export default observer(AboutMeContainer)
