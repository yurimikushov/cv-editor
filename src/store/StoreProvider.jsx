import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalObservable } from 'mobx-react-lite'
import createAppProps from './appProps'
import createAboutMe from './aboutMe'
import createAvatar from './avatar'
import createExperienceList from './experienceList'
import createEducationList from './educationList'
import createContactList from './contactList'
import createTechnologyList from './technologyList'
import createLanguageList from './languageList'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const storeContextValue = {
    appProps: useLocalObservable(createAppProps),
    aboutMe: useLocalObservable(createAboutMe),
    avatar: useLocalObservable(createAvatar),
    experienceList: useLocalObservable(createExperienceList),
    educationList: useLocalObservable(createEducationList),
    contactList: useLocalObservable(createContactList),
    technologyList: useLocalObservable(createTechnologyList),
    languageList: useLocalObservable(createLanguageList),
  }

  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
}

const useStore = () => useContext(StoreContext)

export { StoreProvider, useStore }
