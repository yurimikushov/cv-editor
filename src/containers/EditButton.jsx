import React from 'react'
import { observer } from 'mobx-react-lite'
import EditButton from '../components/EditButton'
import { useAppPropsStore } from '../stores'

const EditButtonContainer = observer(() => {
  const appProps = useAppPropsStore()

  return (
    <EditButton
      showPreview={appProps.showPreview}
      toggleShowPreview={appProps.toggleShowPreview}
    />
  )
})

export default EditButtonContainer
