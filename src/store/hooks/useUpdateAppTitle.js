import { useEffect } from 'react'
import { useStore } from '../StoreProvider'

const useUpdateAppTitle = () => {
  const { appProps, aboutMe } = useStore()

  useEffect(() => {
    appProps.setTitle(aboutMe.fullName)
  }, [aboutMe.fullName])

  useEffect(() => {
    document.title = appProps.title
  }, [appProps.title])
}

export { useUpdateAppTitle }
