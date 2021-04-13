import { getAppProps } from '../api'
import { useSetAppPropsToState } from '../store'

const useLoadAppProps = () => {
  const setAppProps = useSetAppPropsToState()

  return async () => setAppProps(await getAppProps())
}

export { useLoadAppProps }
