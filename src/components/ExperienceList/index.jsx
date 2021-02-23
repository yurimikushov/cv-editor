import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Experience from './Experience'
import Button from '../Common/Button'

const ExperienceList = () => {
  const { appProps, experienceList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='experiences item item_1'>
      <div className='experiences___title title title_0 item item_2'>
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
        <Button
          className='experiences__add-btn flex-center-center'
          title={t('Add')}
          onClick={() => experienceList.addExperience()}
        />
      )}
    </div>
  )
}

export default observer(ExperienceList)
