import { useSetAppPropsToState } from './useSetAppPropsToState'
import { getAppProps } from '../../api'

const useLoadAppProps = () => {
  const setAppProps = useSetAppPropsToState()

  return async () => setAppProps(await getAppProps())
}

export { useLoadAppProps }
