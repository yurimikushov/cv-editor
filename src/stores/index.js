import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalObservable } from 'mobx-react-lite'
import createAppPropsStore from './appPropsStore'
import createAboutMeStore from './aboutMeStore'
import createExperiencesStore from './experiencesStore'
import createEducationsStore from './educationsStore'
import createContactsStore from './contactsStore'
import createTechnologiesStore from './technologiesStore'
import createLanguagesStore from './languagesStore'

const AppPropsContext = createContext(null)
const AboutMeContext = createContext(null)
const ExperiencesContext = createContext(null)
const EducationsContext = createContext(null)
const ContactsContext = createContext(null)
const TechnologiesContext = createContext(null)
const LanguagesContext = createContext(null)

AppPropsContext.displayName = 'AppPropsStore'
AboutMeContext.displayName = 'AboutMeStore'
ExperiencesContext.displayName = 'ExperiencesStore'
EducationsContext.displayName = 'EducationsStore'
ContactsContext.displayName = 'ContactsStore'
TechnologiesContext.displayName = 'TechnologiesStore'
LanguagesContext.displayName = 'LanguagesStore'

const StoreProvider = ({ children }) => {
  const appPropsStore = useLocalObservable(createAppPropsStore)
  const aboutMeStore = useLocalObservable(createAboutMeStore)
  const experiencesStore = useLocalObservable(createExperiencesStore)
  const educationsStore = useLocalObservable(createEducationsStore)
  const contactsStore = useLocalObservable(createContactsStore)
  const technologiesStore = useLocalObservable(createTechnologiesStore)
  const languagesStore = useLocalObservable(createLanguagesStore)

  return (
    <AppPropsContext.Provider value={appPropsStore}>
      <AboutMeContext.Provider value={aboutMeStore}>
        <ExperiencesContext.Provider value={experiencesStore}>
          <EducationsContext.Provider value={educationsStore}>
            <ContactsContext.Provider value={contactsStore}>
              <TechnologiesContext.Provider value={technologiesStore}>
                <LanguagesContext.Provider value={languagesStore}>
                  {children}
                </LanguagesContext.Provider>
              </TechnologiesContext.Provider>
            </ContactsContext.Provider>
          </EducationsContext.Provider>
        </ExperiencesContext.Provider>
      </AboutMeContext.Provider>
    </AppPropsContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

const useAppPropsStore = () => useContext(AppPropsContext)
const useAboutMeStore = () => useContext(AboutMeContext)
const useExperiencesStore = () => useContext(ExperiencesContext)
const useEducationsStore = () => useContext(EducationsContext)
const useContactsStore = () => useContext(ContactsContext)
const useTechnologiesStore = () => useContext(TechnologiesContext)
const useLanguagesStore = () => useContext(LanguagesContext)

export {
  StoreProvider as default,
  useAppPropsStore,
  useAboutMeStore,
  useExperiencesStore,
  useEducationsStore,
  useContactsStore,
  useTechnologiesStore,
  useLanguagesStore,
}