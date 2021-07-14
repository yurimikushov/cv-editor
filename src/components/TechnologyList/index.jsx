import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
import './index.css'

const TechnologyList = () => {
  const { appProps, technologyList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='technologies item i-1'>
      <div className='technologies__title title t-4 item i-3'>
        {t('Technologies')}
      </div>
      <MultilineInputField
        className='technologies__list title t-5'
        value={technologyList.technologies}
        onChange={(e) => technologyList.setTechnologies(e.target.value)}
        placeholder={t('Technology stack')}
        readOnly={!appProps.editable}
      />
    </div>
  )
}

export default observer(TechnologyList)
