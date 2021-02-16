import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useLanguageList } from '../../store'
import Language from './Language'

const LanguageList = () => {
  const { editable } = useAppProps()
  const { languages } = useLanguageList()

  return (
    <div className='languages item item_1'>
      <div className='title title_3'>Languages</div>
      {languages.map((language) => (
        <Language key={language.id} editable={editable} language={language} />
      ))}
    </div>
  )
}

export default observer(LanguageList)
