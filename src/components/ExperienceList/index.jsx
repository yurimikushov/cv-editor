import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useExperienceList } from '../../store'
import Experience from './Experience'
import Button from '../Common/Button'

const ExperienceList = () => {
  const { editable } = useAppProps()
  const { experiences, addExperience, removeExperience } = useExperienceList()

  return (
    <div className='experiences item item_1'>
      <div className='experiences___title title title_0 item item_2'>
        Experience
      </div>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          editable={editable}
          experience={experience}
          removeExperience={removeExperience}
        />
      ))}
      {editable && (
        <Button
          className='experiences__add-btn flex-center-center'
          title='Add'
          onClick={() => addExperience()}
        />
      )}
    </div>
  )
}

export default observer(ExperienceList)
