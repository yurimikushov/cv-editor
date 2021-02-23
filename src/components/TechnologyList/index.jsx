import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
import './index.css'

const TechnologyList = () => {
  const { appProps, technologyList } = useStore()

  return (
    <div className='technologies item item_1'>
      <div className='technologies__title title title_3 item item_3'>
        Technologies
      </div>
      <MultilineInputField
        className='technologies__list title title_4'
        value={technologyList.technologies}
        onChange={(e) => technologyList.setTechnologies(e.target.value)}
        placeholder='Technology stack'
        readOnly={!appProps.editable}
      />
    </div>
  )
}

export default observer(TechnologyList)
