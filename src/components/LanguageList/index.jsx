import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Language from './Language'
import Button from '../Common/Button'
import './index.css'

const LanguageList = () => {
  const { appProps, languageList } = useStore()

  return (
    <div className='languages item item_1'>
      <div className='languages__title title title_3 item item_3'>
        Languages
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
        <Button
          className='languages__add-btn flex-center-center'
          title='Add'
          onClick={() => languageList.addLanguage()}
        />
      )}
    </div>
  )
}

export default observer(LanguageList)
