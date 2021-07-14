import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Language from './Language'
import AddButton from '../Common/AddButton'
import './index.css'

const LanguageList = () => {
  const { appProps, languageList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='languages item i-1'>
      <div className='languages__title title t-4 item i-3'>
        {t('Languages')}
      </div>
      {languageList.languages.map((language) => (
        <Language
          key={language.id}
          editable={appProps.editable}
          language={language}
          removeLanguage={languageList.removeLanguage}
        />
      ))}
      {appProps.editable && (
        <AddButton onClick={() => languageList.addLanguage()} />
      )}
    </div>
  )
}

export default observer(LanguageList)
