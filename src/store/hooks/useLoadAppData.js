import { useEffect } from 'react'
import { useStore } from '../StoreProvider'
import { useLoadCV } from './useLoadCV'
import { useLoadAppProps } from './useLoadAppProps'

const useLoadAppData = () => {
  const { appProps } = useStore()
  const loadAppProps = useLoadAppProps()
  const loadCV = useLoadCV()

  useEffect(() => {
    appProps.setIsCVLoading(true)

    loadAppProps()
    loadCV()

    appProps.setIsCVLoading(false)
  }, [])
}

export { useLoadAppData }
