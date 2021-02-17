import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useTechnologyList } from '../store'
import MultilineInputField from './MultilineInputField'

const TechnologyList = () => {
  const { editable } = useAppProps()
  const { description, setDescription } = useTechnologyList()

  return (
    <div className='technologies item item_1'>
      <div className='title title_3'>Technologies</div>
      <MultilineInputField
        className='technology description description_1'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Technology stack'
        readOnly={!editable}
      />
    </div>
  )
}

export default observer(TechnologyList)
