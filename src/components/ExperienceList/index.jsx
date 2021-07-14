import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Experience from './Experience'
import AddButton from '../Common/AddButton'

const ExperienceList = () => {
  const { appProps, experienceList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='experiences item i-1'>
      <div className='experiences___title title t-1 item i-2'>
        {t('Experience')}
      </div>
      {experienceList.experiences.map((experience) => (
        <Experience
          key={experience.id}
          editable={appProps.editable}
          experience={experience}
          removeExperience={experienceList.removeExperience}
        />
      ))}
      {appProps.editable && (
        <AddButton onClick={() => experienceList.addExperience()} />
      )}
    </div>
  )
}

export default observer(ExperienceList)
