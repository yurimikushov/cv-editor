import React from 'react'
import { observer } from 'mobx-react-lite'
import EditButton from '../components/EditButton'
import { useAppProps } from '../store'

const EditButtonContainer = () => {
  const appProps = useAppProps()

  return (
    <EditButton
      showPreview={appProps.showPreview}
      toggleShowPreview={appProps.toggleShowPreview}
    />
  )
}

export default observer(EditButtonContainer)
