import { getCV } from '../api'
import { useSetCVToState } from '../store'

const useLoadCV = () => {
  const setCV = useSetCVToState()

  return async () => setCV(await getCV())
}

export { useLoadCV }
