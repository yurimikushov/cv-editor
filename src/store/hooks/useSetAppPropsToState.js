import { useStore } from '../StoreProvider'

const useSetAppPropsToState = () => {
  const { appProps } = useStore()

  return ({ editable, lang }) => {
    appProps.setAll(editable, lang)
  }
}

export { useSetAppPropsToState }
