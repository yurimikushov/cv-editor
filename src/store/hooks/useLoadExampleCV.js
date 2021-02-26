import { useStore } from '../StoreProvider'
import { useSetCVToState } from './useSetCVToState'
import { useSaveCV } from './useSaveCV'
import { getCVExample } from '../../api'

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
