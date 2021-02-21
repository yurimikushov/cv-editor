import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  useAboutMe,
  useExperienceList,
  useEducationList,
  useContactList,
  useTechnologyList,
  useLanguageList,
} from '../../store'
import Button from '../Common/Button'

const FillIn = () => {
  const aboutMe = useAboutMe()
  const experiencies = useExperienceList()
  const educations = useEducationList()
  const contacts = useContactList()
  const technologies = useTechnologyList()
  const languagies = useLanguageList()

  const fillInExampleHandler = () => {
    aboutMe.fillInExample()
    experiencies.fillInExample()
    educations.fillInExample()
    contacts.fillInExample()
    technologies.fillInExample()
    languagies.fillInExample()
  }

  return (
    <div className='toolbar__fill-in item item_2'>
      <div className='toolbar__fill-in-title title title_3 item item_3'>
        Fill in
      </div>
      <ul className='toolbar__fill-in-commands'>
        <li className='toolbar__fill-in-example item item_3'>
          <Button
            className='toolbar__fill-in-example-btn'
            title='Example'
            onClick={fillInExampleHandler}
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(FillIn)
