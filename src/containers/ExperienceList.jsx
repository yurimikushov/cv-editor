import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore, useExperienceStore } from '../stores'
import ExperienceList from '../components/ExperienceList'

const ExperienceListContainer = observer(() => {
  const appPropsStore = useAppPropsStore()
  const experienceStore = useExperienceStore()

  return (
    <ExperienceList
      showPreview={appPropsStore.showPreview}
      experiences={experienceStore.experiences}
    />
  )
})

export default ExperienceListContainer
