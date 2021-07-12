import React, { Suspense } from 'react'
import { observer } from 'mobx-react-lite'
import {
  useUpdateAppTitle,
  useUpdateHtmlLangAttr,
  useLoadAppData,
  useSaveAppData,
} from './hooks'
import Loader from './components/Common/Loader'
import Toolbar from './components/Toolbar'
import CVPage from './pages/CV'
import './App.css'

const App = () => {
  useUpdateAppTitle()
  useUpdateHtmlLangAttr()
  useLoadAppData()
  useSaveAppData()

  return (
    <Suspense fallback={<Loader className='app-loader' />}>
      <Toolbar />
      <CVPage />
    </Suspense>
  )
}

export default observer(App)
