import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useEducationList } from '../store'
import EducationList from '../components/EducationList'

const ExperienceListContainer = () => {
  const appProps = useAppProps()
  const educationList = useEducationList()

  return (
    <EducationList
      showPreview={appProps.showPreview}
      educations={educationList.educations}
    />
  )
}

export default observer(ExperienceListContainer)
