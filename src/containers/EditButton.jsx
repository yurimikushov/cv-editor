import React from 'react'
import { observer } from 'mobx-react-lite'
import EditButton from '../components/EditButton'
import { useAppPropsStore } from '../stores'

const EditButtonContainer = () => {
  const appPropsStore = useAppPropsStore()

  return (
    <EditButton
      showPreview={appPropsStore.showPreview}
      toggleShowPreview={appPropsStore.toggleShowPreview}
    />
  )
}

export default observer(EditButtonContainer)
