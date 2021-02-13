import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore, useEducationsStore } from '../stores'
import EducationList from '../components/EducationList'

const ExperienceListContainer = () => {
  const appPropsStore = useAppPropsStore()
  const educationsStore = useEducationsStore()

  return (
    <EducationList
      showPreview={appPropsStore.showPreview}
      educations={educationsStore.educations}
    />
  )
}

export default observer(ExperienceListContainer)
