import { useEffect } from 'react'
import { useStore } from '../StoreProvider'

const useUpdateAppTitle = () => {
  const { appProps } = useStore()

  useEffect(() => {
    document.title = appProps.title
  }, [appProps.title])
}

export { useUpdateAppTitle }
