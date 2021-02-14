import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps } from './store'
import TopLine from './components/TopLine'
import EditButton from './containers/EditButton'
import CV from './containers/CV'
import './App.css'

const App = () => {
  const appProps = useAppProps()

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
