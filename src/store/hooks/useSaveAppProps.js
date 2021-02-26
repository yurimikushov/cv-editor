import { useGetAppPropsFromState } from './useGetAppPropsFromState'
import { saveAppProps } from '../../api'

const useSaveAppProps = () => {
  const getAppProps = useGetAppPropsFromState()

  return async () => await saveAppProps(getAppProps())
}

export { useSaveAppProps }
