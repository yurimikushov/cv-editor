import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useExperienceList } from '../store'
import ExperienceList from '../components/ExperienceList'

const ExperienceListContainer = () => {
  const appProps = useAppProps()
  const experienceList = useExperienceList()

  return (
    <ExperienceList
      showPreview={appProps.showPreview}
      experiences={experienceList.experiences}
    />
  )
}

export default observer(ExperienceListContainer)
