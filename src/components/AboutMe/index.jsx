import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
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
        placeholder='Tell about your qualities, knowledge and hobbies.'
        readOnly={!editable}
      />
    </div>
  )
}

export default observer(AboutMe)
