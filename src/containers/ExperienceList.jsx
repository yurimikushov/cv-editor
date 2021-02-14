import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useAppProps, useExperienceList } from '../store'
import ExperienceList from '../components/ExperienceList'

const ExperienceListContainer = () => {
  const appProps = useAppProps()
  const experienceList = useExperienceList()

  // FIXME: should convert the observables to plain JS values or structures,
  // if I want to pass observables to a component that isn't an observer.
  toJS(experienceList.experiences)

  return (
    <ExperienceList
      showPreview={appProps.showPreview}
      experiences={experienceList.experiences}
    />
  )
}

export default observer(ExperienceListContainer)
