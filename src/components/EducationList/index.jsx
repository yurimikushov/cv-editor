import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useEducationList } from '../../store'
import Education from './Education'

const EducationList = () => {
  const { editable } = useAppProps()
  const { educations } = useEducationList()

  return (
    <div className='educations item item_1'>
      <div className='title title_0'>Education</div>
      {educations.map((education) => (
        <Education key={education.id} editable={editable} {...education} />
      ))}
    </div>
  )
}

export default observer(EducationList)
