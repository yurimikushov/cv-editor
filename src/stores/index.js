import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalObservable } from 'mobx-react-lite'
import createAppPropsStore from './appPropsStore'
import createAboutMeStore from './aboutMeStore'

const AppPropsContext = createContext(null)
const AboutMeContext = createContext(null)

const StoreProvider = ({ children }) => {
  const appPropsStore = useLocalObservable(createAppPropsStore)
  const aboutMeStore = useLocalObservable(createAboutMeStore)

  return (
    <AppPropsContext.Provider value={appPropsStore}>
      <AboutMeContext.Provider value={aboutMeStore}>
        {children}
      </AboutMeContext.Provider>
    </AppPropsContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

const useAppPropsStore = () => useContext(AppPropsContext)
const useAboutMeStore = () => useContext(AboutMeContext)

export { StoreProvider as default, useAppPropsStore, useAboutMeStore }
