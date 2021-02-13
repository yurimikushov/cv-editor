import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore } from './stores'
import TopLine from './components/TopLine'
import EditButton from './containers/EditButton'
import CV from './containers/CV'
import './App.css'

const App = () => {
  const appProps = useAppPropsStore()

  useEffect(() => {
    document.title = appProps.name
  }, [appProps.name])

  return (
    <>
      <TopLine />
      <EditButton />
      <CV />
    </>
  )
}

export default observer(App)
