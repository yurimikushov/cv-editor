import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useTechnologyList } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
import './index.css'

const TechnologyList = () => {
  const { editable } = useAppProps()
  const { description, setDescription } = useTechnologyList()

  return (
    <div className='technologies item item_1'>
      <div className='technologies__title title title_3 item item_3'>
        Technologies
      </div>
      <MultilineInputField
        className='technologies__list title title_4'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Technology stack'
        readOnly={!editable}
      />
    </div>
  )
}

export default observer(TechnologyList)
