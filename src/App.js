import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useAppPropsStore } from './stores'
import TopLine from './components/TopLine'
import EditButton from './containers/EditButton'
import Header from './containers/Header'
import Info from './containers/Info'
import './App.css'

const App = observer(() => {
  const appProps = useAppPropsStore()

  useEffect(() => {
    document.title = appProps.name
  }, [appProps.name])

  return (
    <>
      <TopLine />
      <EditButton />
      <div className='cv'>
        <Header />
        <Info />
      </div>
    </>
  )
})

export default App
