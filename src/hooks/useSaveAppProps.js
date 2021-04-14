import { saveAppProps } from '../api'
import { useGetAppPropsFromState } from '../store'

const useSaveAppProps = () => {
  const getAppProps = useGetAppPropsFromState()

  return async () => await saveAppProps(getAppProps())
}

export { useSaveAppProps }
