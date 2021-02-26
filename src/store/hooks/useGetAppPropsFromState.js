import { useStore } from '../StoreProvider'

const useGetAppPropsFromState = () => {
  const { appProps } = useStore()

  return () => ({
    ...appProps.getAll(),
  })
}

export { useGetAppPropsFromState }
