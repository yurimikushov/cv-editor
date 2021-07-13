import React, { Suspense } from 'react'
import {
  useUpdateAppTitle,
  useUpdateHtmlLangAttr,
  useLoadAppData,
  useSaveAppData,
} from './hooks'
import Loader from './components/Common/Loader'
import CVPage from './pages/CV'
import './App.css'

const App = () => {
  useUpdateAppTitle()
  useUpdateHtmlLangAttr()
  useLoadAppData()
  useSaveAppData()

  return (
    <Suspense fallback={<Loader className='app-loader' />}>
      <CVPage />
    </Suspense>
  )
}

export default App
