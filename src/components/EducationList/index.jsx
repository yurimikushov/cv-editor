import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Education from './Education'
import Button from '../Common/Button'

const EducationList = () => {
  const { appProps, educationList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='educations item item_1'>
      <div className='educations__title title t-1 item item_2'>
        {t('Education')}
      </div>
      {educationList.educations.map((education) => (
        <Education
          key={education.id}
          editable={appProps.editable}
          education={education}
          removeEducation={educationList.removeEducation}
        />
      ))}
      {appProps.editable && (
        <Button
          className='educations__add-btn flex-center-center'
          title={t('Add')}
          onClick={() => educationList.addEducation()}
        />
      )}
    </div>
  )
}

export default observer(EducationList)
