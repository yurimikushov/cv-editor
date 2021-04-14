import { getCVExample } from '../api'
import { useStore, useSetCVToState } from '../store'
import { useSaveCV } from './useSaveCV'

const useLoadExampleCV = () => {
  const { appProps } = useStore()
  const saveCV = useSaveCV()
  const setCV = useSetCVToState()

  return async () => {
    appProps.setIsCVLoading(true)

    await saveCV()
    setCV(await getCVExample())

    appProps.setIsCVLoading(false)
  }
}

export { useLoadExampleCV }
