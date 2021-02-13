import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore, useExperiencesStore } from '../stores'
import ExperienceList from '../components/ExperienceList'

const ExperienceListContainer = observer(() => {
  const appPropsStore = useAppPropsStore()
  const experiencesStore = useExperiencesStore()

  return (
    <ExperienceList
      showPreview={appPropsStore.showPreview}
      experiences={experiencesStore.experiences}
    />
  )
})

export default ExperienceListContainer
