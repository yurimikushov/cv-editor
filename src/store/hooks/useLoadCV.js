import { useSetCVToState } from './useSetCVToState'
import { getCV } from '../../api'

const useLoadCV = () => {
  const setCV = useSetCVToState()

  return async () => setCV(await getCV())
}

export { useLoadCV }
