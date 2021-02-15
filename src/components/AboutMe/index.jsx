import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../../store'
import MultilineInputField from '../MultilineInputField'
import './index.css'

const AboutMe = () => {
  const { editable } = useAppProps()
  const { description, setDescription } = useAboutMe()

  return (
    <div className='about-me item item_1'>
      <MultilineInputField
        className='about-me__description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Describe yourself'
        readOnly={!editable}
        readOnlyPlaceholder='Description of your qualities, knowledge and hobbies.'
      />
    </div>
  )
}

export default observer(AboutMe)
