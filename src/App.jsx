import React, { Suspense } from 'react'
import { observer } from 'mobx-react-lite'
import {
  useUpdateAppTitle,
  useUpdateHtmlLangAttr,
  useLoadAppData,
  useSaveAppData,
} from './store'
import Loader from './components/Common/Loader'
import TopLine from './components/TopLine'
import Toolbar from './components/Toolbar'
import CV from './pages/CV'
import './App.css'

const App = () => {
  useUpdateAppTitle()
  useUpdateHtmlLangAttr()
  useLoadAppData()
  useSaveAppData()

  return (
    <Suspense fallback={<Loader className='app-loader' />}>
      <TopLine />
      <Toolbar />
      <CV />
    </Suspense>
  )
}

export default observer(App)
