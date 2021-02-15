import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useExperienceList } from '../../store'
import Experience from './Experience'

const ExperienceList = () => {
  const { editable } = useAppProps()
  const { experiences } = useExperienceList()

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
    </div>
  )
}

export default observer(ExperienceList)
