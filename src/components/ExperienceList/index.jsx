import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useExperienceList } from '../../store'
import Experience from './Experience'
import Button from '../Button'

const ExperienceList = () => {
  const { editable } = useAppProps()
  const { experiences, addExperience } = useExperienceList()

  return (
    <div className='experiences item item_1'>
      <div className='title title_0'>Experience</div>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          editable={editable}
          experience={experience}
        />
      ))}
      <Button title='Add' onClick={addExperience} />
    </div>
  )
}

export default observer(ExperienceList)
