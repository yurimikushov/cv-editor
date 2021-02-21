import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useLoadCV, useSaveCV, useAppProps } from './store'
import TopLine from './components/TopLine'
import Toolbar from './components/Toolbar'
import CV from './pages/CV'
import './App.css'

const App = () => {
  const loadCV = useLoadCV()
  const saveCV = useSaveCV()
  const { title } = useAppProps()

  useEffect(loadCV, [loadCV])

  useEffect(() => {
    window.addEventListener('beforeunload', saveCV)
    return () => window.removeEventListener('beforeunload', saveCV)
  }, [saveCV])

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <TopLine />
      <Toolbar />
      <CV />
    </>
  )
}

export default observer(App)
