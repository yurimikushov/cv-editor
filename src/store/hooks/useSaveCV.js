import { useStore } from '../StoreProvider'
import { useGetCVFromState } from './useGetCVFromState'
import { saveCV } from '../../api'

const useSaveCV = () => {
  const { appProps } = useStore()
  const getCV = useGetCVFromState()

  return async () => {
    if (appProps.getShowExampleCV()) {
      return
    }

    await saveCV(getCV())
  }
}

export { useSaveCV }
