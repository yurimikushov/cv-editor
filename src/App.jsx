import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useLoadAppData, useSaveAppData, useStore } from './store'
import TopLine from './components/TopLine'
import Toolbar from './components/Toolbar'
import CV from './pages/CV'
import './App.css'

const App = () => {
  useLoadAppData()
  useSaveAppData()

  const { appProps } = useStore()

  useEffect(() => {
    document.title = appProps.title
  }, [appProps.title])

  return (
    <>
      <TopLine />
      <Toolbar />
      <CV />
    </>
  )
}

export default observer(App)
