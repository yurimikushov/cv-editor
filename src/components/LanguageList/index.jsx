import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useLanguageList } from '../../store'
import Language from './Language'
import Button from '../Common/Button'
import './index.css'

const LanguageList = () => {
  const { editable } = useAppProps()
  const { languages, addLanguage, removeLanguage } = useLanguageList()

  return (
    <div className='languages item item_1'>
      <div className='languages__title title title_3 item item_3'>
        Languages
      </div>
      {languages.map((language) => (
        <Language
          key={language.id}
          editable={editable}
          language={language}
          removeLanguage={removeLanguage}
        />
      ))}
      {editable && (
        <Button
          className='languages__add-btn flex-center-center'
          title='Add'
          onClick={() => addLanguage()}
        />
      )}
    </div>
  )
}

export default observer(LanguageList)
