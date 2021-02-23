import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
import './index.css'

const AboutMe = () => {
  const { appProps, aboutMe } = useStore()

  return (
    <div className='about-me item item_1'>
      <MultilineInputField
        className='about-me__description title title_2'
        value={aboutMe.description}
        onChange={(e) => aboutMe.setDescription(e.target.value)}
        placeholder='Tell about your qualities, knowledge and hobbies.'
        readOnly={!appProps.editable}
      />
    </div>
  )
}

export default observer(AboutMe)
