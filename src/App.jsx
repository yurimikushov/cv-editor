import React, { Suspense, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useLoadAppData, useSaveAppData, useStore } from './store'
import Loader from './components/Common/Loader'
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
    <Suspense fallback={<Loader className='app-loader' />}>
      <TopLine />
      <Toolbar />
      <CV />
    </Suspense>
  )
}

export default observer(App)
