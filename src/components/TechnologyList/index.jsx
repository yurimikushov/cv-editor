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
    <div className='technologies item item_1'>
      <div className='technologies__title title title_3 item item_3'>
        {t('Technologies')}
      </div>
      <MultilineInputField
        className='technologies__list title title_4'
        value={technologyList.technologies}
        onChange={(e) => technologyList.setTechnologies(e.target.value)}
        placeholder={t('Technology stack')}
        readOnly={!appProps.editable}
      />
    </div>
  )
}

export default observer(TechnologyList)
