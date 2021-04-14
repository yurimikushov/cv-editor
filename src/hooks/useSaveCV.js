import { saveCV } from '../api'
import { useStore, useGetCVFromState } from '../store'

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
